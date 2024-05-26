using Microsoft.EntityFrameworkCore;
using MultiFamilyPortal.SaaS.Data;
using MultiFamilyPortal.SaaS.Models;

namespace MultiFamilyPortal.SaaS.Services;

public class TenantManager(TenantContext context) : ITenantManager
{
    public async Task CreateTenant(Tenant tenant)
    {
        ArgumentException.ThrowIfNullOrEmpty(tenant.Host);
        ArgumentException.ThrowIfNullOrEmpty(tenant.DatabaseSchema);

        var existingTenants = await GetTenants();

        if (existingTenants.Any(x => x.Host == tenant.Host || x.DatabaseSchema == tenant.DatabaseSchema))
            throw new InvalidOperationException("The Host or Database Schema already exists for another Tenant.");

        await context.Tenants.AddAsync(tenant);
        await context.SaveChangesAsync();
    }

    public async Task<IEnumerable<Tenant>> GetTenants() =>
        await context.Tenants
            .AsNoTracking()
            .ToArrayAsync();
}
