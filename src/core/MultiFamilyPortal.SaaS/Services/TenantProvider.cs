using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using MultiFamilyPortal.SaaS.Data;
using MultiFamilyPortal.SaaS.Models;

namespace MultiFamilyPortal.SaaS.Services;

public class TenantProvider(IHttpContextAccessor contextAccessor, TenantContext context, ITenantAccessor tenantAccessor) : ITenantProvider
{
    public async Task<IEnumerable<Tenant>> GetTenants() =>
        await context.Tenants.AsNoTracking().ToArrayAsync();

    public Task<Tenant?> GetTenant() =>
        GetTenant(contextAccessor.HttpContext?.Request?.Host.Value ?? string.Empty);

    public async Task<Tenant?> GetTenant(string host)
    {
        if (string.IsNullOrEmpty(host))
            return null;

        var tenant = await context.Tenants
            .AsNoTracking()
            .SingleOrDefaultAsync(x => x.Host == host);

        return tenantAccessor.Current = tenant;
    }
}