namespace MultiFamilyPortal.Dtos
{
    public class CommentNotification
    {
        public string PostTitle { get; set; }
        public string CommenterEmail { get; set; }
        public string CommenterName { get; set; }
        public string Content { get; set; }
        public string PostAuthorName { get; set; }
        public string PostAuthorEmail { get; set; }
        public DateTime CommentedOn { get; set; }
    }
}
