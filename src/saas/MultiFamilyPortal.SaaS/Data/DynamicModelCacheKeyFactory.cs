using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace MultiFamilyPortal.SaaS.Data
{
    internal class DynamicModelCacheKeyFactory : IModelCacheKeyFactory
    {
        public object Create(DbContext context, bool designTime)
        {
            if (context is not IMultiTenantDbContext castedContext)
            {
                throw new Exception("Unknown DBContext type");
            }

            return new { castedContext.TenantId };
        }
    }
}
