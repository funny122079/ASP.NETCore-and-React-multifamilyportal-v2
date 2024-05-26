using System.Text.Json;
using System.Text.Json.Serialization;

namespace MultiFamilyPortal.Converters
{
    internal static class JsonExtensions
    {
        public static JsonConverter<T> GetConverter<T>(this JsonSerializerOptions options) =>
            (JsonConverter<T>)options.GetConverter(typeof(T));

        public static T GetEnum<T>(this Utf8JsonReader reader)
            where T : struct
        {
            return Enum.Parse<T>(reader.GetString());
        }
    }
}
