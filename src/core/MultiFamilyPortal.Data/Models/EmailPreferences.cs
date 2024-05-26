using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.Data.Models
{
    public class EmailPreferences
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public string UserId { get; set; }

        public bool NotifyNewProperties { get; set; }

        public bool NotifyMondayMorning { get; set; }

        public SiteUser User { get; set; }
    }
}
