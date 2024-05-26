using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.Data.Models
{
    public class UnderwritingProspectPropertyDealAnalysis
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public Guid PropertyId { get; set; }

        public string Summary { get; set; }

        public string ValuePlays { get; set; }

        public string ConstructionType { get; set; }

        public string UtilityNotes { get; set; }

        public string CompetitionNotes { get; set; }

        public string HowUnderwritingWasDetermined { get; set; }

        public double MarketPricePerUnit { get; set; }

        public double MarketCapRate { get; set; }

        public UnderwritingProspectProperty Property { get; set; }
    }
}
