using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.Data.Models
{
    public class InvestorProspect
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Phone { get; set; }

        [Required]
        public string Timezone { get; set; }

        [Required]
        [Range(25000.00, double.MaxValue)]
        public double LookingToInvest { get; set; }

        public bool Contacted { get; set; }

        public string Comments { get; set; }

        private DateTimeOffset _timestamp = DateTimeOffset.Now;
        public DateTimeOffset Timestamp => _timestamp;
    }
}
