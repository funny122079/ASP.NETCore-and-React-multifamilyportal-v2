using System.Text.Json.Serialization;
using MultiFamilyPortal.Converters;
using ReactiveUI;

namespace MultiFamilyPortal.Tests.Mocks
{
    [JsonConverter(typeof(ReactiveObjectConverter<ReactiveObjectWithJsonPropertyName>))]
    public class ReactiveObjectWithJsonPropertyName : ReactiveObject
    {
        [JsonPropertyName("custom-name")]
        public string SomeString { get; set; }
    }
}
