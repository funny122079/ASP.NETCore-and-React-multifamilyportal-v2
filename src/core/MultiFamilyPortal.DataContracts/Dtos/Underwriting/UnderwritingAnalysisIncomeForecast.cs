using System.Text.Json.Serialization;
using MultiFamilyPortal.Converters;
using MultiFamilyPortal.Data.Models;
using ReactiveUI;

namespace MultiFamilyPortal.Dtos.Underwriting
{
    [JsonConverter(typeof(ReactiveObjectConverter<UnderwritingAnalysisIncomeForecast>))]
    public class UnderwritingAnalysisIncomeForecast : ReactiveObject
    {
        public int Year { get; set; }

        public IncomeForecastIncreaseType IncreaseType { get; set; }

        public double PerUnitIncrease { get; set; }

        public int UnitsAppliedTo { get; set; }

        public double FixedIncreaseOnRemainingUnits { get; set; }

        public double Vacancy { get; set; }

        public double OtherLossesPercent { get; set; }

        public double UtilityIncreases { get; set; }

        public double OtherIncomePercent { get; set; }
    }
}
