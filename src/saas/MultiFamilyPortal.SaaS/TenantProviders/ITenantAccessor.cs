using MultiFamilyPortal.SaaS.Models;

namespace MultiFamilyPortal.SaaS.TenantProviders
{
    public interface ITenantAccessor
    {
        Tenant Current { get; set; }
    }
}
