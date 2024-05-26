using MultiFamilyPortal.Data.Models;

namespace MultiFamilyPortal.Dtos.Underwriting.Reports
{
    public class AssumptionsReport
    {
        public AssumptionsReport(UnderwritingAnalysis analysis)
        {
            var totalMortgage = analysis.Mortgages.Sum(x => x.LoanAmount) <= 0 ? 1 : analysis.Mortgages.Sum(x => x.LoanAmount);

            ClosingCosts = analysis.ClosingCosts;
            Downpayment = analysis.Downpayment;
            DownpaymentPercentage = Downpayment / totalMortgage;
            InsurancePremium = analysis.Ours.Where(x => x.Category == UnderwritingCategory.Insurance).Sum(x => x.AnnualizedTotal);
            LoanPoints = analysis.Mortgages.Sum(x => x.PointCost);

            CapitalImprovementsBreakDown = new()
            {
                { "Deferred Maintenance.", analysis.DeferredMaintenance },
                { "Securities and Exchange Commission Attorney.", analysis.SECAttorney },
                { "Closing Costs Miscellaneous.", analysis.ClosingCostMiscellaneous },
                { "Two Months Operating Expenses.", analysis.Ours.Where(x => x.Category.IsOperatingExpense()).Sum(x => x.AnnualizedTotal / 6) }
            };

            TotalEquity =  analysis.AquisitionFee + ClosingCosts + LoanPoints + Downpayment + InsurancePremium + CapitalImprovementsBreakDown.Sum(x => x.Value);
        }

        public double ClosingCosts { get; }
        public double Commission { get; }
        public double Downpayment { get; }
        public double DownpaymentPercentage { get; }
        public double InsurancePremium { get; }
        public double LoanPoints { get; }
        public double TaxTransfer { get; }
        public double TotalEquity { get; }
        public Dictionary<string, double> CapitalImprovementsBreakDown { get; }
    }
}
