namespace MultiFamilyPortal.Themes
{
    public record RootMenuOption : MenuOptionBase
    {
        public string IconClass { get; init; }
        public IEnumerable<ChildMenuOption> Children { get; init; }
    }
}
