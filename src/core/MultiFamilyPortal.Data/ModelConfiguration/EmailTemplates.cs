using Microsoft.EntityFrameworkCore;
using MultiFamilyPortal.Data.Models;

namespace MultiFamilyPortal.Data.ModelConfiguration
{
    internal static class EmailTemplateExtensions
    {
        public static void ConfigureEmailTemplates(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EmailTemplate>()
                .HasKey(x => x.Key);

            modelBuilder.Entity<EmailPartialTemplate>()
                .HasKey(x => x.Key);
        }
    }
}
