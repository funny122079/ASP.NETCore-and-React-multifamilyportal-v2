using MultiFamilyPortal.Data.Models;
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

public static class GenerateCapitalExpensesBuilder
{
    public static void GenerateCapitalExpenses(UnderwritingAnalysis property, RadFixedDocument document)
    {
        var cellPadding = 15;
        var page = document.Pages.AddPage();
        page.Rotation = Rotation.Rotate0;
        page.Size = ReportBuilder.LetterSizeHorizontal;
        var editor = new FixedContentEditor(page);

        ReportBuilder.Header(page, "Capital Expenses");

        var blackBorder = new Border(1, new RgbColor(0, 0, 0));
        var tableOneHeight = 0.0d;

        SellerTable(page, editor, blackBorder, property, out tableOneHeight, cellPadding);
        PlannedTable(page, document, editor, blackBorder, property, tableOneHeight, cellPadding);
        ReportBuilder.Footer(page, property.Name);
    }

    private static void SellerTable(RadFixedPage page, FixedContentEditor editor, Border border, UnderwritingAnalysis property, out double height, double padding = 22)
    {
        var table = new Table
        {
            DefaultCellProperties = { Padding = new Thickness(padding) },
            LayoutType = TableLayoutType.FixedWidth,
            Borders = new TableBorders(border)
        };

        Header(table, property, "Seller Capital Expenses");
        MenuOption(page.Size, table, property);
        DynamicRow(table, property);

        height = table.Measure().Height;
        editor.Position.Translate(ReportBuilder.PageMargin, 120);
        editor.DrawTable(table, new Size(page.Size.Width - 2 * ReportBuilder.PageMargin, double.PositiveInfinity));
    }

    private static void PlannedTable(RadFixedPage page, RadFixedDocument document, FixedContentEditor editor, Border border, UnderwritingAnalysis property, double tableHeight, double padding = 22)
    {
        var table = new Table
        {
            DefaultCellProperties = { Padding = new Thickness(padding) },
            LayoutType = TableLayoutType.FixedWidth,
            Borders = new TableBorders(border)
        };

        Header(table, property, "Planned Capital Expenses");
        MenuOption(page.Size, table, property, true);
        DynamicRow(table, property, true);

        var height = tableHeight + 200 + 2 * ReportBuilder.PageMargin;

        if (height < page.Size.Height)
        {
            editor.Position.Translate(ReportBuilder.PageMargin, tableHeight + 150);
            editor.DrawTable(table, new Size(page.Size.Width - 2 * ReportBuilder.PageMargin, double.PositiveInfinity));
        }
        else
        {
            var pageTwo = document.Pages.AddPage();
            pageTwo.Size = page.Size;
            var editorTwo = new FixedContentEditor(pageTwo);
            editorTwo.Position.Translate(ReportBuilder.PageMargin, 120);
            editorTwo.DrawTable(table, new Size(pageTwo.Size.Width - 2 * ReportBuilder.PageMargin, double.PositiveInfinity));

            ReportBuilder.Footer(pageTwo, property.Name);
        }
    }

    private static void Header(Table table, UnderwritingAnalysis property, string name, int colSpan = 3)
    {
        var header = table.Rows.AddTableRow();
        var title = header.Cells.AddTableCell();
        title.ColumnSpan = colSpan;
        title.Background = new RgbColor(137, 207, 240);
        var titleBlock = new Block
        {
            TextProperties = { Font = FontsRepository.HelveticaBold },
            HorizontalAlignment = HorizontalAlignment.Center
        };
        titleBlock.InsertText(name);
        title.Blocks.Add(titleBlock);
    }

    private static void MenuOption(Size size, Table table, UnderwritingAnalysis property, bool isPlanned = false)
    {
        var row = table.Rows.AddTableRow();
        var costTitle = row.Cells.AddTableCell();
        costTitle.PreferredWidth = 170;
        costTitle.Background = new RgbColor(248, 249, 250);
        var costTitleBlock = new Block
        {
            TextProperties = { Font = FontsRepository.HelveticaBold },
        };
        costTitleBlock.InsertText("Cost");
        costTitle.Blocks.Add(costTitleBlock);

        var statusTitle = row.Cells.AddTableCell();
        statusTitle.PreferredWidth = 120;
        statusTitle.Background = new RgbColor(248, 249, 250);
        var statusTitleBlock = new Block
        {
            TextProperties = { Font = FontsRepository.HelveticaBold },
        };
        var text = isPlanned ? "Funded By" : "Status";
        statusTitleBlock.InsertText(text);
        statusTitle.Blocks.Add(statusTitleBlock);

        var descriptionTitle = row.Cells.AddTableCell();
        descriptionTitle.PreferredWidth = size.Width - 290 - 96;
        descriptionTitle.Background = new RgbColor(248, 249, 250);
        var descriptionTitleBlock = new Block
        {
            TextProperties = { Font = FontsRepository.HelveticaBold },
            HorizontalAlignment = HorizontalAlignment.Left
        };
        descriptionTitleBlock.InsertText("Description");
        descriptionTitle.Blocks.Add(descriptionTitleBlock);
    }


    private static void DynamicRow(Table table, UnderwritingAnalysis property, bool isPlanned = false)
    {
        int i = 0;
        if (isPlanned)
        {
            foreach (var improvement in property.CapitalImprovements.Where(x => x.Status == CapitalImprovementStatus.Planned))
            {
                var row = table.Rows.AddTableRow();

                var costCell = row.Cells.AddTableCell();
                if (i % 2 != 0)
                {
                    costCell.Background = new RgbColor(248, 249, 250);
                }

                var costCellBlock = new Block();
                costCellBlock.InsertText(improvement.Cost.ToString("C2"));
                costCell.Blocks.Add(costCellBlock);

                var fundedCell = row.Cells.AddTableCell();
                if (i % 2 != 0)
                {
                    fundedCell.Background = new RgbColor(248, 249, 250);
                }
                var fundedCellBlock = new Block();
                fundedCellBlock.InsertText("Investors");
                fundedCell.Blocks.Add(fundedCellBlock);

                var descriptionCell = row.Cells.AddTableCell();
                if (i % 2 != 0)
                {
                    descriptionCell.Background = new RgbColor(248, 249, 250);
                }
                var descriptionCellBlock = new Block();
                descriptionCellBlock.InsertText(improvement.Description);
                descriptionCell.Blocks.Add(descriptionCellBlock);
                i++;
            }

            var totalRow = table.Rows.AddTableRow();
            var prop = property.CapitalImprovements.Where(x => x.Status == CapitalImprovementStatus.Planned);
            var text = prop.Any() ? prop.Sum(x => x.Cost).ToString("C2") : "No Planned Capital Expenses";

            var totalCell = totalRow.Cells.AddTableCell();
            totalCell.ColumnSpan = 3;
            if (i % 2 != 0)
            {
                totalCell.Background = new RgbColor(248, 249, 250);
            }
            var totalCellBlock = new Block
            {
                TextProperties = { Font = prop.Any() ? FontsRepository.HelveticaBold : FontsRepository.Helvetica },
            };

            totalCellBlock.InsertText(text);
            totalCell.Blocks.Add(totalCellBlock);
        }
        else
        {
            foreach (var improvement in property.CapitalImprovements.Where(x => x.Status != CapitalImprovementStatus.Planned).OrderBy(x => x.Status))
            {
                var row = table.Rows.AddTableRow();

                var costCell = row.Cells.AddTableCell();
                if (i % 2 != 0)
                {
                    costCell.Background = new RgbColor(248, 249, 250);
                }
                var costCellBlock = new Block();
                costCellBlock.InsertText(improvement.Cost.ToString("C2"));
                costCell.Blocks.Add(costCellBlock);

                var statusCell = row.Cells.AddTableCell();
                if (i % 2 != 0)
                {
                    statusCell.Background = new RgbColor(248, 249, 250);
                }
                var statusCellBlock = new Block();
                statusCellBlock.InsertText(improvement.Status.ToString());
                statusCell.Blocks.Add(statusCellBlock);

                var descriptionCell = row.Cells.AddTableCell();
                if (i % 2 != 0)
                {
                    descriptionCell.Background = new RgbColor(248, 249, 250);
                }
                var descriptionCellBlock = new Block();
                descriptionCellBlock.InsertText(improvement.Description);
                descriptionCell.Blocks.Add(descriptionCellBlock);
            }

            var totalRow = table.Rows.AddTableRow();
            var prop = property.CapitalImprovements.Where(x => x.Status != CapitalImprovementStatus.Planned);
            var text = prop.Any() ? prop.Sum(x => x.Cost).ToString("C2") : "No Known Existing Capital Expenses";

            var totalCell = totalRow.Cells.AddTableCell();
            totalCell.ColumnSpan = 3;
            if (i % 2 != 0)
            {
                totalCell.Background = new RgbColor(248, 249, 250);
            }
            var totalCellBlock = new Block
            {
                TextProperties = { Font = prop.Any() ? FontsRepository.HelveticaBold : FontsRepository.Helvetica },
            };
            totalCellBlock.InsertText(text);
            totalCell.Blocks.Add(totalCellBlock);
            i++;
        }
    }
}
