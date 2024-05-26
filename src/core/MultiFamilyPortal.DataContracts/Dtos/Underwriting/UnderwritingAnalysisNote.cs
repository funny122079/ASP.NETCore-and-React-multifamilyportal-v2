using System.Text.Json.Serialization;
using MultiFamilyPortal.Converters;
using ReactiveUI;
using ReactiveUI.Fody.Helpers;

namespace MultiFamilyPortal.Dtos.Underwriting
{
    [JsonConverter(typeof(ReactiveObjectConverter<UnderwritingAnalysisNote>))]
    public class UnderwritingAnalysisNote : ReactiveObject
    {
        public Guid Id { get; set; }

        [Reactive]
        public string UnderwriterId { get; set; }

        [Reactive]
        public string Underwriter { get; set; }

        [Reactive]
        public string UnderwriterEmail { get; set; }

        [Reactive]
        public string Note { get; set; }

        public DateTimeOffset Timestamp { get; set; }
    }
}
