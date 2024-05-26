using System.Text.Json;
using System.Text.Json.Serialization;

namespace MultiFamilyPortal.Converters
{
    internal class WriteHelper<T> : WriteHelper
    {
        private readonly WriteDelegate _writeDelegate;

        public delegate void WriteDelegate(Utf8JsonWriter writer, T value, JsonSerializerOptions options);

        public WriteHelper(JsonConverter converter)
        {
            _writeDelegate = Delegate.CreateDelegate(typeof(WriteDelegate), converter, "Write") as WriteDelegate;
        }

        public override void Write(Utf8JsonWriter writer, object value, JsonSerializerOptions options) =>
            _writeDelegate.Invoke(writer, (T)value, options);
    }
}
