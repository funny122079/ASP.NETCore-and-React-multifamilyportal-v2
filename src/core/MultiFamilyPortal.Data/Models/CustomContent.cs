using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.Data.Models
{
    public class CustomContent
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string Id { get; set; }

        [Required]
        public string Title { get; set; }

        public string HtmlContent { get; set; }

        public DateTimeOffset LastUpdated { get; set; } = DateTimeOffset.Now;
    }
}
