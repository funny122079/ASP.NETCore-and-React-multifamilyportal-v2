namespace MultiFamilyPortal.Themes
{
    public interface ISiteConfigurationValidator
    {
        IPortalTheme Theme { get; }
        bool Enabled { get; }

        void SetFirstRunTheme(IPortalTheme theme);
    }
}
