using MultiFamilyPortal.SaaS.Models;

namespace MultiFamilyPortal.SaaS.TenantProviders
{
    public class StartupTenantProvider : ITenantProvider
    {
        private Tenant _tenant { get; }

        public StartupTenantProvider(Tenant tenant)
        {
            _tenant = tenant;
        }

        public Tenant GetTenant() => _tenant;
        public Tenant GetTenant(string host) => _tenant;
    }
}
