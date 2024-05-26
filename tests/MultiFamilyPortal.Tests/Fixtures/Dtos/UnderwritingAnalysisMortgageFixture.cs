using MultiFamilyPortal.Dtos.Underwriting;
using Xunit;

namespace MultiFamilyPortal.Tests.Fixtures.Dtos
{
    public class UnderwritingAnalysisMortgageFixture
    {
        [Fact]
        public void CalculatesPIPayment()
        {
            var mortgage = new UnderwritingAnalysisMortgage
            {
                LoanAmount = 1000000
            };

            Assert.Equal(57289.84, mortgage.AnnualDebtService);
        }

        [Fact]
        public void CalculatesIOPayment()
        {
            var mortgage = new UnderwritingAnalysisMortgage
            {
                LoanAmount = 1000000,
                InterestOnly = true,
            };

            Assert.Equal(40000, mortgage.AnnualDebtService);
        }

        [Fact]
        public void CalculatesPointCost()
        {
            var mortgage = new UnderwritingAnalysisMortgage
            {
                LoanAmount = 1000000
            };

            Assert.Equal(10000, mortgage.PointCost);
        }

        [Fact]
        public void LoanAmountChangesTriggerDebtServiceUpdate()
        {
            var mortgage = new UnderwritingAnalysisMortgage();

            Assert.Equal(0, mortgage.AnnualDebtService);

            var notifications = new List<string>();
            mortgage.PropertyChanged += (s, e) => notifications.Add(e.PropertyName);

            mortgage.LoanAmount = 1000000;

            Assert.Contains(notifications, x => x == "AnnualDebtService");
        }

        [Theory]
        [InlineData(0, 1600000)]
        [InlineData(36, 1511979.6)]
        public void CalculatesRemainingBalance(int months, double expected)
        {
            var mortgage = new UnderwritingAnalysisMortgage
            {
                LoanAmount = 1600000
            };

            Assert.Equal(expected, mortgage.CalculateRemainingBalance(months));
        }
    }
}
