using MultiFamilyPortal.Dtos.Underwriting;
using MultiFamilyPortal.Dtos.Underwriting.Reports;
using Telerik.Documents.Primitives;
using Telerik.Windows.Documents.Fixed.Model;
using Telerik.Windows.Documents.Fixed.Model.ColorSpaces;
using Telerik.Windows.Documents.Fixed.Model.Editing;
using Telerik.Windows.Documents.Fixed.Model.Editing.Flow;
using Telerik.Windows.Documents.Fixed.Model.Editing.Tables;
using Telerik.Windows.Documents.Fixed.Model.Fonts;

namespace MultiFamilyPortal.Helpers.Reports;

public static class GenerateDealSummaryBuilder
{
    public static void GenerateDealSummary(UnderwritingAnalysis property, RadFixedDocument document)
    {
        var page = document.Pages.AddPage();

        var editor = new FixedContentEditor(page);
        page.Size = ReportBuilder.LetterSizeHorizontal;

        var pageOneTableWidth = page.Size.Width - 2 * ReportBuilder.PageMargin - 400;
        var pageTwoTableWidth = page.Size.Width / 2 - 2 * ReportBuilder.PageMargin;
        var tableWidth = page.Size.Width / 3 - 60;
        var blackBorder = new Border(1, ReportBuilder.DarkColor);
        var cellPadding = 5;

        ReportBuilder.Header(page, "Deal Summary");

        BasicAssumptionsTable(editor, blackBorder, property, cellPadding);
        ProjectedPerformanceTable(editor, blackBorder, property, page.Size.Width * 1 / 2, cellPadding);
        CashFlowsTable(editor, blackBorder, property, cellPadding);

        ReportBuilder.Footer(page, property.Name);
    }

    private static void BasicAssumptionsTable(FixedContentEditor editor, Border border, UnderwritingAnalysis property, double padding = 22)
    {
        var table = new Table
        {
            DefaultCellProperties = { Padding = new Thickness(padding, padding + 16, padding, padding + 16) },
            LayoutType = TableLayoutType.FixedWidth,
            Borders = new TableBorders(border)
        };

        BasicAssumptionsHeader(table);
        StartDateRow(table, property);
        DesiredYieldRow(table, property);
        HoldYearsRow(table, property);

        editor.Position.Translate(ReportBuilder.PageMargin, 120);
        editor.DrawTable(table, new Size(240, double.PositiveInfinity));
    }

    private static void ProjectedPerformanceTable(FixedContentEditor editor, Border border, UnderwritingAnalysis property, double widthStart, double padding = 22)
    {
        var projectedPerformanceTable = new Table
        {
            DefaultCellProperties = { Padding = new Thickness(padding) },
            LayoutType = TableLayoutType.FixedWidth,
            Borders = new TableBorders(border)
        };

        ProjectedPerformanceHeader(projectedPerformanceTable);
        ProjectedPerformanceHeaderTwo(projectedPerformanceTable);
        ProjectedPerformancePrice(projectedPerformanceTable, property);
        ProjectedPerformanceUnits(projectedPerformanceTable, property);
        ProjectedPerformancePricePerUnit(projectedPerformanceTable, property);
        ProjectedPerformanceYearBuilt(projectedPerformanceTable, property);
        ProjectedPerformanceActualCapRate(projectedPerformanceTable, property);
        ProjectedPerformanceActualPDSCR(projectedPerformanceTable, property);
        ProjectedPerformancePCoC(projectedPerformanceTable, property);

        editor.Position.Translate(300, 120);
        editor.DrawTable(projectedPerformanceTable, new Size(ReportBuilder.LetterSizeHorizontal.Width - 300 - ReportBuilder.PageMargin, double.PositiveInfinity));
    }

    private static void CashFlowsTable(FixedContentEditor editor, Border border, UnderwritingAnalysis property, double padding = 22)
    {
        var scheduledRentYear0 = property.Projections.Select(x => x.GrossScheduledRent).FirstOrDefault();
        var scheduledRentYear1 = property.Projections.Select(x => x.GrossScheduledRent).ToList()[1];
        scheduledRentYear0 = Math.Abs(scheduledRentYear0) == 0 ? 1 : scheduledRentYear0;
        scheduledRentYear1 = Math.Abs(scheduledRentYear1) == 0 ? 1 : scheduledRentYear1;
        var numberOfUnits = property.Units;
        var lineBorder = new TableCellBorders(new Border(1, new RgbColor(100, 100, 100)), null, null, null);

        var table = new Table
        {
            DefaultCellProperties = { Padding = new Thickness(padding) },
            LayoutType = TableLayoutType.FixedWidth,
            Borders = new TableBorders(border)
        };

        CashFlowHeaderOne(table);
        CashFlowHeaderTwo(table, lineBorder);
        Rent(table, lineBorder, scheduledRentYear0, scheduledRentYear1, numberOfUnits);
        Vacancy(table, lineBorder, property, scheduledRentYear0, scheduledRentYear1, numberOfUnits);
        OtherLosses(table, lineBorder, property, scheduledRentYear0, scheduledRentYear1, numberOfUnits);
        UtilitiesIncome(table, lineBorder, property, scheduledRentYear0, scheduledRentYear1, numberOfUnits);
        OtherIncome(table, lineBorder, property, scheduledRentYear0, scheduledRentYear1, numberOfUnits);
        TotalEffectiveIncome(table, lineBorder, property, scheduledRentYear0, scheduledRentYear1, numberOfUnits);
        OperatingExpenses(table, lineBorder, property, scheduledRentYear0, scheduledRentYear1, numberOfUnits);
        NOI(table, lineBorder, property, scheduledRentYear0, scheduledRentYear1, numberOfUnits);
        CapitalReserves(table, lineBorder, property, scheduledRentYear0, scheduledRentYear1, numberOfUnits);
        CFBeforeDebtService(table, lineBorder, property, scheduledRentYear0, scheduledRentYear1, numberOfUnits);
        AnnualDebtService(table, lineBorder, property, scheduledRentYear0, scheduledRentYear1, numberOfUnits);
        CashFlowBeforeTaxes(table, lineBorder, property, scheduledRentYear0, scheduledRentYear1, numberOfUnits);

        editor.Position.Translate(ReportBuilder.PageMargin, 380);
        editor.DrawTable(table, new Size(ReportBuilder.LetterSizeHorizontal.Width - 2 * ReportBuilder.PageMargin, double.PositiveInfinity));
    }

    #region Basic Assumptions Rows
    private static void BasicAssumptionsHeader(Table table)
    {
        table.Rows.AddTableRow().BasicCell("Basic Assumptions", true, ReportBuilder.HeaderColor, HorizontalAlignment.Center, 2);
    }

    private static void StartDateRow(Table table, UnderwritingAnalysis property)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Start Date", true, ReportBuilder.PrimaryColor);
        row.BasicCell(property.StartDate.ToString("MM/dd/yyyy"), false, ReportBuilder.PrimaryColor);
    }

    private static void DesiredYieldRow(Table table, UnderwritingAnalysis property)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Desired Yield", true);
        row.BasicCell(property.DesiredYield.ToString("P2"), false);
    }

    private static void HoldYearsRow(Table table, UnderwritingAnalysis property)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Hold Period", true, ReportBuilder.PrimaryColor);
        row.BasicCell(property.HoldYears.ToString() + " years", false, ReportBuilder.PrimaryColor);
    }
    # endregion

    # region Projected Performance Rows
    private static void ProjectedPerformanceHeader(Table table)
    {
        table.Rows.AddTableRow().BasicCell("Projected Performance", true, ReportBuilder.HeaderColor, HorizontalAlignment.Center, 4);
    }

    private static void ProjectedPerformanceHeaderTwo(Table table)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Purchase", true, ReportBuilder.SecondaryColor, HorizontalAlignment.Center, 2);
        row.BasicCell("Sale", true, ReportBuilder.SecondaryColor, HorizontalAlignment.Center, 2);
    }

    private static void ProjectedPerformancePrice(Table table, UnderwritingAnalysis property)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Price", true, ReportBuilder.PrimaryColor);
        row.BasicCell(property.PurchasePrice.ToString("C2"), false, ReportBuilder.PrimaryColor);
        row.BasicCell("Reversion Value", true, ReportBuilder.PrimaryColor);
        row.BasicCell(property.Reversion.ToString("C2"), false, ReportBuilder.PrimaryColor);
    }

    private static void ProjectedPerformanceUnits(Table table, UnderwritingAnalysis property)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("# of Units", true);
        row.BasicCell(property.Units.ToString());
        row.BasicCell("Reversion Cap Rate", true);
        row.BasicCell(property.ReversionCapRate.ToString("P2"));
    }

    private static void ProjectedPerformancePricePerUnit(Table table, UnderwritingAnalysis property)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Price Per Unit", true, ReportBuilder.PrimaryColor);
        row.BasicCell(property.CostPerUnit.ToString("C2"), false, ReportBuilder.PrimaryColor);
        row.BasicCell("LTV", true, ReportBuilder.PrimaryColor);
        row.BasicCell(property.LTV.ToString("P2"), false, ReportBuilder.PrimaryColor);
    }

    private static void ProjectedPerformanceYearBuilt(Table table, UnderwritingAnalysis property)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Year Built", true);
        row.BasicCell(property.Vintage.ToString());
        row.BasicCell("NPV", true);
        row.BasicCell(property.NetPresentValue.ToString("C2"));
    }

    private static void ProjectedPerformanceActualCapRate(Table table, UnderwritingAnalysis property)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Actual Cap Rate", true, ReportBuilder.PrimaryColor);
        row.BasicCell(property.CapRate.ToString("P2"), false, ReportBuilder.PrimaryColor);
        row.BasicCell("IRR", true, ReportBuilder.PrimaryColor);
        row.BasicCell(property.InternalRateOfReturn.ToString("P2"), false, ReportBuilder.PrimaryColor);
    }

    private static void ProjectedPerformanceActualPDSCR(Table table, UnderwritingAnalysis property)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Purchase PDSCR", true);
        row.BasicCell(property.DebtCoverage.ToString("N2"));
        row.BasicCell("CoC Return", true);
        row.BasicCell(new DealSummaryReport(property).OurEquityPartnerCoC.ToString("P2"));
    }

    private static void ProjectedPerformancePCoC(Table table, UnderwritingAnalysis property)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Purchase CoC Return", true, ReportBuilder.PrimaryColor);
        row.BasicCell(property.CashOnCash.ToString("P2"), false, ReportBuilder.PrimaryColor);
        row.BasicCell("Total Return", true, ReportBuilder.PrimaryColor);
        row.BasicCell("0.00%", false, ReportBuilder.PrimaryColor); // TODO: Calculate this total Return
    }

    #endregion

    #region Cash Flows Rows
    private static void CashFlowHeaderOne(Table table)
    {
        table.Rows.AddTableRow().BasicCell("Cash Flow", true, ReportBuilder.HeaderColor, HorizontalAlignment.Center, 7);
    }

    private static void CashFlowHeaderTwo(Table table, TableCellBorders lineBorder)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("", true, ReportBuilder.HeaderColor);
        row.BasicCell("Stated In Place", true, ReportBuilder.SecondaryColor);
        row.BasicCell("Per Unit", true, ReportBuilder.SecondaryColor);
        row.BasicCell("% of ASR", true, ReportBuilder.SecondaryColor);

        var cashFlowHeaderSevenTitle = row.Cells.AddTableCell();
        cashFlowHeaderSevenTitle.Borders = lineBorder;
        cashFlowHeaderSevenTitle.Background = ReportBuilder.TertiaryColor;
        var cashFlowHeaderSevenTitleBlock = new Block
        {
            TextProperties = { Font = FontsRepository.HelveticaBold },
            HorizontalAlignment = HorizontalAlignment.Right
        };
        cashFlowHeaderSevenTitleBlock.InsertText("Year 1");
        cashFlowHeaderSevenTitle.Blocks.Add(cashFlowHeaderSevenTitleBlock);

        row.BasicCell("Per Unit", true, ReportBuilder.TertiaryColor);
        row.BasicCell("% of ASR", true, ReportBuilder.TertiaryColor);
    }

    private static void Rent(Table table, TableCellBorders lineBorder, double scheduledRentYear0, double scheduledRentYear1, int numberOfUnits)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Actual Scheduled Rents (ASR) @ 100%", true);
        row.BasicCell(scheduledRentYear0.ToString("C2"), true, ReportBuilder.PrimaryColor);
        row.BasicCell((scheduledRentYear0 / numberOfUnits).ToString("C2"), true, ReportBuilder.PrimaryColor);
        row.BasicCell((scheduledRentYear0 / scheduledRentYear0).ToString("P2"), true, ReportBuilder.PrimaryColor);

        var rentYear1 = row.Cells.AddTableCell();
        rentYear1.Borders = lineBorder;
        rentYear1.Background = ReportBuilder.PrimaryColor;
        var rentYear1Block = new Block
        {
            TextProperties = { Font = FontsRepository.HelveticaBold },
            HorizontalAlignment = HorizontalAlignment.Right
        };
        rentYear1Block.InsertText(scheduledRentYear1.ToString("C2"));
        rentYear1.Blocks.Add(rentYear1Block);

        row.BasicCell((scheduledRentYear1 / numberOfUnits).ToString("C2"), true, ReportBuilder.PrimaryColor);
        row.BasicCell((scheduledRentYear1 / scheduledRentYear1).ToString("P2"), true, ReportBuilder.PrimaryColor);
    }

    private static void Vacancy(Table table, TableCellBorders lineBorder, UnderwritingAnalysis property, double scheduledRentYear0, double scheduledRentYear1, int numberOfUnits)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("less Vacancy");
        row.BasicCell(property.Projections.Select(x => x.Vacancy).FirstOrDefault().ToString("C2"));
        row.BasicCell((property.Projections.Select(x => x.Vacancy).FirstOrDefault() / numberOfUnits).ToString("C2"));
        row.BasicCell((property.Projections.Select(x => x.Vacancy).FirstOrDefault() / scheduledRentYear0).ToString("P2"));

        var vacancyYear1 = row.Cells.AddTableCell();
        vacancyYear1.Borders = lineBorder;
        var vacancyYear1Block = new Block
        {
            HorizontalAlignment = HorizontalAlignment.Right
        };
        vacancyYear1Block.InsertText(property.Projections.Select(x => x.Vacancy).Skip(1).FirstOrDefault().ToString("C2"));
        vacancyYear1.Blocks.Add(vacancyYear1Block);

        row.BasicCell((property.Projections.Select(x => x.Vacancy).Skip(1).FirstOrDefault() / numberOfUnits).ToString("C2"));
        row.BasicCell((property.Projections.Select(x => x.Vacancy).Skip(1).FirstOrDefault() / scheduledRentYear1).ToString("P2"));
    }

    private static void OtherLosses(Table table, TableCellBorders lineBorder, UnderwritingAnalysis property, double scheduledRentYear0, double scheduledRentYear1, int numberOfUnits)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("less Other Losses");
        row.BasicCell(property.Projections.Select(x => x.ConcessionsNonPayment).FirstOrDefault().ToString("C2"), false, ReportBuilder.PrimaryColor);
        row.BasicCell((property.Projections.Select(x => x.ConcessionsNonPayment).FirstOrDefault() / numberOfUnits).ToString("C2"), false, ReportBuilder.PrimaryColor);
        row.BasicCell((property.Projections.Select(x => x.ConcessionsNonPayment).FirstOrDefault() / scheduledRentYear0).ToString("P2"), false, ReportBuilder.PrimaryColor);

        var otherLossesYear1 = row.Cells.AddTableCell();
        otherLossesYear1.Borders = lineBorder;
        otherLossesYear1.Background = ReportBuilder.PrimaryColor;
        var otherLossesYear1Block = new Block
        {
            HorizontalAlignment = HorizontalAlignment.Right
        };
        otherLossesYear1Block.InsertText(property.Projections.Select(x => x.ConcessionsNonPayment).Skip(1).FirstOrDefault().ToString("C2"));
        otherLossesYear1.Blocks.Add(otherLossesYear1Block);

        row.BasicCell((property.Projections.Select(x => x.ConcessionsNonPayment).Skip(1).FirstOrDefault() / numberOfUnits).ToString("C2"), false, ReportBuilder.PrimaryColor);
        row.BasicCell((property.Projections.Select(x => x.ConcessionsNonPayment).Skip(1).FirstOrDefault() / scheduledRentYear1).ToString("P2"), false, ReportBuilder.PrimaryColor);
    }

    private static void UtilitiesIncome(Table table, TableCellBorders lineBorder, UnderwritingAnalysis property, double scheduledRentYear0, double scheduledRentYear1, int numberOfUnits)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("plus Utilities Income");
        row.BasicCell(property.Projections.Select(x => x.UtilityReimbursement).FirstOrDefault().ToString("C2"));
        row.BasicCell((property.Projections.Select(x => x.UtilityReimbursement).FirstOrDefault() / numberOfUnits).ToString("C2"));
        row.BasicCell((property.Projections.Select(x => x.UtilityReimbursement).FirstOrDefault() / scheduledRentYear0).ToString("P2"));

        var utilitiesIncomeYear1 = row.Cells.AddTableCell();
        utilitiesIncomeYear1.Borders = lineBorder;
        var utilitiesIncomeYear1Block = new Block
        {
            HorizontalAlignment = HorizontalAlignment.Right
        };
        utilitiesIncomeYear1Block.InsertText(property.Projections.Select(x => x.UtilityReimbursement).Skip(1).FirstOrDefault().ToString("C2"));
        utilitiesIncomeYear1.Blocks.Add(utilitiesIncomeYear1Block);
        row.BasicCell((property.Projections.Select(x => x.UtilityReimbursement).Skip(1).FirstOrDefault() / numberOfUnits).ToString("C2"));
        row.BasicCell((property.Projections.Select(x => x.UtilityReimbursement).Skip(1).FirstOrDefault() / scheduledRentYear1).ToString("P2"));
    }

    private static void OtherIncome(Table table, TableCellBorders lineBorder, UnderwritingAnalysis property, double scheduledRentYear0, double scheduledRentYear1, int numberOfUnits)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("plus Other Income");
        row.BasicCell(property.Projections.Select(x => x.OtherIncome).FirstOrDefault().ToString("C2"), false, ReportBuilder.PrimaryColor);
        row.BasicCell((property.Projections.Select(x => x.OtherIncome).FirstOrDefault() / numberOfUnits).ToString("C2"), false, ReportBuilder.PrimaryColor);
        row.BasicCell((property.Projections.Select(x => x.OtherIncome).FirstOrDefault() / scheduledRentYear0).ToString("P2"), false, ReportBuilder.PrimaryColor);

        var otherIncomeYear1 = row.Cells.AddTableCell();
        otherIncomeYear1.Borders = lineBorder;
        otherIncomeYear1.Background = ReportBuilder.PrimaryColor;
        var otherIncomeYear1Block = new Block
        {
            HorizontalAlignment = HorizontalAlignment.Right
        };
        otherIncomeYear1Block.InsertText(property.Projections.Select(x => x.OtherIncome).Skip(1).FirstOrDefault().ToString("C2"));
        otherIncomeYear1.Blocks.Add(otherIncomeYear1Block);

        row.BasicCell((property.Projections.Select(x => x.OtherIncome).Skip(1).FirstOrDefault() / numberOfUnits).ToString("C2"), false, ReportBuilder.PrimaryColor);
        row.BasicCell((property.Projections.Select(x => x.OtherIncome).Skip(1).FirstOrDefault() / scheduledRentYear1).ToString("P2"), false, ReportBuilder.PrimaryColor);
    }

    private static void TotalEffectiveIncome(Table table, TableCellBorders lineBorder, UnderwritingAnalysis property, double scheduledRentYear0, double scheduledRentYear1, int numberOfUnits)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Total Effective Income", true);
        row.BasicCell(property.Projections.Select(x => x.EffectiveGrossIncome).FirstOrDefault().ToString("C2"), true);
        row.BasicCell((property.Projections.Select(x => x.EffectiveGrossIncome).FirstOrDefault() / numberOfUnits).ToString("C2"), true);
        row.BasicCell((property.Projections.Select(x => x.EffectiveGrossIncome).FirstOrDefault() / scheduledRentYear0).ToString("P2"), true);

        var totalEffectiveIncomeYear1 = row.Cells.AddTableCell();
        totalEffectiveIncomeYear1.Borders = lineBorder;
        var totalEffectiveIncomeYear1Block = new Block
        {
            TextProperties = { Font = FontsRepository.HelveticaBold },
            HorizontalAlignment = HorizontalAlignment.Right
        };
        totalEffectiveIncomeYear1Block.InsertText(property.Projections.Select(x => x.EffectiveGrossIncome).Skip(1).FirstOrDefault().ToString("C2"));
        totalEffectiveIncomeYear1.Blocks.Add(totalEffectiveIncomeYear1Block);

        row.BasicCell((property.Projections.Select(x => x.EffectiveGrossIncome).Skip(1).FirstOrDefault() / numberOfUnits).ToString("C2"), true);
        row.BasicCell((property.Projections.Select(x => x.EffectiveGrossIncome).Skip(1).FirstOrDefault() / scheduledRentYear1).ToString("P2"), true);
    }

    private static void OperatingExpenses(Table table, TableCellBorders lineBorder, UnderwritingAnalysis property, double scheduledRentYear0, double scheduledRentYear1, int numberOfUnits)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("less Operating Expenses", false);
        row.BasicCell(property.Projections.Select(x => x.OperatingExpenses).FirstOrDefault().ToString("C2"), false, ReportBuilder.PrimaryColor);
        row.BasicCell((property.Projections.Select(x => x.OperatingExpenses).FirstOrDefault() / numberOfUnits).ToString("C2"), false, ReportBuilder.PrimaryColor);
        row.BasicCell((property.Projections.Select(x => x.OperatingExpenses).FirstOrDefault() / scheduledRentYear0).ToString("P2"), false, ReportBuilder.PrimaryColor);

        var operatingExpensesYear1 = row.Cells.AddTableCell();
        operatingExpensesYear1.Borders = lineBorder;
        operatingExpensesYear1.Background = ReportBuilder.PrimaryColor;
        var operatingExpensesYear1Block = new Block
        {
            HorizontalAlignment = HorizontalAlignment.Right
        };
        operatingExpensesYear1Block.InsertText(property.Projections.Select(x => x.OperatingExpenses).Skip(1).FirstOrDefault().ToString("C2"));
        operatingExpensesYear1.Blocks.Add(operatingExpensesYear1Block);

        row.BasicCell((property.Projections.Select(x => x.OperatingExpenses).Skip(1).FirstOrDefault() / numberOfUnits).ToString("C2"), false, ReportBuilder.PrimaryColor);
        row.BasicCell((property.Projections.Select(x => x.OperatingExpenses).Skip(1).FirstOrDefault() / scheduledRentYear1).ToString("P2"), false, ReportBuilder.PrimaryColor);
    }

    private static void NOI(Table table, TableCellBorders lineBorder, UnderwritingAnalysis property, double scheduledRentYear0, double scheduledRentYear1, int numberOfUnits)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Net Operating Income", true);
        row.BasicCell(property.Projections.Select(x => x.NetOperatingIncome).FirstOrDefault().ToString("C2"), true);
        row.BasicCell((property.Projections.Select(x => x.NetOperatingIncome).FirstOrDefault() / numberOfUnits).ToString("C2"), true);
        row.BasicCell((property.Projections.Select(x => x.NetOperatingIncome).FirstOrDefault() / scheduledRentYear0).ToString("P2"), true);

        var noiYear1 = row.Cells.AddTableCell();
        noiYear1.Borders = lineBorder;
        var noiYear1Block = new Block
        {
            TextProperties = { Font = FontsRepository.HelveticaBold },
            HorizontalAlignment = HorizontalAlignment.Right
        };
        noiYear1Block.InsertText(property.Projections.Select(x => x.NetOperatingIncome).Skip(1).FirstOrDefault().ToString("C2"));
        noiYear1.Blocks.Add(noiYear1Block);

        row.BasicCell((property.Projections.Select(x => x.NetOperatingIncome).Skip(1).FirstOrDefault() / numberOfUnits).ToString("C2"), true);
        row.BasicCell((property.Projections.Select(x => x.NetOperatingIncome).Skip(1).FirstOrDefault() / scheduledRentYear1).ToString("P2"), true);
    }

    private static void CapitalReserves(Table table, TableCellBorders lineBorder, UnderwritingAnalysis property, double scheduledRentYear0, double scheduledRentYear1, int numberOfUnits)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("less Capital Reserves", false);
        row.BasicCell(property.Projections.Select(x => x.CapitalReserves).FirstOrDefault().ToString("C2"), false, ReportBuilder.PrimaryColor);
        row.BasicCell((property.Projections.Select(x => x.CapitalReserves).FirstOrDefault() / numberOfUnits).ToString("C2"), false, ReportBuilder.PrimaryColor);
        row.BasicCell((property.Projections.Select(x => x.CapitalReserves).FirstOrDefault() / scheduledRentYear0).ToString("P2"), false, ReportBuilder.PrimaryColor);

        var captialReservesYear1 = row.Cells.AddTableCell();
        captialReservesYear1.Borders = lineBorder;
        captialReservesYear1.Background = ReportBuilder.PrimaryColor;
        var captialReservesYear1Block = new Block
        {
            HorizontalAlignment = HorizontalAlignment.Right
        };
        captialReservesYear1Block.InsertText(property.Projections.Select(x => x.CapitalReserves).Skip(1).FirstOrDefault().ToString("C2"));
        captialReservesYear1.Blocks.Add(captialReservesYear1Block);

        row.BasicCell((property.Projections.Select(x => x.CapitalReserves).Skip(1).FirstOrDefault() / numberOfUnits).ToString("C2"), false, ReportBuilder.PrimaryColor);
        row.BasicCell((property.Projections.Select(x => x.CapitalReserves).Skip(1).FirstOrDefault() / scheduledRentYear1).ToString("P2"), false, ReportBuilder.PrimaryColor);
    }

    private static void CFBeforeDebtService(Table table, TableCellBorders lineBorder, UnderwritingAnalysis property, double scheduledRentYear0, double scheduledRentYear1, int numberOfUnits)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Cash Flow Before Debt Service", true);
        row.BasicCell(property.Projections.Select(x => x.CashFlowBeforeDebtService).FirstOrDefault().ToString("C2"), true);
        row.BasicCell((property.Projections.Select(x => x.CashFlowBeforeDebtService).FirstOrDefault() / numberOfUnits).ToString("C2"), true);
        row.BasicCell((property.Projections.Select(x => x.CashFlowBeforeDebtService).FirstOrDefault() / scheduledRentYear0).ToString("P2"), true);

        var cFBeforeDebtServiceYear1 = row.Cells.AddTableCell();
        cFBeforeDebtServiceYear1.Borders = lineBorder;
        var cFBeforeDebtServiceYear1Block = new Block
        {
            TextProperties = { Font = FontsRepository.HelveticaBold },
            HorizontalAlignment = HorizontalAlignment.Right
        };
        cFBeforeDebtServiceYear1Block.InsertText(property.Projections.Select(x => x.CashFlowBeforeDebtService).Skip(1).FirstOrDefault().ToString("C2"));
        cFBeforeDebtServiceYear1.Blocks.Add(cFBeforeDebtServiceYear1Block);

        row.BasicCell((property.Projections.Select(x => x.CashFlowBeforeDebtService).Skip(1).FirstOrDefault() / numberOfUnits).ToString("C2"), true);
        row.BasicCell((property.Projections.Select(x => x.CashFlowBeforeDebtService).Skip(1).FirstOrDefault() / scheduledRentYear1).ToString("P2"), true);
    }

    private static void AnnualDebtService(Table table, TableCellBorders lineBorder, UnderwritingAnalysis property, double scheduledRentYear0, double scheduledRentYear1, int numberOfUnits)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("less Annual Debt Service", false);
        row.BasicCell(property.Projections.Select(x => x.DebtService).FirstOrDefault().ToString("C2"), false, ReportBuilder.PrimaryColor);
        row.BasicCell((property.Projections.Select(x => x.DebtService).FirstOrDefault() / numberOfUnits).ToString("C2"), false, ReportBuilder.PrimaryColor);
        row.BasicCell((property.Projections.Select(x => x.DebtService).FirstOrDefault() / scheduledRentYear0).ToString("P2"), false, ReportBuilder.PrimaryColor);

        var annualDebtServiceYear1 = row.Cells.AddTableCell();
        annualDebtServiceYear1.Borders = lineBorder;
        annualDebtServiceYear1.Background = new RgbColor(248, 249, 250);
        var annualDebtServiceYear1Block = new Block
        {
            HorizontalAlignment = HorizontalAlignment.Right
        };
        annualDebtServiceYear1Block.InsertText(property.Projections.Select(x => x.DebtService).Skip(1).FirstOrDefault().ToString("C2"));
        annualDebtServiceYear1.Blocks.Add(annualDebtServiceYear1Block);

        row.BasicCell((property.Projections.Select(x => x.DebtService).Skip(1).FirstOrDefault() / numberOfUnits).ToString("C2"), false, ReportBuilder.PrimaryColor);
        row.BasicCell((property.Projections.Select(x => x.DebtService).Skip(1).FirstOrDefault() / scheduledRentYear1).ToString("P2"), false, ReportBuilder.PrimaryColor);
    }

    private static void CashFlowBeforeTaxes(Table table, TableCellBorders lineBorder, UnderwritingAnalysis property, double scheduledRentYear0, double scheduledRentYear1, int numberOfUnits)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Cash Flow Before Taxes", true);
        row.BasicCell(property.Projections.Select(x => x.TotalCashFlow).FirstOrDefault().ToString("C2"), true);
        row.BasicCell((property.Projections.Select(x => x.TotalCashFlow).FirstOrDefault() / numberOfUnits).ToString("C2"), true);
        row.BasicCell((property.Projections.Select(x => x.TotalCashFlow).FirstOrDefault() / scheduledRentYear0).ToString("P2"), true);

        var cashFlowBeforeTaxesYear1 = row.Cells.AddTableCell();
        cashFlowBeforeTaxesYear1.Borders = lineBorder;
        var cashFlowBeforeTaxesYear1Block = new Block
        {
            TextProperties = { Font = FontsRepository.HelveticaBold },
            HorizontalAlignment = HorizontalAlignment.Right
        };
        cashFlowBeforeTaxesYear1Block.InsertText(property.Projections.Select(x => x.TotalCashFlow).Skip(1).FirstOrDefault().ToString("C2"));
        cashFlowBeforeTaxesYear1.Blocks.Add(cashFlowBeforeTaxesYear1Block);

        row.BasicCell((property.Projections.Select(x => x.TotalCashFlow).Skip(1).FirstOrDefault() / numberOfUnits).ToString("C2"), true);
        row.BasicCell((property.Projections.Select(x => x.TotalCashFlow).Skip(1).FirstOrDefault() / scheduledRentYear1).ToString("P2"), true);
    }
    # endregion
}
