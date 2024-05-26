using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.Data.Models
{
    public class ActivityLog
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public string UserId { get; set; }

        public TimeSpan Total { get; set; }

        public DateTime Date { get; set; }

        private DateTimeOffset _timestamp = DateTimeOffset.Now;
        public DateTimeOffset Timestamp => _timestamp;

        public string Description { get; set; }

        public string Notes { get; set; }

        public ActivityType Type { get; set; }

        public SiteUser User { get; set; }
    }
}
