using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.Data.Models
{
    public class UnderwritingProspectPropertyIncomeForecast
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public Guid ProspectId { get; set; }

        public int Year { get; set; }

        public IncomeForecastIncreaseType IncreaseType { get; set; }

        public double PerUnitIncrease { get; set; }

        public int UnitsAppliedTo { get; set; }

        public double FixedIncreaseOnRemainingUnits { get; set; }

        public double Vacancy { get; set; }

        public double OtherLossesPercent { get; set; }

        public double UtilityIncreases { get; set; }

        public double OtherIncomePercent { get; set; }

        public virtual UnderwritingProspectProperty Prospect { get; set; }
    }
}
