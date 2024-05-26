using System.Reflection;

namespace MultiFamilyPortal.Themes.Internals{    public interface IThemeFactory    {
        IPortalFrontendTheme GetFrontendTheme();        IPortalTheme GetCurrentTheme();
        IEnumerable<Assembly> GetAdditionalAssemblies(IPortalTheme theme);    }}