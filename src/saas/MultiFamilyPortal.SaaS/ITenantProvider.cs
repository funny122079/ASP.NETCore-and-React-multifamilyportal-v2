using MultiFamilyPortal.SaaS.Models;

namespace MultiFamilyPortal.SaaS
{
    public interface ITenantProvider
    {
        Tenant GetTenant();
        Tenant GetTenant(string host);
    }
}
