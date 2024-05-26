using System.Collections;
using System.Reflection;
using System.Text.Json;
using System.Text.Json.Serialization;
using Humanizer;
using ReactiveUI;

namespace MultiFamilyPortal.Converters
{
    internal class ReactiveObjectConverter<T> : JsonConverter<T>
        where T : ReactiveObject, new()
    {
        private static readonly Type[] _writeAsString = new[]
        {
            typeof(DateTime),
            typeof(DateTime?),
            typeof(DateTimeOffset),
            typeof(DateTimeOffset?),
            typeof(Guid),
            typeof(Guid?),
            typeof(Uri),
        };

        public override T Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            var type = typeof(T);
            var props = type.GetRuntimeProperties();
            var value = new T();

            while (reader.Read() && reader.TokenType != JsonTokenType.EndObject)
            {
                var tokenType = reader.TokenType;
                if(tokenType == JsonTokenType.PropertyName)
                {
                    var name = reader.GetString();
                    reader.Read();

                    var prop = props.FirstOrDefault(x => GetPropertyName(x) == name);
                    if (prop is null || (prop.SetMethod is null && prop.GetCustomAttribute<AddMethodAttribute>() is null) || prop.GetCustomAttribute<JsonIgnoreAttribute>() != null)
                        continue;

                    if (reader.TokenType == JsonTokenType.String)
                    {
                        var stringValue = reader.GetString();
                        if (string.IsNullOrEmpty(stringValue))
                        {
                            if(prop.PropertyType == typeof(string))
                            {
                                prop.SetValue(value, string.Empty);
                            }

                            continue;
                        }

                        if (prop.PropertyType == typeof(string))
                            prop.SetValue(value, stringValue);
                        else if (prop.PropertyType == typeof(DateTimeOffset) || (prop.PropertyType == typeof(DateTimeOffset?) && !string.IsNullOrEmpty(stringValue)))
                            prop.SetValue(value, DateTimeOffset.Parse(stringValue));
                        else if (prop.PropertyType == typeof(DateTime) || (prop.PropertyType == typeof(DateTime?) && !string.IsNullOrEmpty(stringValue)))
                            prop.SetValue(value, DateTime.Parse(stringValue));
                        else if (prop.PropertyType.IsEnum)
                            prop.SetValue(value, Enum.Parse(prop.PropertyType, stringValue));
                        else if (prop.PropertyType == typeof(bool) && bool.TryParse(stringValue, out var boolValue))
                            prop.SetValue(value, boolValue);
                        else if ((prop.PropertyType == typeof(Guid) || prop.PropertyType == typeof(Guid?)) && Guid.TryParse(stringValue, out Guid guidValue))
                            prop.SetValue(value, guidValue);
                    }
                    else if (reader.TokenType == JsonTokenType.Number)
                    {
                        if (prop.PropertyType == typeof(int) || prop.PropertyType == typeof(int?))
                            prop.SetValue(value, reader.GetInt32());
                        else if (prop.PropertyType == typeof(double) || prop.PropertyType == typeof(double?))
                            prop.SetValue(value, reader.GetDouble());
                        else if (prop.PropertyType == typeof(decimal) || prop.PropertyType == typeof(decimal?))
                            prop.SetValue(value, reader.GetDecimal());
                    }
                    else if(prop.PropertyType == typeof(bool) && (reader.TokenType == JsonTokenType.False || reader.TokenType == JsonTokenType.True))
                    {
                        prop.SetValue(value, reader.GetBoolean());
                    }
                    else if (reader.TokenType == JsonTokenType.StartObject || (typeof(string) != prop.PropertyType && typeof(IEnumerable).IsAssignableFrom(prop.PropertyType)))
                    {
                        var converter = options.GetConverter(prop.PropertyType);

                        var readHelperType = typeof(ReadHelper<>).MakeGenericType(prop.PropertyType);
                        var readHelper = Activator.CreateInstance(readHelperType, converter) as ReadHelper;

                        if(reader.TokenType == JsonTokenType.StartObject)
                        {
                            prop.SetValue(value, readHelper.Read(ref reader, prop.PropertyType, options));
                            continue;
                        }

                        var listValue = readHelper.Read(ref reader, prop.PropertyType, options);

                        var addMethodAttr = prop.GetCustomAttribute<AddMethodAttribute>();
                        if(HasMethod(addMethodAttr?.Name, out var method))
                        {
                            method.Invoke(value, new object[] { listValue });
                        }
                        else if(prop.SetMethod is not null)
                        {
                            prop.SetValue(value, listValue);
                        }
                        else if(!string.IsNullOrEmpty(addMethodAttr?.Name))
                        {
                            throw new InvalidOperationException($"Could not locate method: {addMethodAttr.Name}");
                        }

                        continue;
                    }
                }
            }

            foreach(var prop in props)
            {
                if (prop.SetMethod is null || prop.PropertyType.IsEnum || prop.PropertyType == typeof(string) || prop.PropertyType == typeof(int) || prop.PropertyType.IsPrimitive || prop.PropertyType.Namespace == "System")
                    continue;
                var propValue = prop.GetValue(value);
                if(propValue is null)
                {
                    if(prop.PropertyType.IsInterface && prop.PropertyType.GenericTypeArguments.Any())
                    {
                        var argumentType = prop.PropertyType.GenericTypeArguments.First();
                        var listType = argumentType.MakeArrayType();
                        prop.SetValue(value, Activator.CreateInstance(listType));
                    }
                    else
                    {
                        prop.SetValue(value, Activator.CreateInstance(prop.PropertyType));
                    }
                }
            }

            return value;
        }

        public override void Write(Utf8JsonWriter writer, T value, JsonSerializerOptions options)
        {
            if (value is null)
            {
                writer.WriteNullValue();
                return;
            }

            writer.WriteStartObject();

            var type = typeof(T);
            var props = type.GetRuntimeProperties();

            foreach(var prop in props)
            {
                if (prop.DeclaringType == typeof(ReactiveObject) || prop.GetCustomAttribute<JsonIgnoreAttribute>() != null)
                    continue;

                var propValue = prop.GetValue(value, null);
                if (propValue is null)
                    continue;

                var name = GetPropertyName(prop);
                if(prop.PropertyType == typeof(int) || prop.PropertyType == typeof(int?))
                {
                    var integer = (int)propValue;
                    writer.WriteNumber(name, integer);
                }
                else if (prop.PropertyType == typeof(double) || prop.PropertyType == typeof(double?))
                {
                    var real = (double)propValue;
                    writer.WriteNumber(name, real);
                }
                else if (prop.PropertyType == typeof(decimal) || prop.PropertyType == typeof(decimal?))
                {
                    var decimalValue = (decimal)propValue;
                    writer.WriteNumber(name, decimalValue);
                }
                else if (prop.PropertyType == typeof(bool))
                {
                    var boolean = (bool)propValue;
                    writer.WriteBoolean(name, boolean);
                }
                else if(typeof(string) != prop.PropertyType && typeof(IEnumerable).IsAssignableFrom(prop.PropertyType))
                {
                    writer.WritePropertyName(name);
                    writer.WriteStartArray();
                    if(propValue is not null)
                    {
                        foreach (var item in (IEnumerable)propValue)
                        {
                            var itemType = item.GetType();
                            var converter = options.GetConverter(itemType);
                            var converterType = converter.GetType();
                            var writeMethod = converterType.GetMethod("Write");
                            writeMethod.Invoke(converter, new object[] { writer, item, options });
                        }
                    }

                    writer.WriteEndArray();
                }
                else if(_writeAsString.Contains(prop.PropertyType) || prop.PropertyType.IsEnum)
                {
                    var propertyValue = propValue.ToString();
                    writer.WriteString(name, propertyValue);
                }
                else
                {
                    writer.WritePropertyName(name);
                    var converter = options.GetConverter(prop.PropertyType);
                    var writeHelperType = typeof(WriteHelper<>).MakeGenericType(prop.PropertyType);
                    var writeHelper = Activator.CreateInstance(writeHelperType, converter) as WriteHelper;
                    writeHelper.Write(writer, propValue, options);
                }
            }

            writer.WriteEndObject();
        }

        private static string GetPropertyName(PropertyInfo prop)
        {
            var attr = prop.GetCustomAttribute<JsonPropertyNameAttribute>();
            if (attr != null && !string.IsNullOrEmpty(attr.Name))
                return attr.Name;

            return prop.Name.Camelize();
        }

        private static bool HasMethod(string methodName, out MethodInfo method)
        {
            method = null;
            if (string.IsNullOrEmpty(methodName))
                return false;

            var type = typeof(T);
            method = type.GetRuntimeMethods().FirstOrDefault(x => x.Name == methodName);

            if(method is null)
            {
                method = type.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Instance);
            }

            return method != null;
        }
    }
}
