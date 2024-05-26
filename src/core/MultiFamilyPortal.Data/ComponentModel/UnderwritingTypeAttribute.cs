using MultiFamilyPortal.Data.Models;

namespace MultiFamilyPortal.Data.ComponentModel
{
    internal class UnderwritingTypeAttribute : Attribute
    {
        public UnderwritingTypeAttribute(UnderwritingType type, bool operatingExpense = false)
        {
            Type = type;
            _operatingExpense = operatingExpense;
        }

        public UnderwritingType Type { get; }

        private bool _operatingExpense;
        public bool OperatingExpense => Type == UnderwritingType.Expense && _operatingExpense;
    }
}
