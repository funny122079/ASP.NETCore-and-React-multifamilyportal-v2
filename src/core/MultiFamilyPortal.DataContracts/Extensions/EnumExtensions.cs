using System.ComponentModel.DataAnnotations;
using System.Reflection;

namespace MultiFamilyPortal.Extensions
{
    public static class EnumExtensions
    {
        public static string GetDisplayName<T>(this T value)
            where T : Enum
        {
            var type = typeof(T);
            var memberData = type.GetMember(value.ToString())?.FirstOrDefault();
            if (memberData is null)
                return value.ToString();

            return memberData.GetCustomAttribute<DisplayAttribute>()?.Name ?? value.ToString();
        }
    }
}
