namespace MultiFamilyPortal.Data.Views
{
    public class PostListView
    {
        public Guid Id { get; set; }
        public string Slug { get; set; }
        public string Title { get; set; }
        public DateTimeOffset Published { get; set; }
        public bool IsPublished { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public int Views { get; set; }
    }
}
