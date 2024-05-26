using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using MultiFamilyPortal.SaaS.Models;

namespace MultiFamilyPortal.SaaS.Data
{
    public static class IMultiTenantDbContextExtensions
    {
        public static void ConfigureForMultiTenant(this IMultiTenantDbContext context, DbContextOptionsBuilder optionsBuilder, DatabaseSettings settings, Tenant tenant)
        {
            var connStringTemplate = settings.GetConnectionString();
            var connString = string.Format(connStringTemplate, tenant.DatabaseName);
            optionsBuilder.UseSqlServer(connString);

            optionsBuilder.ReplaceService<IModelCacheKeyFactory, DynamicModelCacheKeyFactory>();
        }
    }
}
