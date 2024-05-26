using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MultiFamilyPortal.Data.Models;

namespace MultiFamilyPortal.Data.ModelConfiguration
{
    internal static class IdentityExtensions
    {
        public static void ConfigureIdentityModels(this ModelBuilder modelBuilder, StoreOptions storeOptions)
        {
            BaseIdentityConfiguration(modelBuilder, storeOptions);
            modelBuilder.Entity<SiteUser>()
                .ToTable("Users");
            modelBuilder.Entity<IdentityRole>()
                .ToTable("IdentityRoles");
            modelBuilder.Entity<IdentityUserClaim<string>>()
                .ToTable("UserClaims");
            modelBuilder.Entity<IdentityUserToken<string>>()
                .ToTable("UserTokens");
            modelBuilder.Entity<IdentityUserLogin<string>>()
                .ToTable("UserLogins");
            modelBuilder.Entity<IdentityRoleClaim<string>>()
                .ToTable("IdentityRoleClaims");
            modelBuilder.Entity<IdentityUserRole<string>>()
                .ToTable("UserRoles");

            //modelBuilder.Entity<SiteUser>()
            //    .HasMany(x => x.Roles)
            //    .WithOne().HasForeignKey(x => x.UserId).IsRequired();

            //modelBuilder.Entity<IdentityRole>()
            //    .HasMany<SiteUserRole>()
            //    .WithOne().HasForeignKey(x => x.RoleId).IsRequired();
        }

        private static void BaseIdentityConfiguration(ModelBuilder builder, StoreOptions storeOptions)
        {
            var maxKeyLength = storeOptions?.MaxLengthForKeys ?? 0;
            var encryptPersonalData = storeOptions?.ProtectPersonalData ?? false;
            //PersonalDataConverter converter = null;

            builder.Entity<SiteUser>(b =>
            {
                b.HasKey(u => u.Id);
                b.HasIndex(u => u.NormalizedUserName).HasDatabaseName("UserNameIndex").IsUnique();
                b.HasIndex(u => u.NormalizedEmail).HasDatabaseName("EmailIndex");

                b.ToTable("Users");

                b.Property(u => u.ConcurrencyStamp).IsConcurrencyToken();

                b.Property(u => u.UserName).HasMaxLength(256);
                b.Property(u => u.NormalizedUserName).HasMaxLength(256);
                b.Property(u => u.Email).HasMaxLength(256);
                b.Property(u => u.NormalizedEmail).HasMaxLength(256);
                //if (encryptPersonalData)
                //{
                //    converter = new PersonalDataConverter(personalDataProtector);
                //    var personalDataProps = typeof(SiteUser).GetProperties().Where(
                //                    prop => Attribute.IsDefined(prop, typeof(ProtectedPersonalDataAttribute)));
                //    foreach (var p in personalDataProps)
                //    {
                //        if (p.PropertyType != typeof(string))
                //        {
                //            throw new InvalidOperationException("[ProtectedPersonalData] only works strings by default.");
                //        }
                //        b.Property(typeof(string), p.Name).HasConversion(converter);
                //    }
                //}

                b.HasMany<IdentityUserClaim<string>>().WithOne().HasForeignKey(uc => uc.UserId).IsRequired();
                b.HasMany<IdentityUserLogin<string>>().WithOne().HasForeignKey(ul => ul.UserId).IsRequired();
                b.HasMany<IdentityUserToken<string>>().WithOne().HasForeignKey(ut => ut.UserId).IsRequired();

                b.HasMany<IdentityUserRole<string>>().WithOne().HasForeignKey(ur => ur.UserId).IsRequired();
            });

            builder.Entity<IdentityUserClaim<string>>(b =>
            {
                b.HasKey(uc => uc.Id);
                b.ToTable("UserClaims");
            });

            builder.Entity<IdentityUserLogin<string>>(b =>
            {
                b.HasKey(l => new { l.LoginProvider, l.ProviderKey });

                if (maxKeyLength > 0)
                {
                    b.Property(l => l.LoginProvider).HasMaxLength(maxKeyLength);
                    b.Property(l => l.ProviderKey).HasMaxLength(maxKeyLength);
                }

                b.ToTable("UserLogins");
            });

            builder.Entity<IdentityUserToken<string>>(b =>
            {
                b.HasKey(t => new { t.UserId, t.LoginProvider, t.Name });

                if (maxKeyLength > 0)
                {
                    b.Property(t => t.LoginProvider).HasMaxLength(maxKeyLength);
                    b.Property(t => t.Name).HasMaxLength(maxKeyLength);
                }

                //if (encryptPersonalData)
                //{
                //    var tokenProps = typeof(IdentityUserToken<string>).GetProperties().Where(
                //                    prop => Attribute.IsDefined(prop, typeof(ProtectedPersonalDataAttribute)));
                //    foreach (var p in tokenProps)
                //    {
                //        if (p.PropertyType != typeof(string))
                //        {
                //            throw new InvalidOperationException("[ProtectedPersonalData] only works strings by default.");
                //        }
                //        b.Property(typeof(string), p.Name).HasConversion(converter);
                //    }
                //}

                b.ToTable("UserTokens");
            });










            builder.Entity<IdentityRole>(b =>
            {
                b.HasKey(r => r.Id);
                b.HasIndex(r => r.NormalizedName).HasDatabaseName("RoleNameIndex").IsUnique();
                b.ToTable("IdentityRoles");
                b.Property(r => r.ConcurrencyStamp).IsConcurrencyToken();

                b.Property(u => u.Name).HasMaxLength(256);
                b.Property(u => u.NormalizedName).HasMaxLength(256);

                b.HasMany<IdentityUserRole<string>>().WithOne().HasForeignKey(ur => ur.RoleId).IsRequired();
                b.HasMany<IdentityRoleClaim<string>>().WithOne().HasForeignKey(rc => rc.RoleId).IsRequired();
            });

            builder.Entity<IdentityRoleClaim<string>>(b =>
            {
                b.HasKey(rc => rc.Id);
                b.ToTable("RoleClaims");
            });

            builder.Entity<IdentityUserRole<string>>(b =>
            {
                b.HasKey(r => new { r.UserId, r.RoleId });
                b.ToTable("UserRoles");
            });
        }

        private class PersonalDataConverter : ValueConverter<string, string>
        {
            public PersonalDataConverter(IPersonalDataProtector protector) : base(s => protector.Protect(s), s => protector.Unprotect(s), default)
            { }
        }
    }
}
