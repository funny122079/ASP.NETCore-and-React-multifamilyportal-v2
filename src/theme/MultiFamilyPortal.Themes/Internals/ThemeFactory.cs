using System.Reflection;
using System.Security.Claims;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using MultiFamilyPortal.Data;
namespace MultiFamilyPortal.Themes.Internals
{
    internal class ThemeFactory : IThemeFactory
    {
        private IEnumerable<IPortalTheme> _themes { get; }
        private IMFPContext _dbContext { get; }
        private NavigationManager _navigationManager { get; }
        private IHttpContextAccessor _contextAccessor { get; }
        private ISiteConfigurationValidator _configurationValidator { get; }
        private ILogger _logger { get; }
        private IEnumerable<IApplicationPart> _applicationParts { get; }

        public ThemeFactory(IEnumerable<IPortalTheme> themes,
            IEnumerable<IApplicationPart> applicationParts,
            IMFPContext dbContext,
            NavigationManager navigationManager,
            IHttpContextAccessor contextAccessor,
            ILogger<ThemeFactory> logger,
            ISiteConfigurationValidator configurationValidator)
        {
            _themes = themes;
            _applicationParts = applicationParts;
            _dbContext = dbContext;
            _contextAccessor = contextAccessor;
            _logger = logger;
            _navigationManager = navigationManager;
            _configurationValidator = configurationValidator;
        }

        public IPortalFrontendTheme GetFrontendTheme()
        {
            var defaultTheme = _dbContext.SiteThemes.FirstOrDefault(x => x.IsDefault == true);
            return _themes.OfType<IPortalFrontendTheme>().FirstOrDefault(x => x.Name == defaultTheme.Id);
        }

        private IPortalAdminTheme GetAdminTheme()
        {
            return _themes.OfType<IPortalAdminTheme>().FirstOrDefault();
        }

        private IPortalInvestorTheme GetInvestorTheme()
        {
            return _themes.OfType<IPortalInvestorTheme>().FirstOrDefault();
        }

        public IEnumerable<Assembly> GetAdditionalAssemblies(IPortalTheme theme)
        {
            var assemblies = new List<Assembly>();
            if (theme?.Layout is null)
                return Array.Empty<Assembly>();

            var list = new List<Assembly>();
            LoadThemeAssemblies(ref list, theme);

            var admin = GetAdminTheme();
            if (theme != admin && LoadAdmin())
            {
                LoadThemeAssemblies(ref list, admin);
            }

            var investor = GetInvestorTheme();
            if (theme != investor && LoadInvestor())
            {
                LoadThemeAssemblies(ref list, investor);
            }

            if (_applicationParts?.Any() ?? false)
            {
                var additional = _applicationParts.SelectMany(x => x.Assemblies);
                if (additional is not null && additional.Any())
                {
                    list.AddRange(additional);
                }
            }

            return list.Distinct();
        }

        private static void LoadThemeAssemblies(ref List<Assembly> list, IPortalTheme theme)
        {
            list.Add(theme.Layout.Assembly);
            if (theme is IApplicationPart part)
            {
                list.AddRange(part.Assemblies);
            }
        }

        public IPortalTheme GetCurrentTheme()
        {
            if (!_configurationValidator.Enabled)
                return _themes.FirstOrDefault(x => x.Name.Contains("Suspended"));
            else if (_configurationValidator.Theme is not null)
                return _configurationValidator.Theme;

            var uri = GetCurrentUri();
            if (uri.AbsolutePath.StartsWith("/admin") && LoadAdmin())
            {
                return GetAdminTheme();
            }
            else if (uri.AbsolutePath.StartsWith("/investor-theme") && LoadInvestor())
            {
                return GetInvestorTheme();
            }

            return GetFrontendTheme();
        }

        private bool LoadAdmin()
        {
            var user = _contextAccessor.HttpContext?.User;
            if (user is null)
                return false;

            return user.IsInAnyRole(PortalRoles.PortalAdministrator, PortalRoles.Underwriter, PortalRoles.BlogAuthor, PortalRoles.Mentor);
        }

        private bool LoadInvestor()
        {
            var user = _contextAccessor.HttpContext?.User;
            if (user is null)
                return false;

            return user.IsInAnyRole(PortalRoles.Investor, PortalRoles.Sponsor);
        }

        private Uri GetCurrentUri()
        {
            try
            {
                return new Uri(_navigationManager.Uri);
            }
            catch
            {
                if (_contextAccessor.HttpContext is null)
                    return new Uri("https://localhost");

                var context = _contextAccessor.HttpContext;
                var baseUri = new Uri($"{context.Request.Scheme}://{context.Request.Host}");
                return new Uri(baseUri, context.Request.Path);
            }
        }

        private IPortalTheme GetPortalTheme(ClaimsPrincipal user, Uri uri)
        {
            if (_configurationValidator.Theme is not null)
                return _configurationValidator.Theme;
            else if (!user.Identity.IsAuthenticated)
                return GetFrontendTheme();

            if (uri.AbsolutePath.StartsWith("/admin") &&
                user.IsInAnyRole(PortalRoles.Mentor, PortalRoles.Underwriter, PortalRoles.BlogAuthor, PortalRoles.PortalAdministrator))
            {
                return GetAdminTheme();
            }
            else if (uri.AbsolutePath.StartsWith("/investor-theme") &&
                user.IsInAnyRole(PortalRoles.Investor, PortalRoles.Sponsor))
            {
                return GetInvestorTheme();
            }
            else if(uri.AbsolutePath.StartsWith("/investor-theme") || uri.AbsolutePath.StartsWith("/admin"))
            {
                _logger.LogError($"Unable to validate user for path: {uri}");
                var roles = user.Claims.Where(x => x.Type == ClaimTypes.Role).Select(x => x.Value);
                if(roles.Any())
                {
                    _logger.LogError($"User Roles: {string.Join(", ", roles)}");
                }
                else
                {
                    _logger.LogError($"User authentication is authenticated: {user.Identity.IsAuthenticated}");
                }
            }

            return GetFrontendTheme();
        }
    }
}
