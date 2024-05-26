using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using MultiFamilyPortal.Converters;
using ReactiveUI;

namespace MultiFamilyPortal.Dtos.Underwriting
{
    [JsonConverter(typeof(ReactiveObjectConverter<UnderwritingAnalysisDealAnalysis>))]
    public class UnderwritingAnalysisDealAnalysis : ReactiveObject
    {
        public string Summary { get; set; }

        public string ValuePlays { get; set; }

        public string ConstructionType { get; set; }

        public string UtilityNotes { get; set; }

        public string CompetitionNotes { get; set; }

        public string HowUnderwritingWasDetermined { get; set; }

        [DisplayFormat(DataFormatString = "{0:C}")]
        public double MarketPricePerUnit { get; set; }

        [DisplayFormat(DataFormatString = "{0:P}")]
        public double MarketCapRate { get; set; }
    }
}
