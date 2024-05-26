using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.Data.Models
{
    public class UnderwritingPropertyUnitModel
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public Guid PropertyId { get; set; }

        public string Name { get; set; }

        public int Beds { get; set; }

        public double Baths { get; set; }

        public double MarketRent { get; set; }

        public double CurrentRent { get; set; }

        public bool Upgraded { get; set; }

        public int? SquareFeet { get; set; }

        public int TotalUnits { get; set; }

        public UnderwritingProspectProperty Property { get; set; }

        public virtual ICollection<UnderwritingPropertyUnit> Units { get; set; }
    }
}
