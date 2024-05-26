using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MultiFamilyPortal.SaaS.Data;
using MultiFamilyPortal.SaaS.TenantProviders;

namespace MultiFamilyPortal.SaaS.Extensions
{
    public static class SaaSExtensions
    {
        public static IServiceCollection AddSaaSApplication(this IServiceCollection services, IConfiguration configuration)
        {
            var settings = new DatabaseSettings();
            configuration.Bind(settings);
            return services.AddSingleton(settings)
                .AddSaaSTenantDatabase(configuration)
                .AddSingleton<TenantCache>()
                .AddScoped<ITenantAccessor, TenantAccessor>()
                .AddScoped<ITenantProvider, DatabaseTenantProvider>();
        }

        public static IServiceCollection AddSaaSTenantDatabase(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("TenantConnection");
            return services.AddDbContext<TenantContext>(options => options.UseSqlServer(connectionString));
        }

        public static IApplicationBuilder UseMissingTenant(this IApplicationBuilder app)
        {
            return app.UseMiddleware<MissingTenantMiddleware>("https://avantipoint.com");
        }
    }
}
