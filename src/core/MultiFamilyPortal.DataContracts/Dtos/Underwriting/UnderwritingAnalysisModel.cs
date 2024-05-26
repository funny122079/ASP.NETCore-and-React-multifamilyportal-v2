using System.Text.Json.Serialization;
using MultiFamilyPortal.Converters;
using ReactiveUI;
using ReactiveUI.Fody.Helpers;

namespace MultiFamilyPortal.Dtos.Underwriting
{
    [JsonConverter(typeof(ReactiveObjectConverter<UnderwritingAnalysisModel>))]
    public class UnderwritingAnalysisModel : ReactiveObject
    {
        public Guid Id { get; set; }

        [Reactive]
        public string Name { get; set; }

        [Reactive]
        public int Beds { get; set; }

        [Reactive]
        public double Baths { get; set; }

        [Reactive]
        public double MarketRent { get; set; }

        [Reactive]
        public double CurrentRent { get; set; }

        [Reactive]
        public bool Upgraded { get; set; }

        [Reactive]
        public int TotalUnits { get; set; }

        [Reactive]
        public int? Area { get; set; }

        [JsonIgnore]
        public double AverageRent => (Units?.Any(x => x.Rent > 0) ?? false) ? 
            Units.Where(x => x.Rent > 0).Average(x => x.Rent) : 0;

        public List<UnderwritingAnalysisUnit> Units { get; set; }
    }
}
