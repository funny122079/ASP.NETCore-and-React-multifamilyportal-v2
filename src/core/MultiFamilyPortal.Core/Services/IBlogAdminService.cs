using MultiFamilyPortal.Dtos;
using MultiFamilyPortal.Data.Models;
using MultiFamilyPortal.Data.Views;

namespace MultiFamilyPortal.Services
{
    public interface IBlogAdminService
    {
        Task<int> Delete(Guid id);
        Task<IEnumerable<string>> GetCategories();
        Task<IEnumerable<string>> GetTags();
        Task<IEnumerable<PostListView>> ListPosts();
        Task<PostPublishResponse> Publish(Guid id);
        Task<(int statusCode, PostSaveResponse response)> SavePost(Post post);
    }
}
