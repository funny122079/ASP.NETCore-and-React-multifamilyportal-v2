using MultiFamilyPortal.Dtos.Underwriting;
using MultiFamilyPortal.Dtos.Underwriting.Reports;
using Telerik.Documents.Primitives;
using Telerik.Windows.Documents.Fixed.Model;
using Telerik.Windows.Documents.Fixed.Model.Editing;
using Telerik.Windows.Documents.Fixed.Model.Editing.Flow;
using Telerik.Windows.Documents.Fixed.Model.Editing.Tables;
using Telerik.Windows.Documents.Fixed.Model.Fonts;

namespace MultiFamilyPortal.Helpers.Reports;
public static class GenerateAssumptionsBuilder
{
    public static void GenerateAssumptions(UnderwritingAnalysis property, RadFixedDocument document)
    {
        var page = document.Pages.AddPage();
        var editor = new FixedContentEditor(page);
        page.Size = ReportBuilder.LetterSizeHorizontal;

        var pageOneTableWidth = 195;
        var pageTwoTableWidth = page.Size.Width / 2 - 2 * ReportBuilder.PageMargin;
        var tableWidth = page.Size.Width / 3 - 60;
        var cellPadding = 3;
        var blackBorder = new Border(1, ReportBuilder.DarkColor);

        ReportBuilder.Header(page, "Assumptions");

        CriteriaTable(page, editor, property, blackBorder, pageOneTableWidth, cellPadding);
        DistributionTable(page, editor, property, blackBorder, pageOneTableWidth, cellPadding);
        ReversionTable(page, editor, property, blackBorder, pageOneTableWidth, cellPadding);
        EquityTable(page, editor, property, blackBorder, pageTwoTableWidth, cellPadding);
        CashFlowTable(page, editor, property, blackBorder, pageTwoTableWidth, cellPadding);
        PrimaryTable(page, editor, property, blackBorder, tableWidth, cellPadding);
        SupplementalTable(page, editor, property, blackBorder, tableWidth, cellPadding);
        RefinanceTable(page, editor, property, blackBorder, tableWidth, cellPadding);

        ReportBuilder.Footer(page, property.Name);
    }

    private static void CriteriaTable(RadFixedPage page,
                                      FixedContentEditor editor,
                                      UnderwritingAnalysis property,
                                      Border border,
                                      double width,
                                      double padding = 20,
                                      double headerSize = 18)
    {
        var table = new Table
        {
            DefaultCellProperties = { Padding = new Thickness(padding) },
            LayoutType = TableLayoutType.FixedWidth,
        };

        table.Borders = new TableBorders(border);

        var header = table.Rows.AddTableRow();
        header.BasicCell("Investment Criteria", true, ReportBuilder.HeaderColor, HorizontalAlignment.Left, 2);

        var data = table.Rows.AddTableRow();
        data.BasicCell("Hold Period", false);
        data.BasicCell(property.HoldYears.ToString(), false);

        editor.Position.Translate(ReportBuilder.PageMargin + page.Size.Width / 2 - width + 10, 120);
        editor.DrawTable(table, new Size(width, double.PositiveInfinity));
    }

    private static void DistributionTable(RadFixedPage page,
                                          FixedContentEditor editor,
                                          UnderwritingAnalysis property,
                                          Border border,
                                          double width,
                                          double padding = 20,
                                          double headerSize = 18)
    {
        var table = new Table
        {
            DefaultCellProperties = { Padding = new Thickness(padding) },
            LayoutType = TableLayoutType.FixedWidth,
        };
        table.Borders = new TableBorders(border);

        var header = table.Rows.AddTableRow();
        header.BasicCell("Equity Distribution", true, ReportBuilder.HeaderColor, HorizontalAlignment.Left, 2);

        var assetEquity = table.Rows.AddTableRow();
        assetEquity.BasicCell("Asset Mgr Equity", false);
        assetEquity.BasicCell(property.OurEquityOfCF.ToString("P2"), false);

        var investorEquity = table.Rows.AddTableRow();
        investorEquity.BasicCell("Investor Equity", false, ReportBuilder.PrimaryColor);
        investorEquity.BasicCell((1 - property.OurEquityOfCF).ToString("P2"), false, ReportBuilder.PrimaryColor);

        editor.Position.Translate(page.Size.Width / 2 - width / 2 + 170, 120);
        editor.DrawTable(table, new Size(width, double.PositiveInfinity));
    }

    private static void ReversionTable(RadFixedPage page,
                                      FixedContentEditor editor,
                                      UnderwritingAnalysis property,
                                      Border border,
                                      double width,
                                      double padding = 20,
                                      double headerSize = 18)
    {
        var table = new Table
        {
            DefaultCellProperties = { Padding = new Thickness(padding) },
            LayoutType = TableLayoutType.FixedWidth,
        };
        table.Borders = new TableBorders(border);

        var header = table.Rows.AddTableRow();
        header.BasicCell("Reversion", true, ReportBuilder.HeaderColor, HorizontalAlignment.Left, 2);

        var capRate = table.Rows.AddTableRow();
        capRate.BasicCell("Reversion Cap Rate", false);
        capRate.BasicCell(property.ReversionCapRate.ToString("P2"), false);

        var commission = table.Rows.AddTableRow();
        commission.BasicCell("Commission", false, ReportBuilder.PrimaryColor);
        commission.BasicCell(" - ", false, ReportBuilder.PrimaryColor, HorizontalAlignment.Center); // TODO : Add Commission

        var reversionTransferTax = table.Rows.AddTableRow();
        reversionTransferTax.BasicCell("Transfer Tax", false);
        reversionTransferTax.BasicCell(" - ", false, null, HorizontalAlignment.Center); // TODO : Add Transfer Tax

        editor.Position.Translate(page.Size.Width - width - ReportBuilder.PageMargin, 120);
        editor.DrawTable(table, new Size(width, double.PositiveInfinity));
    }

    private static void EquityTable(RadFixedPage page,
                                    FixedContentEditor editor,
                                    UnderwritingAnalysis property,
                                    Border border,
                                    double width,
                                    double padding = 20,
                                    double headerSize = 18)
    {
        var asr = new AssumptionsReport(property);
        var table = new Table
        {
            DefaultCellProperties = { Padding = new Thickness(padding) },
            LayoutType = TableLayoutType.FixedWidth,
        };
        table.Borders = new TableBorders(border);

        var header = table.Rows.AddTableRow();
        var headerTitle = header.Cells.AddTableCell();
        headerTitle.ColumnSpan = 2;
        headerTitle.Background = ReportBuilder.HeaderColor;
        headerTitle.PreferredWidth = width;
        var headerTitleBlock = new Block { TextProperties = { Font = FontsRepository.HelveticaBold } };
        headerTitleBlock.InsertText("Equity (Acqusition costs)");
        headerTitle.Blocks.Add(headerTitleBlock);

        var closingCosts = table.Rows.AddTableRow();
        closingCosts.BasicCell("Closing Costs", false);
        closingCosts.BasicCell(asr.ClosingCosts.ToString("C2"), false);

        var loanPoints = table.Rows.AddTableRow();
        loanPoints.BasicCell("Loan Points", false, ReportBuilder.PrimaryColor);
        loanPoints.BasicCell(asr.LoanPoints.ToString("C2"), false, ReportBuilder.PrimaryColor);

        var acquisitionFee = table.Rows.AddTableRow();
        acquisitionFee.BasicCell("Aquisition Fee", false);
        acquisitionFee.BasicCell(property.AquisitionFee.ToString("C2"), false);

        var totalClosingCosts = table.Rows.AddTableRow();
        totalClosingCosts.BasicCell("Total Closing Costs", false, ReportBuilder.PrimaryColor);
        totalClosingCosts.BasicCell((property.AquisitionFee + asr.ClosingCosts + asr.LoanPoints).ToString("C2"), false, ReportBuilder.PrimaryColor);

        var downPaymentPercentage = table.Rows.AddTableRow();
        downPaymentPercentage.BasicCell("Down Payment", false);
        downPaymentPercentage.BasicCell(asr.DownpaymentPercentage.ToString("P2"), false);

        var downPayment = table.Rows.AddTableRow();
        downPayment.BasicCell("Down Payment", false, ReportBuilder.PrimaryColor);
        downPayment.BasicCell(asr.Downpayment.ToString("C2"), false, ReportBuilder.PrimaryColor);

        var insurancePremium = table.Rows.AddTableRow();
        insurancePremium.BasicCell("Insurance Premium", false);
        insurancePremium.BasicCell(asr.InsurancePremium.ToString("C2"), false);

        var intialCapitalImprovements = table.Rows.AddTableRow();
        intialCapitalImprovements.BasicCell("Initial Capital Improvements (see breakdown below)", false, ReportBuilder.PrimaryColor);
        intialCapitalImprovements.BasicCell(asr.CapitalImprovementsBreakDown.Sum(x => x.Value).ToString("C2"), false, ReportBuilder.PrimaryColor);

        var totalEquityAcqusitionCosts = table.Rows.AddTableRow();
        totalEquityAcqusitionCosts.BasicCell("Total Acqusition Costs", true);
        totalEquityAcqusitionCosts.BasicCell(asr.TotalEquity.ToString("C2"), true);

        editor.Position.Translate(ReportBuilder.PageMargin, 120);
        editor.DrawTable(table, new Size(width - 100, double.PositiveInfinity));
    }

    private static void CashFlowTable(RadFixedPage page,
                                      FixedContentEditor editor,
                                      UnderwritingAnalysis property,
                                      Border border,
                                      double width,
                                      double padding = 20,
                                      double headerSize = 18)
    {
        var table = new Table
        {
            DefaultCellProperties = { Padding = new Thickness(padding) },
            LayoutType = TableLayoutType.FixedWidth,
        };
        table.Borders = new TableBorders(border);

        var title = table.Rows.AddTableRow();
        title.BasicCell("Cash Flow", true, ReportBuilder.HeaderColor, HorizontalAlignment.Left);
        title.BasicCell("Per Year", false, ReportBuilder.HeaderColor);

        var rentAbatement = table.Rows.AddTableRow();
        rentAbatement.BasicCell("Rent Abatement", false);
        rentAbatement.BasicCell(" - ", false, null, HorizontalAlignment.Center); // TODO : Add Rent Abatement

        var reimbursementIncome = table.Rows.AddTableRow();
        reimbursementIncome.BasicCell("Annual Adjustment to Expense Reimbursement Income", false, ReportBuilder.PrimaryColor);
        reimbursementIncome.BasicCell(" - ", false, ReportBuilder.PrimaryColor, HorizontalAlignment.Center); // TODO : Add Reimbursement Income


        var generalMinimumVacany = table.Rows.AddTableRow();
        generalMinimumVacany.BasicCell("General Minimum Vacancy", false);
        generalMinimumVacany.BasicCell(" - ", false, null, HorizontalAlignment.Center); // TODO : Add General Minimum Vacancy

        var taxAdustments = table.Rows.AddTableRow();
        taxAdustments.BasicCell("Annual Tax Adustment", false, ReportBuilder.PrimaryColor);
        taxAdustments.BasicCell(" - ", false, ReportBuilder.PrimaryColor, HorizontalAlignment.Center); // TODO : Add Tax Adjustments

        var expenseAdjustments = table.Rows.AddTableRow();
        expenseAdjustments.BasicCell("Annual Expense Adjustment", false);
        expenseAdjustments.BasicCell(" - ", false, null, HorizontalAlignment.Center); // TODO : Add Expense Adjustments

        var capitalReserveAdustment = table.Rows.AddTableRow();
        capitalReserveAdustment.BasicCell("Annual Additional Capital Reserve Adjustment", false, ReportBuilder.PrimaryColor);
        capitalReserveAdustment.BasicCell(" - ", false, ReportBuilder.PrimaryColor, HorizontalAlignment.Center); // TODO : Add Capital Reserve Adjustments

        editor.Position.Translate(page.Size.Width - width - ReportBuilder.PageMargin - 180, 230);
        editor.DrawTable(table, new Size(width + 180, double.PositiveInfinity));
    }

    private static void PrimaryTable(RadFixedPage page,
                                     FixedContentEditor editor,
                                     UnderwritingAnalysis property,
                                     Border border,
                                     double width,
                                     double padding = 20,
                                     double headerSize = 18)
    {
        var table = new Table
        {
            DefaultCellProperties = { Padding = new Thickness(padding) },
            LayoutType = TableLayoutType.FixedWidth,
        };
        table.Borders = new TableBorders(border);

        var debtAcqusitionCostsTitle = table.Rows.AddTableRow();

        var debtAcqusitionCostsTitleHeader = debtAcqusitionCostsTitle.Cells.AddTableCell();
        debtAcqusitionCostsTitleHeader.PreferredWidth = width / 2 + 20;
        debtAcqusitionCostsTitleHeader.Background = ReportBuilder.HeaderColor;
        var debtAcqusitionCostsTitleHeaderBlock = new Block { TextProperties = { Font = FontsRepository.HelveticaBold } };
        debtAcqusitionCostsTitleHeaderBlock.InsertText("Primary Debt (Aqusition)");
        debtAcqusitionCostsTitleHeader.Blocks.Add(debtAcqusitionCostsTitleHeaderBlock);
        var debtAcqusitionCostsTitleHeaderCell = debtAcqusitionCostsTitle.Cells.AddTableCell();
        debtAcqusitionCostsTitleHeaderCell.Background = ReportBuilder.HeaderColor;
        var debtAcqusitionCostsTitleHeaderCellBlock = new Block();
        debtAcqusitionCostsTitleHeaderCell.Blocks.Add(debtAcqusitionCostsTitleHeaderCellBlock);

        var typeOfLoan = table.Rows.AddTableRow();
        typeOfLoan.BasicCell("Type of Loan", false);
        typeOfLoan.BasicCell(property.LoanType.ToString(), false);

        var financedCapitalImprovements = table.Rows.AddTableRow();
        financedCapitalImprovements.BasicCell("Intial Capital Improvements (Financed)", false, ReportBuilder.PrimaryColor);
        financedCapitalImprovements.BasicCell(" - ", false, ReportBuilder.PrimaryColor, HorizontalAlignment.Center); // TODO : Add Financed Capital Improvements

        var loanAmount = table.Rows.AddTableRow();
        loanAmount.BasicCell("Loan Amount", false);
        loanAmount.BasicCell(property.Mortgages.Sum(x => x.LoanAmount).ToString("C2"), false);

        var totalLoanAmount = table.Rows.AddTableRow();
        totalLoanAmount.BasicCell("Total Loan Amount", false, ReportBuilder.PrimaryColor);
        totalLoanAmount.BasicCell(property.Mortgages.Sum(x => x.LoanAmount).ToString("C2"), false, ReportBuilder.PrimaryColor);

        var loanToValue = table.Rows.AddTableRow();
        loanToValue.BasicCell("Loan to Value", false);
        loanToValue.BasicCell(property.LTV.ToString("P2"), false);

        var interestOnlyPeriod = table.Rows.AddTableRow();
        interestOnlyPeriod.BasicCell("Interest Only Period", false, ReportBuilder.PrimaryColor);
        interestOnlyPeriod.BasicCell(" - ", false, ReportBuilder.PrimaryColor, HorizontalAlignment.Center); // TODO : Add Interest Only Period

        var interestRate = table.Rows.AddTableRow();
        interestRate.BasicCell("Interest Rate", false);
        interestRate.BasicCell(property.Mortgages.Sum(x => x.InterestRate).ToString("P2"), false);

        var amortization = table.Rows.AddTableRow();
        amortization.BasicCell("Amortization", false, ReportBuilder.PrimaryColor);
        amortization.BasicCell(" - ", false, ReportBuilder.PrimaryColor, HorizontalAlignment.Center); // TODO : Add Amortization

        var term = table.Rows.AddTableRow();
        term.BasicCell("Term", false);
        term.BasicCell(property.Mortgages.Sum(x => x.TermInYears).ToString() + " Years", false);

        var debtServiceMonth = table.Rows.AddTableRow();
        debtServiceMonth.BasicCell("Debt Service / Month", false, ReportBuilder.PrimaryColor);
        debtServiceMonth.BasicCell((property.Mortgages.Sum(x => x.AnnualDebtService) / 12).ToString("C2"), false, ReportBuilder.PrimaryColor);

        var debtServiceYear = table.Rows.AddTableRow();
        debtServiceYear.BasicCell("Debt Service / Year", false);
        debtServiceYear.BasicCell(property.Mortgages.Sum(x => x.AnnualDebtService).ToString("C2"), false);

        editor.Position.Translate(ReportBuilder.PageMargin + 5, 400);
        editor.DrawTable(table, new Size(width, double.PositiveInfinity));
    }

    private static void SupplementalTable(RadFixedPage page,
                                           FixedContentEditor editor,
                                           UnderwritingAnalysis property,
                                           Border border,
                                           double width,
                                           double padding = 20,
                                           double headerSize = 18)
    {
        var table = new Table
        {
            DefaultCellProperties = { Padding = new Thickness(padding) },
            LayoutType = TableLayoutType.FixedWidth,
        };
        table.Borders = new TableBorders(border);

        var debtAcqusitionCostsTitle = table.Rows.AddTableRow();
        var debtAcqusitionCostsTitleHeader = debtAcqusitionCostsTitle.Cells.AddTableCell();
        debtAcqusitionCostsTitleHeader.PreferredWidth = width / 2 + 20;
        debtAcqusitionCostsTitleHeader.Background = ReportBuilder.HeaderColor;
        var debtAcqusitionCostsTitleHeaderBlock = new Block { TextProperties = { Font = FontsRepository.HelveticaBold } };
        debtAcqusitionCostsTitleHeaderBlock.InsertText("Supplemental Debt (Aqusition)");
        debtAcqusitionCostsTitleHeader.Blocks.Add(debtAcqusitionCostsTitleHeaderBlock);
        var debtAcqusitionCostsTitleHeaderCell = debtAcqusitionCostsTitle.Cells.AddTableCell();
        debtAcqusitionCostsTitleHeaderCell.Background = ReportBuilder.HeaderColor;
        var debtAcqusitionCostsTitleHeaderCellBlock = new Block();
        debtAcqusitionCostsTitleHeaderCell.Blocks.Add(debtAcqusitionCostsTitleHeaderCellBlock);

        var loanCost = table.Rows.AddTableRow();
        loanCost.BasicCell("Loan Cost (Financed)", false);
        loanCost.BasicCell(" - ", false, null, HorizontalAlignment.Center); // TODO : Add Loan Cost Supplemental

        var adddedCapitalImprovements = table.Rows.AddTableRow();
        adddedCapitalImprovements.BasicCell("Added Capital Improvements (Financed)", false, ReportBuilder.PrimaryColor);
        adddedCapitalImprovements.BasicCell(" - ", false, ReportBuilder.PrimaryColor, HorizontalAlignment.Center); // TODO : Add Added Capital Improvements Supplemental

        var loanAmount = table.Rows.AddTableRow();
        loanAmount.BasicCell("Loan Amount", false);
        loanAmount.BasicCell(" - ", false, null, HorizontalAlignment.Center); // TODO : Add Loan Amount Supplemental

        var totalLoanAmount = table.Rows.AddTableRow();
        totalLoanAmount.BasicCell("Total Loan Amount", false, ReportBuilder.PrimaryColor);
        totalLoanAmount.BasicCell(" - ", false, ReportBuilder.PrimaryColor, HorizontalAlignment.Center); // TODO : Add Total Loan Amount Supplemental

        var loanToValue = table.Rows.AddTableRow();
        loanToValue.BasicCell("Loan to Value", false);
        loanToValue.BasicCell(" - ", false, null, HorizontalAlignment.Center); // TODO : Add Loan to Value Supplemental

        var interestOnlyPeriod = table.Rows.AddTableRow();
        interestOnlyPeriod.BasicCell("Interest Only Period", false, ReportBuilder.PrimaryColor);
        interestOnlyPeriod.BasicCell(" - ", false, ReportBuilder.PrimaryColor, HorizontalAlignment.Center); // TODO : Add Interest Only Period Supplemental

        var interestRate = table.Rows.AddTableRow();
        interestRate.BasicCell("Interest Rate", false);
        interestRate.BasicCell(" - ", false, null, HorizontalAlignment.Center); // TODO : Add Interest Rate Supplemental

        var amortization = table.Rows.AddTableRow();
        amortization.BasicCell("Amortization", false, ReportBuilder.PrimaryColor);
        amortization.BasicCell(" - ", false, ReportBuilder.PrimaryColor, HorizontalAlignment.Center); // TODO : Add Amortization Supplemental

        var term = table.Rows.AddTableRow();
        term.BasicCell("Term", false);
        term.BasicCell(" - ", false, null, HorizontalAlignment.Center); // TODO : Add Term Supplemental

        var debtServiceMonth = table.Rows.AddTableRow();
        debtServiceMonth.BasicCell("Debt Service / Month", false, ReportBuilder.PrimaryColor);
        debtServiceMonth.BasicCell(" - ", false, ReportBuilder.PrimaryColor, HorizontalAlignment.Center); // TODO : Add Debt Service / Month Supplemental

        var debtServiceYear = table.Rows.AddTableRow();
        debtServiceYear.BasicCell("Debt Service / Year", false);
        debtServiceYear.BasicCell(" - ", false, null, HorizontalAlignment.Center); // TODO : Add Debt Service / Year Supplemental

        editor.Position.Translate(width + ReportBuilder.PageMargin + 45, 400);
        editor.DrawTable(table, new Size(width, double.PositiveInfinity));
    }

    private static void RefinanceTable(RadFixedPage page,
                                       FixedContentEditor editor,
                                       UnderwritingAnalysis property,
                                       Border border,
                                       double width,
                                       double padding = 20,
                                       double headerSize = 18)
    {
        var table = new Table
        {
            DefaultCellProperties = { Padding = new Thickness(padding) },
            LayoutType = TableLayoutType.FixedWidth,
        };
        table.Borders = new TableBorders(border);

        var title = table.Rows.AddTableRow();
        var titleHeader = title.Cells.AddTableCell();
        titleHeader.PreferredWidth = width / 2 + 20;
        titleHeader.Background = ReportBuilder.HeaderColor;
        var titleHeaderBlock = new Block { TextProperties = { Font = FontsRepository.HelveticaBold } };
        titleHeaderBlock.InsertText("Refinance");
        titleHeader.Blocks.Add(titleHeaderBlock);
        var titleCell = title.Cells.AddTableCell();
        titleCell.Background = ReportBuilder.HeaderColor;
        var titleCellBlock = new Block();
        titleCell.Blocks.Add(titleCellBlock);

        var loanStartDate = table.Rows.AddTableRow();
        loanStartDate.BasicCell("Loan Start Date", false);
        loanStartDate.BasicCell(" - ", false, null, HorizontalAlignment.Center); // TODO : Add Loan Start Date

        var financedImprovements = table.Rows.AddTableRow();
        financedImprovements.BasicCell("Capital Improvements (Financed)", false, ReportBuilder.PrimaryColor);
        financedImprovements.BasicCell(" - ", false, ReportBuilder.PrimaryColor, HorizontalAlignment.Center); // TODO : Add Financed Capital Improvements Refinance

        var loanCosts = table.Rows.AddTableRow();
        loanCosts.BasicCell("Loan Cost (Financed)", false);
        loanCosts.BasicCell(" - ", false, null, HorizontalAlignment.Center); // TODO : Add Loan Cost Refinance

        var loanAmount = table.Rows.AddTableRow();
        loanAmount.BasicCell("Loan Amount", false, ReportBuilder.PrimaryColor);
        loanAmount.BasicCell(" - ", false, ReportBuilder.PrimaryColor, HorizontalAlignment.Center); // TODO : Add Loan Amount Refinance

        var totalLoanAmount = table.Rows.AddTableRow();
        totalLoanAmount.BasicCell("Total Loan Amount", false);
        totalLoanAmount.BasicCell(" - ", false, null, HorizontalAlignment.Center); // TODO : Add Total Loan Amount Refinance

        var loanToValue = table.Rows.AddTableRow();
        loanToValue.BasicCell("Loan to Value", false, ReportBuilder.PrimaryColor);
        loanToValue.BasicCell(" - ", false, ReportBuilder.PrimaryColor, HorizontalAlignment.Center); // TODO : Add Loan to Value Refinance

        var interestRate = table.Rows.AddTableRow();
        interestRate.BasicCell("Interest Rate", false);
        interestRate.BasicCell(" - ", false, null, HorizontalAlignment.Center); // TODO : Add Interest Rate Refinance

        var amortization = table.Rows.AddTableRow();
        amortization.BasicCell("Amortization", false, ReportBuilder.PrimaryColor);
        amortization.BasicCell(" - ", false, ReportBuilder.PrimaryColor, HorizontalAlignment.Center); // TODO : Add Amortization Refinance

        var term = table.Rows.AddTableRow();
        term.BasicCell("Term", false);
        term.BasicCell(" - ", false, null, HorizontalAlignment.Center); // TODO : Add Term Refinance

        var debtServiceMonth = table.Rows.AddTableRow();
        debtServiceMonth.BasicCell("Debt Service / Month", false, ReportBuilder.PrimaryColor);
        debtServiceMonth.BasicCell(" - ", false, ReportBuilder.PrimaryColor, HorizontalAlignment.Center); // TODO : Add Debt Service / Month Refinance

        var debtServiceYear = table.Rows.AddTableRow();
        debtServiceYear.BasicCell("Debt Service / Year", false);
        debtServiceYear.BasicCell(" - ", false, null, HorizontalAlignment.Center); // TODO : Add Debt Service / Year Refinance

        editor.Position.Translate(page.Size.Width - width - ReportBuilder.PageMargin - 5, 400);
        editor.DrawTable(table, new Size(width, double.PositiveInfinity));
    }
}