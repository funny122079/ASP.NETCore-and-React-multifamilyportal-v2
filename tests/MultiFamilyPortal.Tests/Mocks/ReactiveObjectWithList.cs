using System.Text.Json.Serialization;
using MultiFamilyPortal.Converters;
using ReactiveUI;

namespace MultiFamilyPortal.Tests.Mocks
{
    [JsonConverter(typeof(ReactiveObjectConverter<ReactiveObjectWithList>))]
    internal class ReactiveObjectWithList : ReactiveObject
    {
        public List<ReactiveObjectWithEnum> MyItems { get; set; }
    }
}
