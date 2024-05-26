using MultiFamilyPortal.Dtos.Underwriting;
using MultiFamilyPortal.Data.Models;
using Telerik.Documents.Primitives;
using Telerik.Windows.Documents.Fixed.Model;
using Telerik.Windows.Documents.Fixed.Model.Editing;
using Telerik.Windows.Documents.Fixed.Model.Editing.Flow;
using Telerik.Windows.Documents.Fixed.Model.Editing.Tables;


namespace MultiFamilyPortal.Helpers.Reports;

public static class GenerateIncomeForecastBuilder
{
    public static void GenerateIncomeForecast(UnderwritingAnalysis property, RadFixedDocument document)
    {
        var cellPadding = property.HoldYears > 5 ? 12 : 23.5;
        var page = document.Pages.AddPage();
        page.Size = ReportBuilder.LetterSizeHorizontal;
        var editor = new FixedContentEditor(page);

        ReportBuilder.Header(page, "Income Forecast");
        var blackBorder = new Border(1, ReportBuilder.DarkColor);

        CreateTable(editor, blackBorder, property, page.Size, cellPadding);
        ReportBuilder.Footer(page, property.Name);
    }

    private static void CreateTable(FixedContentEditor editor, Border border, UnderwritingAnalysis property, Size size, double padding = 22)
    {
        var table = new Table
        {
            DefaultCellProperties = { Padding = new Thickness(padding) },
            LayoutType = TableLayoutType.FixedWidth,
            Borders = new TableBorders(border)
        };

        Header(table, property);
        Year(table, property);
        PerUnitIncrease(table, property);
        UnitsAppliedTo(table, property);
        RemainingUnits(table, property);
        Vacancy(table, property);
        OtherLosses(table, property);
        UtilityIncreases(table, property);
        OtherIncome(table, property);

        editor.Position.Translate(ReportBuilder.PageMargin, 120);
        editor.DrawTable(table, new Size(size.Width - ReportBuilder.PageMargin * 2, table.Measure().Height));
    }

    #region Income Forecast Rows
    private static void Header(Table table, UnderwritingAnalysis property)
    {
        table.Rows.AddTableRow().BasicCell("Income Forecast", true, ReportBuilder.HeaderColor, HorizontalAlignment.Center, 2 + property.HoldYears);
    }

    private static void Year(Table table, UnderwritingAnalysis property)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Year", true);
        foreach (var year in property.IncomeForecast.Select(x => x.Year))
        {
            var currentYear = year == 0 ? "Start Year* : " + property.StartDate.Year : $"{property.StartDate.Year + year}";
            row.BasicCell(currentYear.ToString(), true);
        }
    }

    private static void PerUnitIncrease(Table table, UnderwritingAnalysis property)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Per Unit Increase");
        int i = 0;
        foreach (var increase in property.IncomeForecast.Select(x => x.PerUnitIncrease))
        {
            var format = property.IncomeForecast.ToList()[i].IncreaseType == IncomeForecastIncreaseType.Percent ? "P2" : "C2";
            row.BasicCell(increase.ToString(format));
            i++;
        }
    }

    private static void UnitsAppliedTo(Table table, UnderwritingAnalysis property)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Units Applied To");
        foreach (var units in property.IncomeForecast.Select(x => x.UnitsAppliedTo))
            row.BasicCell(units.ToString(), false, ReportBuilder.PrimaryColor);
    }

    private static void RemainingUnits(Table table, UnderwritingAnalysis property)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Increase on Remaining Units");
        foreach (var increase in property.IncomeForecast.Select(x => x.FixedIncreaseOnRemainingUnits))
            row.BasicCell(increase.ToString("C2"));
    }

    private static void Vacancy(Table table, UnderwritingAnalysis property)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Vacancy");
        foreach (var vacancy in property.IncomeForecast.Select(x => x.Vacancy))
            row.BasicCell(vacancy.ToString("P2"), false, ReportBuilder.PrimaryColor);
    }

    private static void OtherLosses(Table table, UnderwritingAnalysis property)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Other Losses");
        foreach (var loss in property.IncomeForecast.Select(x => x.OtherLossesPercent))
            row.BasicCell(loss.ToString("P2"));
    }

    private static void UtilityIncreases(Table table, UnderwritingAnalysis property)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Utility Increases");
        foreach (var increase in property.IncomeForecast.Select(x => x.UtilityIncreases))
            row.BasicCell(increase.ToString("C2"), false, ReportBuilder.PrimaryColor);
    }

    private static void OtherIncome(Table table, UnderwritingAnalysis property)
    {
        var row = table.Rows.AddTableRow();
        row.BasicCell("Other Income");
        foreach (var income in property.IncomeForecast.Select(x => x.OtherIncomePercent))
            row.BasicCell(income.ToString("P2"));
    }
    # endregion
}
