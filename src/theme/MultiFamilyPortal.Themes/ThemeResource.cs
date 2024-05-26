namespace MultiFamilyPortal.Themes
{
    public record ThemeResource
    {
        public string Name { get; init; }
        public string Path { get; init; }
        public int Height { get; init; }
        public int Width { get; init; }
    }
}
