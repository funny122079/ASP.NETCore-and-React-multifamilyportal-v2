using System.ComponentModel.DataAnnotations;

namespace MultiFamilyPortal.Dtos
{
    public class NewsletterSubscriberRequest
    {
        [EmailAddress]
        public string Email { get; set; }
    }
}
