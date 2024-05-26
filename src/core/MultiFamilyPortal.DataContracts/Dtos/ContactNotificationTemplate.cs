namespace MultiFamilyPortal.Dtos
{
    public class ContactNotificationTemplate : HtmlTemplateBase
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Comments { get; set; }
    }
}
