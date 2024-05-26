using System.ComponentModel.DataAnnotations;

namespace MultiFamilyPortal.Data.Models
{
    public class Setting
    {
        [Required]
        [Key]
        public string Key { get; set; } = null!;

        public string? Value { get; set; }

        public T As<T>(T defaultValue = default)
        {
            var generic = (object)Value;
            var useDefault = string.IsNullOrEmpty(Value);
            var type = typeof(T);
            if (type == typeof(string))
                generic = !useDefault || defaultValue is null ? Value : defaultValue;
            else if (type == typeof(Guid))
                generic = useDefault ? defaultValue : Guid.Parse(Value!);
            else if (type == typeof(int))
                generic = useDefault ? defaultValue : int.Parse(Value!);
            else if (type == typeof(double))
                generic = useDefault ? defaultValue : double.Parse(Value!);
            else if (type == typeof(bool))
                generic = useDefault ? defaultValue : bool.Parse(Value!);
            else if (type == typeof(Uri))
                generic = !useDefault && Uri.TryCreate(Value, UriKind.Absolute, out var parsedUri) ? parsedUri : defaultValue;
            else if (typeof(IConvertible).IsAssignableFrom(type))
                generic = useDefault ? defaultValue : Convert.ChangeType(Value, typeof(T));
            else
                throw new NotSupportedException($"Cannot convert the value '{Value}' from string to {typeof(T).FullName}");

            return (T)generic;
        }
    }
}
