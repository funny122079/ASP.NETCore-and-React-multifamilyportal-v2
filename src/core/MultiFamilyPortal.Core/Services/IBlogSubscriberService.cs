using MultiFamilyPortal.Dtos;
using MultiFamilyPortal.Data.Models;

namespace MultiFamilyPortal.Services
{
    public interface IBlogSubscriberService
    {
        Task<string> SubscriberConfirmation(Guid confirmationCode);
        Task<bool> Unsubscribe(string email, string confirmationCode);
        Task<SubscriberResult> PostPublished(Post post, Uri baseUri);
        Task<SubscriberResult> CommentNotificationEmail(CommentNotification commentNotification);
    }
}
