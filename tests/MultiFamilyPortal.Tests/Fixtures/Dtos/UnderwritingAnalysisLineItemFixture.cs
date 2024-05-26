using MultiFamilyPortal.Data.Models;
using MultiFamilyPortal.Dtos.Underwriting;
using Xunit;

namespace MultiFamilyPortal.Tests.Fixtures.Dtos
{
    public class UnderwritingAnalysisLineItemFixture
    {
        [Theory]
        [InlineData(ExpenseSheetType.T1, 12000)]
        [InlineData(ExpenseSheetType.T3, 4000)]
        [InlineData(ExpenseSheetType.T4, 3000)]
        [InlineData(ExpenseSheetType.T6, 2000)]
        [InlineData(ExpenseSheetType.T12, 1000)]
        public void CalculatesAnnualizedTotal(ExpenseSheetType type, double expected)
        {
            var model = new UnderwritingAnalysisLineItem
            {
                Amount = 1000,
                Category = UnderwritingCategory.GrossScheduledRent,
                ExpenseType = type,
            };
            Assert.Equal(expected, model.AnnualizedTotal);
        }
    }
}
