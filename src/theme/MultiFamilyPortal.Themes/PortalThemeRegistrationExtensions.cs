using Microsoft.Extensions.DependencyInjection;
using MultiFamilyPortal.Themes.Internals;

namespace MultiFamilyPortal.Themes
{
    public static class PortalThemeRegistrationExtensions
    {        private static bool _registered;

        public static IServiceCollection RegisterTheme(this IServiceCollection services, Type type)
        {
            if (!typeof(IPortalTheme).IsAssignableFrom(type))
                throw new InvalidOperationException($"Cannot assign {type.FullName} as an IPortalTheme");

            if (!_registered)            {                services.AddScoped<IThemeFactory, ThemeFactory>()
                    .AddScoped<IStartupTask, ThemeStartupTask>()
                    .AddSingleton<TenantThemeCache>()
                    .AddScoped<ISiteConfigurationValidator, SiteConfigurationValidator>();                _registered = true;            }

            // Avoid Registering twice
            if (services.Any(x => x.ServiceType == typeof(IPortalTheme) && x.ImplementationType == type))
                return services;

            if (typeof(IPortalFrontendTheme).IsAssignableFrom(type))
            {
                services.AddSingleton(typeof(IPortalFrontendTheme), type);
            }
            return services.AddSingleton(typeof(IPortalTheme), type);
        }        
        public static IServiceCollection RegisterTheme<TTheme>(this IServiceCollection services)
            where TTheme : class, IPortalTheme
        {            return services.RegisterTheme(typeof(TTheme));
        }
    }
}