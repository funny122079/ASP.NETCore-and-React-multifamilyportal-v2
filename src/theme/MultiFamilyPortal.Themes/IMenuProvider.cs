namespace MultiFamilyPortal.Themes
{
    public interface IMenuProvider
    {
        IEnumerable<RootMenuOption> Menu { get; }
    }
}
