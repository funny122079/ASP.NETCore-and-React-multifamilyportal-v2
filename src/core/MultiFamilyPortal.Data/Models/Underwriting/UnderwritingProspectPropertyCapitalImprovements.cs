using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.Data.Models
{
    public class UnderwritingProspectPropertyCapitalImprovements
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public CapitalImprovementStatus Status { get; set; }

        public double Cost { get; set; }

        public string Description { get; set; }

        public Guid PropertyId { get; set; }

        public UnderwritingProspectProperty Property { get; set; }
    }
}
