using System.Text.Json.Serialization;
using MultiFamilyPortal.Converters;
using ReactiveUI;

namespace MultiFamilyPortal.Tests.Mocks
{
    [JsonConverter(typeof(ReactiveObjectConverter<ReactiveObjectWithEnum>))]
    public class ReactiveObjectWithEnum : ReactiveObject
    {
        public AnEnum SomeEnum { get; set; }
    }
}
