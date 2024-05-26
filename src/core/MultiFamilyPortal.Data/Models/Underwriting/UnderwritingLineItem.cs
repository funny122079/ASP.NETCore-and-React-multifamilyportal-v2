using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MultiFamilyPortal.Data.Models
{
    public class UnderwritingLineItem
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public Guid PropertyId { get; set; }

        public string Description { get; set; }

        public UnderwritingCategory Category { get; set; }

        public UnderwritingType Type { get; set; }

        [DisplayFormat(DataFormatString = "{0:C}")]
        public double Amount { get; set; }

        public ExpenseSheetType ExpenseType { get; set; }

        public UnderwritingColumn Column { get; set; }

        [NotMapped]
        [JsonIgnore]
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double AnnualizedTotal =>
            ExpenseType switch {
                ExpenseSheetType.T1 => Calculated(Amount * 12),
                ExpenseSheetType.T3 => Calculated(Amount * 4),
                ExpenseSheetType.T4 => Calculated(Amount * 3),
                ExpenseSheetType.T6 => Calculated(Amount * 2),
                _ => Amount
            };

        private double Calculated(double value)
        {
            var abs = Math.Abs(value);
            if (Category == UnderwritingCategory.ConsessionsNonPayment || Type == UnderwritingType.Expense)
                return abs * -1;

            return abs;
        }

        [JsonIgnore]
        public UnderwritingProspectProperty Property { get; set; }
    }
}
