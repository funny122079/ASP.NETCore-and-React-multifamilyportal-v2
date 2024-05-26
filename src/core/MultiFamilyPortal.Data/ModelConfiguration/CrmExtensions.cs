using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MultiFamilyPortal.Data.Models;

namespace MultiFamilyPortal.Data.ModelConfiguration
{
    internal static class CrmExtensions
    {
        public static void ConfigureCrmModels(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CRMContactAddress>(builder =>
            {
                builder.Property(x => x.Type)
                    .HasConversion(new EnumToStringConverter<CRMContactAddressType>());
            });

            modelBuilder.Entity<CRMContactEmail>(builder =>
            {
                builder.Property(x => x.Type)
                    .HasConversion(new EnumToStringConverter<CRMContactEmailType>());
            });

            modelBuilder.Entity<CRMContactPhone>(builder =>
            {
                builder.Property(x => x.Type)
                    .HasConversion(new EnumToStringConverter<CRMContactPhoneType>());
            });

            modelBuilder.Entity<CRMNotableDate>(builder =>
            {
                builder.Property(x => x.Type)
                    .HasConversion(new EnumToStringConverter<CRMNotableDateType>());
            });

            modelBuilder.HasField<CRMContactLog, DateTimeOffset>(x => x.Timestamp);

            modelBuilder.Entity<CRMContactMarket>(builder =>
            {
                builder.HasIndex(x => x.Name)
                       .IsUnique();
            });

            modelBuilder.Entity<CRMContactRole>(builder =>
            {
                builder.HasIndex(x => x.Name)
                       .IsUnique();
            });
        }
    }
}
