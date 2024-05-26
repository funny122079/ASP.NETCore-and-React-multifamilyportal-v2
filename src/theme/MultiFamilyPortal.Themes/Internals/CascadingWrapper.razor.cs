using Microsoft.AspNetCore.Components;
using MultiFamilyPortal.SaaS.Models;

namespace MultiFamilyPortal.Themes.Internals
{
    public partial class CascadingWrapper
    {
        [Parameter]
        public RenderFragment ChildContent { get; set; } = default!;

        [Parameter]
        public IPortalTheme Theme { get; set; } = default!;

        [Parameter]
        public Tenant Tenant { get; set; } = default!;

        [Inject]
        private ISiteInfo SiteInfo { get; set; } = default!;
    }
}
