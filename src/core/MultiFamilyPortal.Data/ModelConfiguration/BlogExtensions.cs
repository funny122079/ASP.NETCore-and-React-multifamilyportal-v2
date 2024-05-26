using Microsoft.EntityFrameworkCore;
using MultiFamilyPortal.Data.Models;

namespace MultiFamilyPortal.Data.ModelConfiguration
{
    internal static class BlogExtensions
    {
        public static void ConfigureBlogModels(this ModelBuilder modelBuilder)
        {
            modelBuilder.HasField<Comment, DateTimeOffset>(x => x.Timestamp);
            modelBuilder.HasField<PostView, DateTimeOffset>(x => x.Timestamp);
            modelBuilder.HasField<Subscriber, DateTimeOffset>(x => x.Timestamp);
            modelBuilder.HasField<Subscriber, Guid>(x => x.ConfirmationCode);
        }
    }
}
