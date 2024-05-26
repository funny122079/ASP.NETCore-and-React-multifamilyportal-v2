namespace MultiFamilyPortal
{
    public record FileTypeInfo
    {
        public string Extension { get; init; } = default!;

        public string Name { get; init; } = default!;

        public string MimeType { get; init; } = default!;

        public string Icon { get; init; } = default!;

        public string Color { get; init; } = default!;
    }
}
