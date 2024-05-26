using MultiFamilyPortal.ComponentModel;

namespace MultiFamilyPortal.Dtos
{
    public class ContactFormEmailNotification : HtmlTemplateBase
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DisplayName { get; set; }
        public string Email { get; set; }

        [PlainText]
        [RawOutput]
        public string Message { get; set; }
        public int Year { get; set; }
    }
}
