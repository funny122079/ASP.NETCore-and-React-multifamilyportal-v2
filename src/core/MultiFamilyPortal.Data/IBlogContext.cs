using Microsoft.EntityFrameworkCore;
using MultiFamilyPortal.Data.Internals;
using MultiFamilyPortal.Data.Models;
using MultiFamilyPortal.Data.Views;

namespace MultiFamilyPortal.Data
{
    public interface IBlogContext : IBaseContext
    {
        DbSet<Category> Categories { get; }
        DbSet<Comment> Comments { get; }
        DbSet<Post> Posts { get; }
        DbSet<PostView> PostViews { get; }
        DbSet<Subscriber> Subscribers { get; }
        DbSet<Tag> Tags { get; }

        IQueryable<PostListView> PostListViews =>
            Posts.Select(x => new PostListView {
                Id = x.Id,
                Slug = x.Slug,
                Title = x.Title,
                Name = x.Author == null ? string.Empty : $"{x.Author.FirstName} {x.Author.LastName}",
                Email = x.Author == null ? string.Empty : x.Author.Email,
                IsPublished = x.IsPublished,
                Published = x.Published,
                Views = x.Views == null ? 0 : x.Views.Count()
            });

        IQueryable<PostSummaryView> PostSummaryViews =>
            Posts.Select(x => new PostSummaryView {
                Id = x.Id,
                Slug = x.Slug ?? string.Empty,
                Title = x.Title ?? string.Empty,
                Summary = x.Summary ?? string.Empty,
                SocialImage = x.SocialImage ?? string.Empty,
                Name = x.Author == null ? string.Empty : $"{x.Author.FirstName} {x.Author.LastName}",
                Email = x.Author == null ? string.Empty : x.Author.Email,
                IsPublished = x.IsPublished,
                Published = x.Published,
                Tags = x.Tags == null ? Array.Empty<string>() : x.Tags.Select(x => x.Id),
                Categories = x.Categories == null ? Array.Empty<string>() : x.Categories.Select(x => x.Id),
            });

        IQueryable<UserListView> UserListViews =>
            Users.Select(x => new UserListView
            {
                Id = x.Id,
                Name = $"{x.FirstName} {x.LastName}".Trim(),
                Email = x.Email,
                Posts = x.Posts == null ? 0 : x.Posts.Count(),
                PostViews = x.Posts == null ? 0 : x.Posts.Sum(p => p.Views == null ? 0 : p.Views.Count())
            });
    }
}
