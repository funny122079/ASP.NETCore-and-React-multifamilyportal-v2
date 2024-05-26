using System.Text.Json;

namespace MultiFamilyPortal.Converters
{
    internal abstract class WriteHelper
    {
        public abstract void Write(Utf8JsonWriter writer, object value, JsonSerializerOptions options);
    }
}
