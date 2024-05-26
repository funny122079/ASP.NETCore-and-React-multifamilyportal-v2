using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using MultiFamilyPortal.Converters;
using MultiFamilyPortal.Data.Models;
using ReactiveUI;
using ReactiveUI.Fody.Helpers;

namespace MultiFamilyPortal.Dtos.Underwriting
{
    [JsonConverter(typeof(ReactiveObjectConverter<UnderwritingAnalysisLineItem>))]
    public class UnderwritingAnalysisLineItem : ReactiveObject
    {
        public UnderwritingAnalysisLineItem()
        {
            this.WhenAnyValue(x => x.Amount, x => x.ExpenseType, x => x.Category, CalculateAnnualizedTotal)
                .ToProperty(this, nameof(AnnualizedTotal), out _annualizedTotal);
        }

        public Guid Id { get; set; }

        public string Description { get; set; }

        public UnderwritingCategory Category { get; set; }

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double Amount { get; set; }

        [Reactive]
        public ExpenseSheetType ExpenseType { get; set; } = ExpenseSheetType.T12;

        private ObservableAsPropertyHelper<double> _annualizedTotal;
        [JsonIgnore]
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double AnnualizedTotal => _annualizedTotal.Value;

        private static double CalculateAnnualizedTotal(double amount, ExpenseSheetType type, UnderwritingCategory category)
        {
            return type switch
            {
                ExpenseSheetType.T1 => Calculated(amount * 12, category),
                ExpenseSheetType.T3 => Calculated(amount * 4, category),
                ExpenseSheetType.T4 => Calculated(amount * 3, category),
                ExpenseSheetType.T6 => Calculated(amount * 2, category),
                _ => amount
            };
        }

        private static double Calculated(double value, UnderwritingCategory category)
        {
            var abs = Math.Abs(value);
            if (category == UnderwritingCategory.ConsessionsNonPayment || category.GetLineItemType() == UnderwritingType.Expense)
                return abs * -1;

            return abs;
        }

        public void UpdateFromGuidance(UnderwritingGuidance guidance, UnderwritingAnalysis analysis)
        {
            switch (guidance.Type)
            {
                case CostType.PerDoor:
                    Amount = guidance.Max * analysis.Units;
                    break;
                case CostType.PercentOfPurchase:
                    Amount = guidance.Max * analysis.PurchasePrice;
                    break;
                default:
                    Amount = guidance.Max;
                    break;
            }
        }
    }
}
