using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MultiFamilyPortal.Data;
using MultiFamilyPortal.Data.Internals;
using MultiFamilyPortal.Data.Services;

namespace MultiFamilyPortal
{
    public static class DataRegistrationExtensions
    {
        public static IServiceCollection AddMFContext(this IServiceCollection services, IConfiguration configuration)
        {
            return services.AddDbContext<MFPContext>(options => {
                    options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
                })
                .AddScoped<IStartupTask, DbContextStartupTask>()
                .AddTransient<IBlogContext>(sp => sp.GetRequiredService<MFPContext>())
                .AddTransient<IMFPContext>(sp => sp.GetRequiredService<MFPContext>())
                .AddTransient<ICRMContext>(sp => sp.GetRequiredService<MFPContext>())
                .AddTransient<ITenantSettingsContext>(sp => sp.GetRequiredService<MFPContext>())
                .AddTransient<IStartupContextHelper, StartupContextHelper>()
                .AddTransient<DatabaseContextSeeder>();
        }
    }
}
