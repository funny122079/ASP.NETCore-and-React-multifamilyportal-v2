namespace MultiFamilyPortal.Data.Views
{
    public class PostSummaryView
    {
        public Guid Id { get; set; }
        public string Slug { get; set; } = default!;
        public string Title { get; set; } = default!;
        public string Summary { get; set; } = default!;
        public string SocialImage { get; set; } = default!;
        public DateTimeOffset Published { get; set; }
        public bool IsPublished { get; set; }
        public string Name { get; set; } = default!;
        public string Email { get; set; } = default!;
        public IEnumerable<string> Tags { get; set; } = default!;
        public IEnumerable<string> Categories { get; set; } = default!;
    }
}
