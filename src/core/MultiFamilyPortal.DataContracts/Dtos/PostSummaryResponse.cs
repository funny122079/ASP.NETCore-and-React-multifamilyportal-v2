using MultiFamilyPortal.Data.Views;

namespace MultiFamilyPortal.Dtos
{
    public class PostSummaryResponse
    {
        public int TotalPosts { get; set; }
        public int TotalPages { get; set; }
        public int CurrentPage { get; set; }
        public string Category { get; set; }
        public string Tag { get; set; }
        public bool HasNext { get; set; }
        public bool HasPrevious { get; set; }
        public IEnumerable<PostSummaryView> Posts { get; set; }
    }
}
