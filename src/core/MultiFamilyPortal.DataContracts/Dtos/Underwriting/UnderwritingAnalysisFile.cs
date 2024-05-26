using System.Text.Json.Serialization;
using MultiFamilyPortal.Converters;
using ReactiveUI;
using ReactiveUI.Fody.Helpers;

namespace MultiFamilyPortal.Dtos.Underwriting
{
    [JsonConverter(typeof(ReactiveObjectConverter<UnderwritingAnalysisFile>))]
    public class UnderwritingAnalysisFile : ReactiveObject
    {
        public Guid Id { get; set; }

        [Reactive]
        public string Icon { get; set; }

        [Reactive]
        public string Type { get; set; }

        [Reactive]
        public string Name { get; set; }

        [Reactive]
        public string Description { get; set; }

        [Reactive]
        public string DownloadLink { get; set; }

        [Reactive]
        public DateTimeOffset Timestamp { get; set; }
    }
}
