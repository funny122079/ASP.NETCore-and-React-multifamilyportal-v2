using MultiFamilyPortal.Dtos;

namespace MultiFamilyPortal.Services;

public interface IReportGenerator
{
    #region Underwriting Reports
    Task<ReportResponse> FullReport(Guid propertyId);
    Task<ReportResponse> DealSummary(Guid propertyId);
    Task<ReportResponse> Assumptions(Guid propertyId);
    Task<ReportResponse> CashFlow(Guid propertyId);
    Task<ReportResponse> IncomeForecast(Guid propertyId);
    Task<ReportResponse> CapitalExpenses(Guid propertyId);
    Task<ReportResponse> RentRoll(Guid propertyId);
    Task<ReportResponse> LeaseExposure(Guid propertyId);
    #endregion Underwriting Reports

    #region Investor Reports
    Task<ReportResponse> OneHundredThousandInvestmentProjections(Guid propertyId);
    Task<ReportResponse> ManagersReturns(Guid propertyId);
    Task<ReportResponse> TieredInvestmentGroup(Guid propertyId, string groupName);
    #endregion Investor Reports
}
