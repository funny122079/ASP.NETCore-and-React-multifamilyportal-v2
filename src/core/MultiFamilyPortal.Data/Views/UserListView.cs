namespace MultiFamilyPortal.Data.Views
{
    public class UserListView
    {
        public string Id { get; set; } = default!;

        public string Name { get; set; } = default!;

        public string Email { get; set; } = default!;

        public int Posts { get; set; }

        public int PostViews { get; set; }
    }
}
