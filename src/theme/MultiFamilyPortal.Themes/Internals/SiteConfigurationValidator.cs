using MultiFamilyPortal.SaaS;

namespace MultiFamilyPortal.Themes.Internals
{
    internal class SiteConfigurationValidator : ISiteConfigurationValidator
    {
        private ITenantProvider _tenantProvider { get; }
        private TenantThemeCache _cache { get; }

        public SiteConfigurationValidator(ITenantProvider tenantProvider, TenantThemeCache cache)
        {
            _tenantProvider = tenantProvider;
            _cache = cache;
        }

        public IPortalTheme Theme
        {
            get
            {
                var tenant = _tenantProvider.GetTenant();
                if (tenant is null)
                    return null;
                else if(_cache.ContainsKey(tenant.Host))
                    return _cache[tenant.Host];

                return null;
            }
        }

        public bool Enabled
        {
            get
            {
                var tenant = _tenantProvider.GetTenant();
                if (tenant is null)
                    return false;
                return !tenant.Disabled;
            }
        }

        public void SetFirstRunTheme(IPortalTheme theme)
        {
            var tenant = _tenantProvider.GetTenant();
            if (tenant is null)
                return;

            _cache[tenant.Host] = theme;
        }
    }
}
