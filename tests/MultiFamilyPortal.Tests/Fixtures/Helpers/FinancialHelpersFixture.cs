using MultiFamilyPortal.Data.Models;
using MultiFamilyPortal.Dtos.Underwriting;
using MultiFamilyPortal.Helpers;
using Xunit;

namespace MultiFamilyPortal.Tests.Fixtures.Helpers
{
    public class FinancialHelpersFixture
    {
        [Fact]
        public void AnnualOperatingExpenses()
        {
            var operatingExpenses = FinancialHelpers.AnnualOperatingExpenses(Ledger);
            Assert.Equal(99748, operatingExpenses);
        }

        [Fact]
        public void CalculatesInsuranceTotal()
        {
            var insuranceTotal = FinancialHelpers.InsuranceTotal(Ledger);
            Assert.Equal(7500, insuranceTotal);
        }

        [Theory]
        [InlineData(385000, 5923000, 0.0650)]
        public void CalculatesCapRate(double noi, double purchasePrice, double expected)
        {
            var capRate = FinancialHelpers.CalculateCapRate(noi, purchasePrice);
            Assert.Equal(expected, capRate, 4);
        }

        [Theory]
        [InlineData(0.05, 1000000, 50000)]
        [InlineData(0.03, 19500000, 585000)]
        public void CalculatesAquisitionFee(double percent, double purchasePrice, double expected)
        {
            var aquisitionFee = FinancialHelpers.CalculateAquisitionFee(percent, purchasePrice);
            Assert.Equal(expected, aquisitionFee);
        }

        private static readonly List<UnderwritingAnalysisLineItem> Ledger = new List<UnderwritingAnalysisLineItem>
        {
            new UnderwritingAnalysisLineItem{ Amount = 500000, Category = UnderwritingCategory.GrossScheduledRent, ExpenseType = ExpenseSheetType.T12 },
            new UnderwritingAnalysisLineItem{ Amount = 10000, Category = UnderwritingCategory.PhysicalVacancy, ExpenseType = ExpenseSheetType.T12 },
            new UnderwritingAnalysisLineItem{ Amount = 15000, Category = UnderwritingCategory.OtherIncome, ExpenseType = ExpenseSheetType.T12 },
            new UnderwritingAnalysisLineItem{ Amount = 23000, Category = UnderwritingCategory.Taxes, ExpenseType = ExpenseSheetType.T12 },
            new UnderwritingAnalysisLineItem{ Amount = 7500, Category = UnderwritingCategory.Insurance, ExpenseType = ExpenseSheetType.T12 },
            new UnderwritingAnalysisLineItem{ Amount = 24500, Category = UnderwritingCategory.Management, ExpenseType = ExpenseSheetType.T12 },
            new UnderwritingAnalysisLineItem{ Amount = 2850, Category = UnderwritingCategory.Marketing, ExpenseType = ExpenseSheetType.T12 },
            new UnderwritingAnalysisLineItem{ Amount = 72398, Category = UnderwritingCategory.Payroll, ExpenseType = ExpenseSheetType.T12 },
        };
    }
}
