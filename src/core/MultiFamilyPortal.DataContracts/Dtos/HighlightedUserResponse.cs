namespace MultiFamilyPortal.Dtos
{
    public class HighlightedUserResponse
    {
        public string Id { get; set; }
        public string DisplayName { get; set; }
        public string Title { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Bio { get; set; }
        public IEnumerable<SocialLinkResponse> Links { get; set; }
    }
}
