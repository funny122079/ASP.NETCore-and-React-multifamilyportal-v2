using MultiFamilyPortal.SaaS.Models;

namespace MultiFamilyPortal.SaaS.TenantProviders
{
    internal class TenantCache
    {
        private List<CachedTenant> _tenants { get; }

        public TenantCache()
        {
            _tenants = new List<CachedTenant>();
        }

        public void Add(string host, Tenant tenant)
        {
            _tenants.Add(new CachedTenant(host, tenant));
        }

        public Tenant Get(string host)
        {
            return _tenants.FirstOrDefault(x => x.Host == host)?.Tenant;
        }

        private class CachedTenant
        {
            private DateTimeOffset _timestamp { get; }
            private Tenant _tenant { get; }

            public CachedTenant(string host, Tenant tenant)
            {
                _timestamp = DateTimeOffset.UtcNow;
                _tenant = tenant;
                Host = host;
            }

            public string Host { get; }

            public Tenant Tenant => DateTimeOffset.UtcNow < _timestamp.AddHours(3) ? _tenant : null;
        }
    }
}
