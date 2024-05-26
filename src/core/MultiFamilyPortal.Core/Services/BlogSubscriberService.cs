using System.Net.Mail;
using AvantiPoint.EmailService;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MultiFamilyPortal.Data;
using MultiFamilyPortal.Data.Models;
using MultiFamilyPortal.Dtos;

namespace MultiFamilyPortal.Services
{
    internal class BlogSubscriberService : IBlogSubscriberService
    {
        private ILogger _logger { get; }
        private IEmailService _emailService { get; }
        private IBlogContext _context { get; }
        private ITemplateProvider _templateProvider { get; }

        public BlogSubscriberService(
            ILogger<BlogSubscriberService> logger,
            IEmailService emailService,
            ITemplateProvider templateProvider,
            IBlogContext context)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _emailService = emailService ?? throw new ArgumentNullException(nameof(emailService));
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _templateProvider = templateProvider ?? throw new ArgumentNullException(nameof(templateProvider));
        }

        public async Task<SubscriberResult> PostPublished(Post post, Uri baseUri)
        {
            bool hasErrors = false;
            if (await _context.Posts.Where(x => x.Id == post.Id).SumAsync(x => x.Subscribers.Count) > 0)
                return new SubscriberResult {
                    Success = false,
                    Message = "Notifications have already been sent for this post"
                };

            var tags = post.Tags.Select(x => new PostNotificationTag { Tag = x.Id });
            var categories = post.Categories.Select(x => new PostNotificationCategory { Category = x.Id });
            var postUri = new Uri(baseUri, $"blog/post/{post.Published.Year}/{post.Published.Month}/{post.Published.Day}/{post.Slug}?utm_source=email&utm_method=subscriber");
            var author = new Dtos.SubscriberNotification {
                AuthorName = post.Author.DisplayName,
                AuthorProfilePic = GravatarHelper.GetUri(post.Author.Email, 80),
                Email = post.Author.Email,
                SocialImage = post.SocialImage,
                SubscribedDate = "Automatically as the content Author",
                Summary = post.Summary,
                Tags = tags,
                Categories = categories,
                Subject = post.Title,
                UnsubscribeLink = new Uri(baseUri, $"unsubscribe/{post.Author.Email}?code=author"),
                Url = postUri,
                Year = DateTime.Now.Year
            };
            var subscribers = await _context.Subscribers
                .Where(x => x.IsActive && x.Unsubscribed == null && x.Email != post.Author.Email)
                .ToListAsync();

            var subject = $"New Post - {post.Title}";

            try
            {
                var templateResult = await _templateProvider.GetTemplate(PortalTemplate.BlogSubscriberNotification, author);
                var to = new MailAddress(author.Email, author.AuthorName);
                await _emailService.SendAsync(to, templateResult);
            }
            catch (Exception ex)
            {
                hasErrors = true;
                _logger.LogError(ex, $"Error emailing author: {post.Author.DisplayName} for post - {post.Title}");
            }

            foreach (var subscriber in subscribers)
            {
                try
                {
                    var notification = new SubscriberNotification {
                        AuthorName = post.Author.DisplayName,
                        AuthorProfilePic = GravatarHelper.GetUri(post.Author.Email, 80),
                        Email = subscriber.Email,
                        SocialImage = post.SocialImage,
                        SubscribedDate = post.Published.ToString("D"),
                        Summary = post.Summary,
                        Tags = tags,
                        Categories = categories,
                        Subject = post.Title,
                        UnsubscribeLink = new Uri(baseUri, $"subscribers/unsubscribe/{subscriber.Email}?code={subscriber.UnsubscribeCode()}"),
                        Url = postUri,
                        Year = DateTime.Now.Year
                    };

                    var templateResult = await _templateProvider.GetTemplate(PortalTemplate.BlogSubscriberNotification, notification);
                    var to = new MailAddress(notification.Email);

                    if (await _emailService.SendAsync(to, templateResult))
                    {
                        throw new Exception($"Email Service was not successful sending email");
                    }

                    subscriber.Notifications.Add(post);
                    await _context.SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    hasErrors = true;
                    _logger.LogError(ex, $"Error emailing subscriber: {subscriber.Email} for post - {post.Title}");
                }
            }

            return new SubscriberResult {
                Success = !hasErrors,
                Message = hasErrors ? "Encountered one or more errors sending notifications to subscribers" : null
            };
        }

        public async Task<SubscriberResult> CommentNotificationEmail(CommentNotification commentNotification)
        {
            var to = new MailAddress(commentNotification.PostAuthorEmail, commentNotification.PostAuthorName);
            var text = $@"{commentNotification.CommenterName} Commented on the blog :{commentNotification.PostTitle}
Time: {commentNotification.CommentedOn}

{commentNotification.Content}";
            var html = $@"<html>
<head>
<title>Comment Notification</title>
<link rel=""stylesheet"" href=""https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"" integrity=""sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"" crossorigin=""anonymous"">
</head>
<body>
<div class=""container"">
<h1>New Message</h1>
<div class=""row"">
  <div class=""col-md-3"">
    <strong>Name:</strong>
  </div>
  <div class=""col-md-9"">
    {commentNotification.CommenterName}
  </div>
</div>
<div class=""row"">
  <div class=""col-md-3"">
    <strong>Email:</strong>
  </div>
  <div class=""col-md-9"">
    {commentNotification.CommenterEmail}
  </div>
</div>
<div class=""row"">
  <div class=""col-md-3"">
    <strong>Comment</strong>
  </div>
  <div class=""col-md-9"">
    {commentNotification.Content}
  </div>
</div>
</div>
</body>
</html>";
            var templateResult = new TemplateResult
            {
                Subject = "Comment Notification",
                PlainText = text,
                Html = html
            };
            var success = await _emailService.SendAsync(to, templateResult);
            return new SubscriberResult {
                Success = success,
                StatusCode = (int)200
            };
        }

        public async Task<string> SubscriberConfirmation(Guid confirmationCode)
        {
            var subscriber = await _context.Subscribers.FirstOrDefaultAsync(x => x.ConfirmationCode == confirmationCode);

            if(subscriber != null)
            {
                subscriber.IsActive = true;
                _context.Subscribers.Update(subscriber);
                await _context.SaveChangesAsync();
                var model = new ContactFormEmailNotification
{
                    DisplayName = subscriber.Email,
                    Email = subscriber.Email,
                    FirstName = subscriber.Email,
                    LastName = subscriber.Email,
                    Message = "<p>We're sorry to see you go. Your email has been successfully unsubscribed. You will no longer get emails from us.</p>",
                    Subject = "You have successfully unsubscribed",
                    Year = DateTime.Now.Year
                };
                var template = await _templateProvider.GetTemplate(PortalTemplate.ContactMessage, model);
                await _emailService.SendAsync(subscriber.Email, template);
            }

            return subscriber?.Email;
        }

        public async Task<bool> Unsubscribe(string email, string confirmationCode)
        {
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(confirmationCode))
                return false;

            var subscriber = await _context.Subscribers.FirstOrDefaultAsync(x => x.Email.ToLower() == email.ToLower());

            if(subscriber is not null && confirmationCode == subscriber.UnsubscribeCode())
            {
                subscriber.IsActive = false;
                subscriber.Unsubscribed = DateTimeOffset.Now;
                _context.Subscribers.Update(subscriber);
                await _context.SaveChangesAsync();

                var model = new ContactFormEmailNotification
                {
                    DisplayName = email,
                    Email = email,
                    FirstName = email,
                    LastName = email,
                    Message = "<p>We're sorry to see you go. Your email has been successfully unsubscribed. You will no longer get emails from us.</p>",
                    Subject = "You have successfully unsubscribed",
                    Year = DateTime.Now.Year
                };
                var template = await _templateProvider.GetTemplate(PortalTemplate.ContactMessage, model);
                await _emailService.SendAsync(email, template);
                return true;
            }

            return false;
        }
    }
}
