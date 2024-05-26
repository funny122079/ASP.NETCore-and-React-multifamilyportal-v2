using System.ComponentModel.DataAnnotations;

namespace MultiFamilyPortal.Data.Models
{
    public class EmailTemplate
    {
        [Required]
        public string Key { get; set; }

        public string Description { get; set; }

        public string Model { get; set; }

        public string Html { get; set; }

        public string PlainText { get; set; }

        public DateTimeOffset LastUpdated { get; set; }
    }


}
