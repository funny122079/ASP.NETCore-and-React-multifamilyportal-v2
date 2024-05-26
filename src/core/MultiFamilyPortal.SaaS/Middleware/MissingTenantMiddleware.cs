using Microsoft.AspNetCore.Http;
using MultiFamilyPortal.SaaS.Services;

namespace MultiFamilyPortal.SaaS.Middleware;

internal class MissingTenantMiddleware
{
    private readonly RequestDelegate _next;
    private readonly string _missingTenantUrl;

    public MissingTenantMiddleware(RequestDelegate next, string missingTenantUrl)
    {
        _next = next;
        _missingTenantUrl = missingTenantUrl;
    }

    public async Task Invoke(HttpContext httpContext, ITenantProvider provider)
    {
        var tenant = await provider.GetTenant(httpContext.Request.Host.Host);
        if (tenant is null || tenant.Id == default)
        {
            httpContext.Response.Redirect(_missingTenantUrl);
            return;
        }

        await _next.Invoke(httpContext);
    }
}