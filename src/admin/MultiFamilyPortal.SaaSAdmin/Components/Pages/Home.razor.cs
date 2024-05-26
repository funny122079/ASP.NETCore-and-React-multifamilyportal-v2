using Microsoft.AspNetCore.Components;
using Microsoft.EntityFrameworkCore;
using MultiFamilyPortal.SaaS.Data;
using MultiFamilyPortal.SaaS.Models;

namespace MultiFamilyPortal.SaaSAdmin.Components.Pages;

public partial class Home
{
    private Tenant[] _tenants = [];

    [Inject]
    private TenantContext _tenantContext { get; set; } = null!;

    protected override async Task OnInitializedAsync()
    {
        _tenants = await _tenantContext.Tenants.ToArrayAsync();
    }
}