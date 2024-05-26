using Microsoft.Extensions.Logging;
using MultiFamilyPortal.Dtos;
using MultiFamilyPortal.Helpers.Reports;
using Telerik.Windows.Documents.Fixed.FormatProviders.Pdf;
using Telerik.Windows.Documents.Fixed.FormatProviders.Pdf.Export;
using Telerik.Windows.Documents.Fixed.Model;

namespace MultiFamilyPortal.Services;

public class ReportGenerator : IReportGenerator
{
    private ILogger<ReportGenerator> _logger { get; }
    private IUnderwritingService _underwritingService { get; }

    public ReportGenerator(ILogger<ReportGenerator> logger, IUnderwritingService underwritingService)
    {
        _logger = logger;
        _underwritingService = underwritingService;
    }

    #region Underwriting Reports
    public async Task<ReportResponse> FullReport(Guid propertyId)
    {
        var property = await _underwritingService.GetUnderwritingAnalysis(propertyId);

        if (property is null)
            return NotFound();

        var document = new RadFixedDocument();
        GenerateFullReportBuilder.GenerateFullReport(property, document);
        GenerateDealSummaryBuilder.GenerateDealSummary(property, document);
        GenerateAssumptionsBuilder.GenerateAssumptions(property, document);
        GenerateCashFlowBuilder.GenerateCashFlow(property, document);
        GenerateIncomeForecastBuilder.GenerateIncomeForecast(property, document);
        GenerateCapitalExpensesBuilder.GenerateCapitalExpenses(property, document);

        var name = "Overall_Projections.pdf";
        return new ReportResponse
        {
            FileName = name,
            Data = ExportToPdf(document),
            MimeType = FileTypeLookup.GetFileTypeInfo(name).MimeType
        };
    }

    public async Task<ReportResponse> DealSummary(Guid propertyId)
    {
        var property = await _underwritingService.GetUnderwritingAnalysis(propertyId);

        if (property is null)
            return NotFound();

        var document = new RadFixedDocument();
        try
        {
            GenerateDealSummaryBuilder.GenerateDealSummary(property, document);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error generating deal summary");
            return NotFound();
        }

        var name = "Deal_Summary.pdf";
        return new ReportResponse
        {
            FileName = name,
            Data = ExportToPdf(document),
            MimeType = FileTypeLookup.GetFileTypeInfo(name).MimeType
        };
    }

    public async Task<ReportResponse> Assumptions(Guid propertyId)
    {
        var property = await _underwritingService.GetUnderwritingAnalysis(propertyId);

        if (property is null)
            return NotFound();

        var document = new RadFixedDocument();
        try
        {
            GenerateAssumptionsBuilder.GenerateAssumptions(property, document);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error generating Assumptions report");
            return NotFound();
        }

        var name = "Assumptions.pdf";
        return new ReportResponse
        {
            FileName = name,
            Data = ExportToPdf(document),
            MimeType = FileTypeLookup.GetFileTypeInfo(name).MimeType
        };
    }

    public async Task<ReportResponse> CashFlow(Guid propertyId)
    {
        var property = await _underwritingService.GetUnderwritingAnalysis(propertyId);

        if (property is null)
            return NotFound();

        var document = new RadFixedDocument();
        try
        {
            GenerateCashFlowBuilder.GenerateCashFlow(property, document);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error generating Cash Flow report");
            return NotFound();
        }

        var name = "Cash_Flow.pdf";
        return new ReportResponse
        {
            FileName = name,
            Data = ExportToPdf(document),
            MimeType = FileTypeLookup.GetFileTypeInfo(name).MimeType
        };
    }

    public async Task<ReportResponse> IncomeForecast(Guid propertyId)
    {
        var property = await _underwritingService.GetUnderwritingAnalysis(propertyId);

        if (property is null)
            return NotFound();

        var document = new RadFixedDocument();
        try
        {
            GenerateIncomeForecastBuilder.GenerateIncomeForecast(property, document);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error generating Income Forecast report");
            return NotFound();
        }

        var name = "Income_Forecast.pdf";
        return new ReportResponse
        {
            FileName = name,
            Data = ExportToPdf(document),
            MimeType = FileTypeLookup.GetFileTypeInfo(name).MimeType
        };
    }

    public async Task<ReportResponse> CapitalExpenses(Guid propertyId)
    {
        var property = await _underwritingService.GetUnderwritingAnalysis(propertyId);

        if (property is null)
            return NotFound();

        var document = new RadFixedDocument();
        GenerateCapitalExpensesBuilder.GenerateCapitalExpenses(property, document);

        var name = "Capital_Expenses.pdf";
        return new ReportResponse
        {
            FileName = name,
            Data = ExportToPdf(document),
            MimeType = FileTypeLookup.GetFileTypeInfo(name).MimeType
        };
    }

    public async Task<ReportResponse> RentRoll(Guid propertyId)
    {
        var property = await _underwritingService.GetUnderwritingAnalysis(propertyId);

        if (property is null)
            return NotFound();

        var document = new RadFixedDocument();

        try
        {
          GenerateRentRollBuilder.GenerateRentRoll(property, document);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error generating Rent Roll report");
            return NotFound();
        }

        var name = "Rent_Roll.pdf";
        return new ReportResponse
        {
            FileName = name,
            Data = ExportToPdf(document),
            MimeType = FileTypeLookup.GetFileTypeInfo(name).MimeType
        };
    }

    public async Task<ReportResponse> LeaseExposure(Guid propertyId)
    {
        var property = await _underwritingService.GetUnderwritingAnalysis(propertyId);

        if (property is null)
            return NotFound();

        var document = new RadFixedDocument();
        try
        {
            GenerateLeaseExposureBuilder.GenerateLeaseExposure(property, document);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error generating Lease Exposure report");
            return NotFound();
        }

        var name = "Lease_Exposure.pdf";
        return new ReportResponse
        {
            FileName = name,
            Data = ExportToPdf(document),
            MimeType = FileTypeLookup.GetFileTypeInfo(name).MimeType
        };
    }

    #endregion Underwriting Reports

    #region Investor Reports
    public async Task<ReportResponse> ManagersReturns(Guid propertyId)
    {
        var property = await _underwritingService.GetUnderwritingAnalysis(propertyId);

        if (property is null)
            return NotFound();

        var document = new RadFixedDocument();
        try
        {
            GenerateManagerReturnsBuilder.GenerateManagerReturns(property, document);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error generating Managers Returns report");
            return NotFound();
        }

        var name = $"Managers_Returns_Report.pdf";
        return new ReportResponse
        {
            FileName = name,
            Data = ExportToPdf(document),
            MimeType = FileTypeLookup.GetFileTypeInfo(name).MimeType
        };
    }

    public async Task<ReportResponse> CulmativeInvestment(Guid propertyId)
    {
        var property = await _underwritingService.GetUnderwritingAnalysis(propertyId);

        if (property is null)
            return NotFound();

        var document = new RadFixedDocument();

        return NotFound();
    }

    public async Task<ReportResponse> OneHundredThousandInvestmentProjections(Guid propertyId)
    {
        var property = await _underwritingService.GetUnderwritingAnalysis(propertyId);

        if (property is null)
            return NotFound();

        var document = new RadFixedDocument();

        return NotFound();
    }

    public async Task<ReportResponse> NetPresentValue(Guid propertyId)
    {
        var property = await _underwritingService.GetUnderwritingAnalysis(propertyId);

        if (property is null)
            return NotFound();

        var document = new RadFixedDocument();

        return NotFound();
    }

    public async Task<ReportResponse> LeveragedRateOfReturns(Guid propertyId)
    {
        var property = await _underwritingService.GetUnderwritingAnalysis(propertyId);

        if (property is null)
            return NotFound();

        var document = new RadFixedDocument();

        return NotFound();
    }

    public async Task<ReportResponse> TieredInvestmentGroup(Guid propertyId, string groupName)
    {
        var property = await _underwritingService.GetUnderwritingAnalysis(propertyId);

        if (property is null)
            return NotFound();

        var document = new RadFixedDocument();

        return NotFound();
    }
    #endregion Investor Reports

    private byte[] ExportToPdf(RadFixedDocument document)
    {
        try
        {
            if (!document.Pages.Any())
                return Array.Empty<byte>();

            PdfFormatProvider provider = new();
            PdfExportSettings settings = new PdfExportSettings
            {
                ImageQuality = ImageQuality.High,
                ComplianceLevel = PdfComplianceLevel.PdfA2B
            };
            provider.ExportSettings = settings;
            return provider.Export(document);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex.ToString());
            return Array.Empty<byte>();
        }
    }

    #region Underwriting Report Generators


    #endregion Underwriting Report Generators

    private static ReportResponse NotFound() => new() { Data = Array.Empty<byte>() };
}
