using System.Reflection;
using Microsoft.AspNetCore.Components;
using MultiFamilyPortal.SaaS;
using MultiFamilyPortal.SaaS.Models;
using MultiFamilyPortal.Themes.Internals;

namespace MultiFamilyPortal.Themes
{
    public partial class ThemeApp
    {
        private Assembly Assembly = Assembly.GetEntryAssembly() ?? throw new Exception("The Entry Assembly is null");

        [Inject]
        private IThemeFactory _themeFactory { get; set; } = default!;

        [Inject]
        private ITenantProvider _tenantProvider { get; set; } = default!;

        [Inject]
        private NavigationManager _navigationManager { get; set; } = default!;

        private IPortalTheme Theme => _themeFactory.GetCurrentTheme();
        private Tenant _tenant;

        protected override void OnInitialized()
        {
            var uri = new Uri(_navigationManager.BaseUri);
            _tenant = _tenantProvider.GetTenant(uri.Host);
        }
    }
}
