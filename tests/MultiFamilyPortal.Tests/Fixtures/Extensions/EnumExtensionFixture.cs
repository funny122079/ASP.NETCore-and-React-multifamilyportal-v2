using MultiFamilyPortal.Data.Models;
using Xunit;

namespace MultiFamilyPortal.Tests.Fixtures.Extensions
{
    public class EnumExtensionFixture
    {
        [Theory]
        [InlineData(UnderwritingCategory.ConsessionsNonPayment, false)]
        [InlineData(UnderwritingCategory.ContractServices, true)]
        [InlineData(UnderwritingCategory.GeneralAdmin, true)]
        [InlineData(UnderwritingCategory.GrossScheduledRent, false)]
        [InlineData(UnderwritingCategory.Insurance, false)]
        [InlineData(UnderwritingCategory.Management, true)]
        [InlineData(UnderwritingCategory.Marketing, true)]
        [InlineData(UnderwritingCategory.OtherIncome, false)]
        [InlineData(UnderwritingCategory.OtherIncomeBad, false)]
        [InlineData(UnderwritingCategory.OtherIncomeOneTime, false)]
        [InlineData(UnderwritingCategory.Payroll, true)]
        [InlineData(UnderwritingCategory.PhysicalVacancy, false)]
        [InlineData(UnderwritingCategory.RepairsMaintenance, true)]
        [InlineData(UnderwritingCategory.Taxes, false)]
        [InlineData(UnderwritingCategory.Utility, true)]
        [InlineData(UnderwritingCategory.UtilityReimbursement, false)]
        public void CategoryIsOperatingExpense(UnderwritingCategory category, bool expected)
        {
            Assert.Equal(expected, category.IsOperatingExpense());
        }

        [Theory]
        [InlineData(UnderwritingCategory.ConsessionsNonPayment, UnderwritingType.Income)]
        [InlineData(UnderwritingCategory.ContractServices, UnderwritingType.Expense)]
        [InlineData(UnderwritingCategory.GeneralAdmin, UnderwritingType.Expense)]
        [InlineData(UnderwritingCategory.GrossScheduledRent, UnderwritingType.Income)]
        [InlineData(UnderwritingCategory.Insurance, UnderwritingType.Expense)]
        [InlineData(UnderwritingCategory.Management, UnderwritingType.Expense)]
        [InlineData(UnderwritingCategory.Marketing, UnderwritingType.Expense)]
        [InlineData(UnderwritingCategory.OtherIncome, UnderwritingType.Income)]
        [InlineData(UnderwritingCategory.OtherIncomeBad, UnderwritingType.Income)]
        [InlineData(UnderwritingCategory.OtherIncomeOneTime, UnderwritingType.Income)]
        [InlineData(UnderwritingCategory.Payroll, UnderwritingType.Expense)]
        [InlineData(UnderwritingCategory.PhysicalVacancy, UnderwritingType.Income)]
        [InlineData(UnderwritingCategory.RepairsMaintenance, UnderwritingType.Expense)]
        [InlineData(UnderwritingCategory.Taxes, UnderwritingType.Expense)]
        [InlineData(UnderwritingCategory.Utility, UnderwritingType.Expense)]
        [InlineData(UnderwritingCategory.UtilityReimbursement, UnderwritingType.Income)]
        public void Foo(UnderwritingCategory category, UnderwritingType type)
        {
            Assert.Equal(type, category.GetLineItemType());
        }
    }
}
