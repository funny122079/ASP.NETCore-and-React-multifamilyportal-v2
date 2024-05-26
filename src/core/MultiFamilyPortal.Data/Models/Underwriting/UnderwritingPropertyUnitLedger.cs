using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.Data.Models
{
    public class UnderwritingPropertyUnitLedger
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public Guid UnitId { get; set; }

        public UnderwritingPropertyUnitLedgerType Type { get; set; }

        public double Rent { get; set; }

        public double ChargesCredits { get; set; }

        public UnderwritingPropertyUnit Unit { get; set; }
    }
}
