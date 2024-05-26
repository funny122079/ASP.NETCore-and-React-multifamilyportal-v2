using System.Text.Json.Serialization;
using MultiFamilyPortal.Converters;
using MultiFamilyPortal.Data.Models;
using ReactiveUI;

namespace MultiFamilyPortal.Dtos.Underwriting
{
    [JsonConverter(typeof(ReactiveObjectConverter<UnderwritingAnalysisCapitalImprovement>))]
    public class UnderwritingAnalysisCapitalImprovement : ReactiveObject
    {
        public CapitalImprovementStatus Status { get; set; }

        public double Cost { get; set; }

        public string Description { get; set; }
    }
}
