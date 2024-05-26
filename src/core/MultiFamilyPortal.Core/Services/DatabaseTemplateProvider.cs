using System.Reflection;
using AvantiPoint.EmailService;
using HandlebarsDotNet;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using MultiFamilyPortal.ComponentModel;
using MultiFamilyPortal.Data;
using MultiFamilyPortal.Data.Models;
using MultiFamilyPortal.Dtos;

namespace MultiFamilyPortal.Services
{
    internal class DatabaseTemplateProvider : ITemplateProvider
    {
        private const string HtmlTemplateHead = @"<!DOCTYPE html>
<html>
<head>
  <meta charset=""UTF-8"" />
  <meta http-equiv=""X-UA-Compatible"" content=""IE=edge"" />
  <title>{{SiteTitle}} - {{Subject}}</title>
  <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"" />

  <link rel=""shortcut icon"" href=""{{SiteUrl}}/favicon.ico"" type=""image/x-icon"" />
  <link rel=""icon"" type=""image/png"" sizes=""32x32"" href=""{{SiteUrl}}/favicon-32x32.png"" />
  <link rel=""icon"" type=""image/png"" sizes=""16x16"" href=""{{SiteUrl}}/favicon-16x16.png"" />
  <link rel=""manifest"" href=""{{SiteUrl}}/manifest.json"" />

  <!-- stylesheets -->
  <link rel=""stylesheet"" type=""text/css"" href=""https://ap-corp-site.azurewebsites.net/css/bootstrap.css"" />
  <link rel=""stylesheet"" type=""text/css"" href=""https://ap-corp-site.azurewebsites.net/css/theme.min.css"" />

  <!-- javascript -->
  <script src=""https://ap-corp-site.azurewebsites.net/js/theme.min.js""></script>

  <!--[if lt IE 9]>
    <script src=""http://html5shim.googlecode.com/svn/trunk/html5.js""></script>
  <![endif]-->
</head>
<body>
";
        private IMFPContext _context { get; }
        private ISiteInfo _siteInfo { get; }
        private IHttpContextAccessor _contextAccessor { get; }

        public DatabaseTemplateProvider(IMFPContext context, ISiteInfo siteInfo, IHttpContextAccessor contextAccessor)
        {
            _context = context;
            _contextAccessor = contextAccessor;
            _siteInfo = siteInfo;
        }

        public async Task<TemplateResult> GetTemplate<T>(string templateName, T model)
            where T : HtmlTemplateBase
        {
            var type = typeof(T);
            if(_contextAccessor.HttpContext != null)
            {
                var request = _contextAccessor.HttpContext.Request;
                model.SiteUrl = $"{request.Scheme}://{request.Host}";
            }

            model.SiteTitle = _siteInfo.Title;

            var partials = type.GetCustomAttributes<PartialTemplateAttribute>();
            var properties = type.GetRuntimeProperties();
            var emailTemplate = await GetTemplate(templateName);

            return await TemplateResult.FromModelAsync(model, model.Subject, async o =>
            {
                if (partials.Any())
                {
                    foreach (var partial in partials)
                    {
                        var partialTemplate = await GetPartialTemplate(partial.Name);
                        o.Partials.Add((partial.Name, partialTemplate));
                    }
                }

                foreach (var rawProperty in properties.Where(x => x.GetCustomAttributes<RawOutputAttribute>().Any()))
                {
                    o.Raw.Add(rawProperty.Name);
                }

                o.HtmlTemplate = $"{HtmlTemplateHead}{emailTemplate.Html}\n</body>\n</html>";

                foreach (var plainTextProperty in properties.Where(x => x.GetCustomAttributes<PlainTextAttribute>().Any()))
                {
                    var value = plainTextProperty.GetValue(model).ToString();
                    //plainTextProperty.SetValue(model, htt.ConvertHtml(value));
                }
            });
        }

        public async Task<TemplateResult> GetSubscriberNotification(SubscriberNotification notification)
        {
            var emailTemplate = await GetTemplate("subscribernotification");
            return await TemplateResult.FromModelAsync(notification, notification.Subject, async o =>
            {
                o.HtmlTemplate = emailTemplate.Html;
                o.TextTemplate = emailTemplate.PlainText;
                o.Raw.Add(nameof(SubscriberNotification.Summary));
                o.Partials.Add(("tag", await GetPartialTemplate("tag")));
                o.Partials.Add(("category", await GetPartialTemplate("category")));
            });

            // TODO: Replace HTML Summary with Plain Text
            //notification.Summary = htt.ConvertHtml(notification.Summary);
        }

        public async Task<TemplateResult> ContactUs(ContactFormEmailNotification notification)
        {
            var emailTemplate = await GetTemplate("contact-form");
            return TemplateResult.FromModel(notification, notification.Subject, o =>
            {
                o.HtmlTemplate = emailTemplate.Html;
                o.TextTemplate = emailTemplate.PlainText;
                o.Raw.Add(nameof(ContactFormEmailNotification.Message));
            });
        }

        private async Task<string> GetPartialTemplate(string key)
        {
            var template = await _context.EmailPartialTemplates.FirstOrDefaultAsync(x => x.Key == key);
            return template?.Content;
        }

        private async Task<EmailTemplate> GetTemplate(string key)
        {
            var template = await _context.EmailTemplates.FirstOrDefaultAsync(x => x.Key == key);
            return template;
        }
    }
}
