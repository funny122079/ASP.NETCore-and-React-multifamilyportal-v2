namespace MultiFamilyPortal.Themes
{
    public interface IPortalTheme
    {
        Type Layout { get; }

        string Name { get; }

        Type _404 { get; }

        string[] RequiredStyles { get; }
    }
}
