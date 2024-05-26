using MultiFamilyPortal.SaaS.Models;

namespace MultiFamilyPortal.SaaS.Services;

public interface ITenantProvider
{
    Task<IEnumerable<Tenant>> GetTenants();
    Task<Tenant?> GetTenant();
    Task<Tenant?> GetTenant(string tenant);
}
