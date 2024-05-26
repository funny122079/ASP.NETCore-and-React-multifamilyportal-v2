using System.Text.Json.Serialization;
using MultiFamilyPortal.Converters;
using ReactiveUI;

namespace MultiFamilyPortal.Dtos.Underwriting
{
    [JsonConverter(typeof(ReactiveObjectConverter<UnderwritingAnalysisUnit>))]
    public class UnderwritingAnalysisUnit : ReactiveObject
    {
        public Guid Id { get; set; }

        public string Unit { get; set; }

        public string Renter { get; set; }

        public DateTime? LeaseStart { get; set; }

        public DateTime? LeaseEnd { get; set; }

        public bool AtWill { get; set; }

        public double Rent { get; set; }

        public double DepositOnHand { get; set; }

        public double Balance { get; set; }

        public List<UnderwritingAnalysisUnitLedgerItem> Ledger { get; set; }
    }
}
