using System.ComponentModel.DataAnnotations;

namespace MultiFamilyPortal.Data.Models
{
    public class SiteTheme
    {
        [Required]
        public string Id { get; set; }

        public bool IsDefault { get; set; }
    }
}
