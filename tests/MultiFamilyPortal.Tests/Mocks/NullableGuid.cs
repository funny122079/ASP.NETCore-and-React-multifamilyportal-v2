using System.Text.Json.Serialization;
using MultiFamilyPortal.Converters;
using ReactiveUI;

namespace MultiFamilyPortal.Tests.Mocks
{
    [JsonConverter(typeof(ReactiveObjectConverter<NullableGuid>))]
    internal class NullableGuid : ReactiveObject
    {
        public Guid? Id { get; set; }
    }
}
