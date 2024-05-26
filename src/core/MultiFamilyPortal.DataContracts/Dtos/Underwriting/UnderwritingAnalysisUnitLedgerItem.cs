using System.Text.Json.Serialization;
using MultiFamilyPortal.Converters;
using MultiFamilyPortal.Data.Models;
using ReactiveUI;

namespace MultiFamilyPortal.Dtos.Underwriting
{
    [JsonConverter(typeof(ReactiveObjectConverter<UnderwritingAnalysisUnitLedgerItem>))]
    public class UnderwritingAnalysisUnitLedgerItem : ReactiveObject
    {
        public UnderwritingPropertyUnitLedgerType Type { get; set; }

        public double Rent { get; set; }

        public double ChargesCredits { get; set; }
    }
}
