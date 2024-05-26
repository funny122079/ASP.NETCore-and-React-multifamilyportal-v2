using MultiFamilyPortal.SaaS.Models;

namespace MultiFamilyPortal.SaaS.Services;

public interface ITenantManager
{
    Task<IEnumerable<Tenant>> GetTenants();
    Task CreateTenant(Tenant tenant);
}
