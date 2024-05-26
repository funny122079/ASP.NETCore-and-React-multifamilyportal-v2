using Microsoft.AspNetCore.Http;

namespace MultiFamilyPortal.SaaS
{
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
            if (provider.GetTenant(httpContext.Request.Host.Host) == null)
            {
                httpContext.Response.Redirect(_missingTenantUrl);
                return;
            }

            await _next.Invoke(httpContext);
        }
    }
}
