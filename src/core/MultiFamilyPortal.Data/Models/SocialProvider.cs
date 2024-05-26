using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.Data.Models
{
    public class SocialProvider
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string UriTemplate { get; set; }

        [Required]
        public string Icon { get; set; }

        [Required]
        public string Placeholder { get; set; }
    }
}
