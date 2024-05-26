namespace MultiFamilyPortal.Data.Views
{
    public class PostDetailView
    {
        public Guid Id { get; set; }
        public string Slug { get; set; } = default!;
        public string Title { get; set; } = default!;
        public string Description { get; set; } = default!;
        public string Body { get; set; } = default!;
        public string AuthorName { get; set; } = default!;
        public string AuthorEmail { get; set; } = default!;
        public DateTimeOffset Published { get; set; }
        public bool IsPublished { get; set; }
        public IEnumerable<string> Tags { get; set; } = default!;
        public IEnumerable<string> Categories { get; set; } = default!;
        public IEnumerable<string> Scripts { get; set; } = default!;
    }
}
