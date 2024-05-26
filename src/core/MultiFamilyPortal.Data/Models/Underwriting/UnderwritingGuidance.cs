using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.Data.Models
{
    public class UnderwritingGuidance
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public UnderwritingCategory Category { get; set; }

        public string Market { get; set; }

        public CostType Type { get; set; }

        public double Min { get; set; }

        public double Max { get; set; }

        public bool IgnoreOutOfRange { get; set; }
    }
}
