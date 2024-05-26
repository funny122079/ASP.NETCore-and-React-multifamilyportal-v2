using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MultiFamilyPortal.SaaS.Data;
using MultiFamilyPortal.SaaS.Middleware;
using MultiFamilyPortal.SaaS.Services;

namespace MultiFamilyPortal.SaaS;

public static class MultiTenantExtensions
{
    public static IServiceCollection AddSaaSApplication(this IServiceCollection services, string? connectionString, string? azureConnectionString)
    {
        //ArgumentException.ThrowIfNullOrEmpty(connectionString);

        if (string.IsNullOrEmpty(azureConnectionString))
        {
            services.AddLocalFileStorage((sp, o) =>
            {
                var tenantAccessor = sp.GetRequiredService<ITenantAccessor>();
                var tenant = tenantAccessor.Current;
                o.GetOutputPath = path => GetTenantOutputPath(tenant?.Host, path);
            });
        }
        else
        {
            services.AddAzureBlobStorage((sp, o) =>
            {
                if (string.IsNullOrEmpty(o.Container))
                    o.Container = "tenants";

                var tenantAccessor = sp.GetRequiredService<ITenantAccessor>();
                var tenant = tenantAccessor.Current;
                o.GetOutputPath = path => GetTenantOutputPath(tenant?.Host, path);
            });
        }

        return services
            .AddDbContext<TenantContext>()
            .AddHttpContextAccessor()
            .AddScoped<ITenantAccessor, TenantAccessor>()
            .AddScoped<ITenantProvider, TenantProvider>();
    }

    private static string GetTenantOutputPath(string? host, string path)
    {
        host ??= "unknown";
        return Path.Combine(host, path);
    }

    public static WebApplication UseMissingTenant(this WebApplication app)
    {
        app.UseMiddleware<MissingTenantMiddleware>("https://avantipoint.com");
        return app;
    }
}
