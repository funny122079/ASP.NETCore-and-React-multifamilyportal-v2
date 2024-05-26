namespace MultiFamilyPortal.Dtos.Underwriting.Reports;

public class DealSummaryReport
{
    public DealSummaryReport(UnderwritingAnalysis analysis)
    {

        if (analysis?.Mortgages?.Any() ?? false)
        {
            DebtService = analysis.Mortgages
                .Select(x => x.AnnualDebtService)
                .OrderByDescending(x => x)
                .FirstOrDefault();

            if (analysis.Mortgages.Count() > 1)
            {
                SecondaryDebtService = analysis.Mortgages
                    .Select(x => x.AnnualDebtService)
                    .Skip(1)
                    .Sum();
            }
        }

        OurCashFlow = analysis.NOI - analysis.CapXTotal - DebtService - SecondaryDebtService;
        OurEquityPartnerCF = OurCashFlow - (OurCashFlow * analysis.OurEquityOfCF);
        OurEquityPartnerCoC = OurEquityPartnerCF / analysis.Raise;
    }

    private double DebtService { get; }
    private double SecondaryDebtService { get; }
    public double OurEquityPartnerCoC { get; }
    private double OurEquityPartnerCF { get; }
    private double OurCashFlow { get; }
}

