using MultiFamilyPortal.SaaS.Models;

namespace MultiFamilyPortal.SaaS.TenantProviders
{
    internal class TenantAccessor : ITenantAccessor
    {
        public Tenant Current { get; set; }
    }
}
