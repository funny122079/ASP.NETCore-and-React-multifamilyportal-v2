using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.Data.Models
{
    public class HighlightedUser
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Order { get; set; } = default!;

        public string UserId { get; set; } = default!;

        public SiteUser User { get; set; }
    }
}
