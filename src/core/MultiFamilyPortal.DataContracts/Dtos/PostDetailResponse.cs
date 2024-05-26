using MultiFamilyPortal.Data.Views;

namespace MultiFamilyPortal.Dtos
{
    public class PostDetailResponse
    {
        public PostDetailView Post { get; set; }
        public PostSuggestionLink PreviousPost { get; set; }
        public PostSuggestionLink NextPost { get; set; }
    }
}
