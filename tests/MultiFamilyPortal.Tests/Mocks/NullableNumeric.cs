using System.Text.Json.Serialization;
using MultiFamilyPortal.Converters;
using ReactiveUI;

namespace MultiFamilyPortal.Tests.Mocks
{
    [JsonConverter(typeof(ReactiveObjectConverter<NullableNumeric>))]
    internal class NullableNumeric : ReactiveObject
    {
        public int? SomeInt { get; set; }

        public double? SomeDouble { get; set; }
    }
}
