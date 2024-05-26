using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using MultiFamilyPortal.Dtos;
using MultiFamilyPortal.Data;
using MultiFamilyPortal.Data.Models;
using MultiFamilyPortal.Data.Views;

namespace MultiFamilyPortal.Services
{
    internal class BlogAdminService : IBlogAdminService
    {
        private IBlogContext _context { get; }
        private IBlogSubscriberService _subscriberService { get; }
        private HttpContext HttpContext { get; }

        public BlogAdminService(IBlogContext context, IBlogSubscriberService subscriberService, IHttpContextAccessor contextAccessor)
        {
            _context = context;
            _subscriberService = subscriberService;
            HttpContext = contextAccessor.HttpContext; 
        }

        public async Task<IEnumerable<PostListView>> ListPosts() =>
            await _context.PostListViews
                .OrderByDescending(x => x.Published)
                .ToListAsync();

        public async Task<IEnumerable<string>> GetCategories() =>
            await _context.Categories.Select(x => x.Id).ToListAsync();

        public async Task<IEnumerable<string>> GetTags() =>
            await _context.Tags.Select(x => x.Id).ToListAsync();

        public async Task<(int statusCode, PostSaveResponse response)> SavePost(Post post)
        {
            post.LastModified = DateTimeOffset.Now;

            var categories = await _context.Categories.ToListAsync();
            foreach (var category in post.Categories)
            {
                if (!categories.Any(x => x.Id == category.Id))
                {
                    _context.Categories.Add(category);
                }
            }

            var tags = await _context.Tags.ToListAsync();
            foreach (var tag in post.Tags)
            {
                if (!tags.Any(x => x.Id == tag.Id))
                {
                    _context.Tags.Add(tag);
                }
            }

            var successMessage = "The post has been updated.";
            var statusCode = 200;
            if (post.Id == default)
            {
                statusCode = 201;
                if (post.Published < DateTimeOffset.Now)
                {
                    post.Published = DateTimeOffset.Now;
                }
                successMessage = "The post has been created.";
                _context.Posts.Add(post);
                await _context.SaveChangesAsync();
                var response = new PostSaveResponse {
                    Id = post.Id,
                    Message = successMessage
                };

                return (statusCode, response);
            }

            _context.Posts.Update(post);
            await _context.SaveChangesAsync();

            return (statusCode, new PostSaveResponse {
                Id = post.Id,
                Message = successMessage
            });
        }

        public async Task<PostPublishResponse> Publish(Guid id)
        {
            var post = await _context.Posts.FirstOrDefaultAsync(x => x.Id == id);

            if (post == null)
                return new PostPublishResponse { Success = false, Message = "Post not found" };

            post.IsPublished = !post.IsPublished;
            if (post.Published < DateTimeOffset.Now)
                post.Published = DateTimeOffset.Now;

            _context.Posts.Update(post);
            await _context.SaveChangesAsync();

            var response = new PostPublishResponse {
                Success = false,
                Message = "No Subscribers exist to be notified"
            };

            
            if (await _context.Posts.Where(x => x.Id == post.Id).SumAsync(x => x.Subscribers.Count) < 1)
            {
                var frontEnd = new Uri($"{HttpContext.Request.Scheme}://{HttpContext.Request.Host}");
                response.Success = await _subscriberService.PostPublished(post, frontEnd);
                if (response.Success)
                {
                    response.Message = "All Subscribers have been notified successfully";
                }
                else
                {
                    response.Message = "One or more errors occurred while notifying the current subscribers. Check the logs for more information.";
                }
            }

            return response;
        }

        public async Task<int> Delete(Guid id)
        {
            var post = await _context.Posts.FirstOrDefaultAsync(x => x.Id == id);
            if (post is null)
                return 404;

            _context.Posts.Remove(post);
            await _context.SaveChangesAsync();
            return 200;
        }
    }
}
