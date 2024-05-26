using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.Data.Models
{
    public class InvestorContactLog
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        public string UserId { get; set; }

        [Required]
        public string InvestorId { get; set; }

        public string Notes { get; set; }

        private DateTimeOffset _timestamp = DateTimeOffset.Now;
        public DateTimeOffset Timestamp => _timestamp;

        public SiteUser User { get; set; }

        public SiteUser Investor { get; set; }
    }
}
