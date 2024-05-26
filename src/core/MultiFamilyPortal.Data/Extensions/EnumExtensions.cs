using System.Reflection;
using MultiFamilyPortal.Data.ComponentModel;

namespace MultiFamilyPortal.Data.Models
{
    public static class EnumExtensions
    {
        public static UnderwritingType GetLineItemType(this UnderwritingCategory category)
        {
            return GetTypeAttribute(category).Type;
        }

        public static bool IsOperatingExpense(this UnderwritingCategory category)
        {
            return GetTypeAttribute(category).OperatingExpense;
        }

        public static bool? IsRecurring(this CRMNotableDateType dateType)
        {
            var attr = GetTypeAttribute(dateType);
            return attr?.Recurring;
        }

        private static UnderwritingTypeAttribute GetTypeAttribute(UnderwritingCategory category)
        {
            var type = typeof(UnderwritingCategory);
            var memberData = type.GetMember(category.ToString())?.FirstOrDefault();
            if (memberData is null)
                throw new InvalidOperationException($"Unable to find the memberdata for the Category {category}");

            return memberData.GetCustomAttribute<UnderwritingTypeAttribute>();
        }

        private static KnownRecurranceAttribute GetTypeAttribute(CRMNotableDateType dateType)
        {
            var type = typeof(CRMNotableDateType);
            var memberData = type.GetMember(dateType.ToString())?.FirstOrDefault();
            if (memberData is null)
                throw new InvalidOperationException($"Unable to find the memberdata for the Category {dateType}");

            return memberData.GetCustomAttribute<KnownRecurranceAttribute>();
        }
    }
}
