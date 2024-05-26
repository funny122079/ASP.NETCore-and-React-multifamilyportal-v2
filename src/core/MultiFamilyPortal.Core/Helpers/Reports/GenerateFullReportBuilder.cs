using Humanizer;
using MultiFamilyPortal.Dtos.Underwriting;
using Telerik.Documents.Primitives;
using Telerik.Windows.Documents.Fixed.Model;
using Telerik.Windows.Documents.Fixed.Model.ColorSpaces;
using Telerik.Windows.Documents.Fixed.Model.Data;
using Telerik.Windows.Documents.Fixed.Model.Editing;
using Telerik.Windows.Documents.Fixed.Model.Editing.Flow;
using Telerik.Windows.Documents.Fixed.Model.Editing.Tables;
using Telerik.Windows.Documents.Fixed.Model.Fonts;

namespace MultiFamilyPortal.Helpers.Reports;

public static class GenerateFullReportBuilder
{
    public static void GenerateFullReport(UnderwritingAnalysis property, RadFixedDocument document)
    {
        var headerSize = 40;
        var cellPadding = 7;
        var page = document.Pages.AddPage();
        page.Rotation = Rotation.Rotate0;
        page.Size = ReportBuilder.LetterSizeHorizontal;
        var tableWidth = 0.0d;

        var editor = new FixedContentEditor(page);
        var blackBorder = new Border(10, new RgbColor(252, 252, 252));

        CreateHeader(editor, property, page.Size.Width, headerSize);
        CreateAddress(page, property, page.Size.Width / 2);
        LeftDetail(editor, blackBorder, property, page.Size.Width / 2, out tableWidth, cellPadding);
        RightDetail(editor, blackBorder, property, page.Size.Width / 2, tableWidth, cellPadding);
    }

    private static void CreateHeader(FixedContentEditor editor, UnderwritingAnalysis property, double widthStart, double padding = 22)
    {
        var table = new Table
        {
            DefaultCellProperties = { Padding = new Thickness(padding) },
            LayoutType = TableLayoutType.FixedWidth,
        };

        var row = table.Rows.AddTableRow();
        var rowTitle = row.Cells.AddTableCell();
        rowTitle.Background = new RgbColor(137, 207, 240);
        var rowTitleBlock = new Block
        {
            TextProperties = { Font = FontsRepository.HelveticaBold, FontSize = 50 },
            HorizontalAlignment = HorizontalAlignment.Center,
        };
        rowTitleBlock.InsertText(property.Name);
        rowTitle.Blocks.Add(rowTitleBlock);

        editor.Position.Translate(0, 100);
        editor.DrawTable(table, new Size(widthStart, double.PositiveInfinity));
    }

    private static void LeftDetail(FixedContentEditor editor, Border border, UnderwritingAnalysis property, double widthStart, out double width, double padding = 22)
    {
        var table = new Table
        {
            DefaultCellProperties = { Padding = new Thickness(padding) },
            LayoutType = TableLayoutType.AutoFit,
            Borders = new TableBorders(border)
        };

        SimpleRow(table, "Date", DateTime.Now.ToString("MM/dd/yyyy"));
        SimpleRow(table, "Cap Rate", property.CapRate.ToString("P2"));
        SimpleRow(table, "Debt Coverage Ratio", property.DebtCoverage.ToString("F2"));
        SimpleRow(table, "Cash On Cash Return", property.CashOnCash.ToString("P2"));

        width = table.Measure().Width;

        editor.Position.Translate(widthStart / 2 - width / 2, 600);
        editor.DrawTable(table);
    }

    private static void RightDetail(FixedContentEditor editor, Border border, UnderwritingAnalysis property, double widthStart, double tableWidth, double padding = 22)
    {
        var table = new Table
        {
            DefaultCellProperties = { Padding = new Thickness(padding) },
            LayoutType = TableLayoutType.FixedWidth,
            Borders = new TableBorders(border)
        };

        SimpleRow(table, "Class", property.PropertyClass.Humanize(LetterCasing.Title));
        SimpleRow(table, "Price", property.OfferPrice.ToString("C2"));
        SimpleRow(table, "Number of Units", property.Units.ToString());
        SimpleRow(table, "Built", property.Vintage.ToString());

        editor.Position.Translate(widthStart + widthStart / 2 - tableWidth / 2, 600);
        editor.DrawTable(table, new Size(tableWidth, double.PositiveInfinity));
    }

    private static void CreateAddress(RadFixedPage page, UnderwritingAnalysis property, double widthStart, double fontSize = 18)
    {
        var marketFragment = page.Content.AddTextFragment();
        marketFragment.Text = $"{property.Market}";
        marketFragment.Position.Translate(widthStart - property.Market.Length * 5, 370);
        marketFragment.FontSize = fontSize + 5;

        var addressFragment = page.Content.AddTextFragment();
        addressFragment.Text = property.Address;
        addressFragment.Position.Translate(widthStart - property.Address.Length * 4, 390);
        addressFragment.FontSize = fontSize;

        var cityFragment = page.Content.AddTextFragment();
        cityFragment.Text = $"{property.City}, {property.State}, {property.Zip}";
        cityFragment.Position.Translate(widthStart - (property.City.Length + property.State.Length + property.Zip.Length) * 6, 410);
        cityFragment.FontSize = fontSize;

        var countryFragment = page.Content.AddTextFragment();
        countryFragment.Text = "United States";
        countryFragment.Position.Translate(widthStart - 50, 430);
        countryFragment.FontSize = fontSize;
    }

    private static void SimpleRow(Table table, string title, string value, double fontSize = 12)
    {
        var row = table.Rows.AddTableRow();
        var rowTitle = row.Cells.AddTableCell();
        var rowTitleBlock = new Block
        {
            TextProperties = { Font = FontsRepository.HelveticaBold, FontSize = fontSize },
            HorizontalAlignment = HorizontalAlignment.Right,
        };
        rowTitleBlock.InsertText(title);
        rowTitle.Blocks.Add(rowTitleBlock);

        var rowSpace = row.Cells.AddTableCell();
        var rowSpaceBlock = new Block
        {
            TextProperties = { Font = FontsRepository.HelveticaBold, FontSize = fontSize },
            HorizontalAlignment = HorizontalAlignment.Center
        };
        rowSpaceBlock.InsertText(":");
        rowSpace.Blocks.Add(rowSpaceBlock);

        var rowValue = row.Cells.AddTableCell();
        var rowValueBlock = new Block { TextProperties = { FontSize = fontSize } };
        rowValueBlock.InsertText(value);
        rowValue.Blocks.Add(rowValueBlock);
    }
}
