using MultiFamilyPortal.Dtos.Underwriting.Reports;
using MultiFamilyPortal.Dtos.Underwriting;
using Telerik.Documents.Primitives;
using Telerik.Windows.Documents.Fixed.Model.Editing.Tables;
using Telerik.Windows.Documents.Fixed.Model.Editing;
using Telerik.Windows.Documents.Fixed.Model;
using Telerik.Windows.Documents.Fixed.Model.Editing.Flow;

namespace MultiFamilyPortal.Helpers.Reports;

public static class GenerateManagerReturnsBuilder
{
    public static void GenerateManagerReturns(UnderwritingAnalysis property, RadFixedDocument document)
    {
        var page = document.Pages.AddPage();
        page.Size = ReportBuilder.LetterSizeHorizontal;

        ReportBuilder.Header(page, "Manager Returns");
        ManagersTable(page, property);
        if (property.HoldYears > 5)
        {
            ManagersTable(page, property, true);
        }
        ReportBuilder.Footer(page, property.Name);
    }

    private static void ManagersTable(RadFixedPage page, UnderwritingAnalysis property, bool isSecondary = false, double padding = 7)
    {
        var mmr = new ManagersReturnsReport(property);
        FixedContentEditor editor = new(page);
        padding = property.HoldYears > 5 ? padding : 2 * padding;
        var missingYears = isSecondary ? 10 - property.HoldYears : 5 - property.HoldYears;
        var startPoint = isSecondary ? 5 : 0;
        var breakPoint = 4;
        var i = 0;

        var table = new Table
        {
            DefaultCellProperties = { Padding = new Thickness(padding) },
            LayoutType = TableLayoutType.FixedWidth
        };
        var blackBorder = new Border(1, ReportBuilder.DarkColor);
        table.Borders = new TableBorders(blackBorder);

        // row 0
        var r0 = table.Rows.AddTableRow();
        r0.BasicCell("", false, ReportBuilder.HeaderColor, HorizontalAlignment.Center, 2);
        foreach (var year in Enumerable.Range(1, mmr.HoldYears).Skip(startPoint))
        {
            r0.BasicCell($"Year {year}", true, ReportBuilder.HeaderColor);
            if (!isSecondary && i == breakPoint)
                break;
            i++;
        }
        if (isSecondary || property.HoldYears <= 5)
            r0.BasicCell($"Total", true, ReportBuilder.HeaderColor);


        var r1 = table.Rows.AddTableRow();
        r1.BasicCell("Acquisation Fee");
        r1.BasicCell(mmr.AcquisitionFee.ToString("C2"), false, ReportBuilder.PrimaryColor);
        i = 0;
        foreach (var year in Enumerable.Range(1, mmr.HoldYears).Skip(startPoint))
        {
            r1.BasicCell("", false, ReportBuilder.PrimaryColor);
            if (!isSecondary && i == breakPoint)
                break;
            i++;
        }
        if (isSecondary || property.HoldYears <= 5)
            r1.BasicCell(mmr.AcquisitionFee.ToString("C2"), false, ReportBuilder.PrimaryColor);

        var r2 = table.Rows.AddTableRow();
        r2.BasicCell("Manager Equity");
        r2.BasicCell(mmr.ManagerEquity.ToString("C2"));
        i = 0;
        foreach (var year in Enumerable.Range(1, mmr.HoldYears + 1).Skip(startPoint))
        {
            r2.BasicCell("");
            if (!isSecondary && i == breakPoint)
                break;
            i++;
        }

        var r3 = table.Rows.AddTableRow();
        r3.BasicCell("Total Cash Flow");
        r3.BasicCell(mmr.ManagerEquity.ToString("C2"), false, ReportBuilder.PrimaryColor);
        i = 0;
        foreach (var yearlycashFlow in mmr.CashFlow.Skip(startPoint+1))
        {
            r3.BasicCell(yearlycashFlow.ToString("C2"), false, ReportBuilder.PrimaryColor);
            if (!isSecondary && i == breakPoint)
                break;
            i++;
        }

        var r4 = table.Rows.AddTableRow();
        r4.BasicCell($"Cash Flow ({mmr.CashFlowPercentage.ToString("P2")})");
        var totalMCF = 0d;
        i = 0;
        foreach (var yearlycashFlow in mmr.CashFlow)
            totalMCF += (yearlycashFlow * mmr.CashFlowPercentage);

        foreach (var yearlycashFlow in mmr.CashFlow.Skip(startPoint))
        {
            r4.BasicCell((yearlycashFlow * mmr.CashFlowPercentage).ToString("C2"));
            if (!isSecondary && i == breakPoint + 1)
                break;
            i++;
        }
        if (isSecondary || property.HoldYears <= 5)
            r4.BasicCell(totalMCF.ToString("C2"));

        var r5 = table.Rows.AddTableRow();
        r5.BasicCell("Equity On Sale of Property");
        i = 0;
        foreach (var year in Enumerable.Range(0, mmr.HoldYears).Skip(startPoint))
        {
            r5.BasicCell("", false, ReportBuilder.PrimaryColor);
            if (!isSecondary && i == breakPoint + 1)
                break;
            i++;
        }
        if (isSecondary || property.HoldYears <= 5)
            r5.BasicCell(mmr.EqualityOnSaleOfProperty.ToString("C2"), false, ReportBuilder.PrimaryColor);
        if (isSecondary || property.HoldYears <= 5)
            r5.BasicCell(mmr.EqualityOnSaleOfProperty.ToString("C2"), false, ReportBuilder.PrimaryColor);

        var r6 = table.Rows.AddTableRow();
        r6.BasicCell("Total", true);
        r6.BasicCell((mmr.AcquisitionFee + mmr.CashFlow.FirstOrDefault() * mmr.CashFlowPercentage).ToString("C2"), true);
        i = 0;
        foreach (var year in mmr.CashFlow.Skip(startPoint))
        {
            if (i != 0 && i != mmr.HoldYears)
                r6.BasicCell((year * mmr.CashFlowPercentage).ToString("C2"), true);
            else if (i == mmr.HoldYears)
                r6.BasicCell((mmr.EqualityOnSaleOfProperty + year * mmr.CashFlowPercentage).ToString("C2"), true);

            if (!isSecondary && i == breakPoint + 1)
                break;
            i++;
        }
        if (isSecondary || property.HoldYears <= 5)
            r6.BasicCell((totalMCF + mmr.EqualityOnSaleOfProperty).ToString("C2"), true);

        var heightStart = isSecondary ? 420 : 120;
        editor.Position.Translate(ReportBuilder.PageMargin, heightStart);
        editor.DrawTable(table, new Size(page.Size.Width - ReportBuilder.PageMargin * 2, double.PositiveInfinity));
    }
}
