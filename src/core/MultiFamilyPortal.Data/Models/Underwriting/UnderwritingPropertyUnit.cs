using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.Data.Models
{
    public class UnderwritingPropertyUnit
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public Guid ModelId { get; set; }

        public string Unit { get; set; }

        public string Renter { get; set; }

        public DateTime? LeaseStart { get; set; }

        public DateTime? LeaseEnd { get; set; }

        public bool AtWill { get; set; }

        public double Rent { get; set; }

        public double DepositOnHand { get; set; }

        public double Balance { get; set; }

        public UnderwritingPropertyUnitModel Model { get; set; }

        public virtual ICollection<UnderwritingPropertyUnitLedger> Ledger { get; set; }
    }
}
