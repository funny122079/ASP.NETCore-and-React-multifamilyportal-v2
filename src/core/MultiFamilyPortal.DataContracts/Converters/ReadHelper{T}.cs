using System.Text.Json;
using System.Text.Json.Serialization;

namespace MultiFamilyPortal.Converters
{
    internal class ReadHelper<T> : ReadHelper
    {
        private readonly ReadDelegate _readDelegate;

        private delegate T ReadDelegate(ref Utf8JsonReader reader, Type type, JsonSerializerOptions options);

        public ReadHelper(JsonConverter converter)
        {
            _readDelegate = Delegate.CreateDelegate(typeof(ReadDelegate), converter, "Read") as ReadDelegate;
        }

        public override object Read(ref Utf8JsonReader reader, Type type, JsonSerializerOptions options) =>
            _readDelegate.Invoke(ref reader, type, options);
    }
}
