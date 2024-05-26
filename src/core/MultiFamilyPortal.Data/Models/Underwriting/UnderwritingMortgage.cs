using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MultiFamilyPortal.Data.Models
{
    public class UnderwritingMortgage
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public Guid PropertyId { get; set; }

        public double LoanAmount { get; set; }

        [DisplayFormat(DataFormatString = "{0:P}")]
        public double InterestRate { get; set; }

        public int TermInYears { get; set; }

        public bool InterestOnly { get; set; }

        public int BalloonMonths { get; set; }

        [DisplayFormat(DataFormatString = "{0:P}")]
        public double Points { get; set; }

        [JsonIgnore]
        [NotMapped]
        public double PointCost => Points * LoanAmount;

        [JsonIgnore]
        [NotMapped]
        public double AnnualDebtService => CalculatePayment();

        [JsonIgnore]
        public UnderwritingProspectProperty Property { get; set; }

        private double CalculatePayment()
        {
            var termOfLoan = TermInYears * 12;

            if (InterestOnly)
            {
                return LoanAmount * InterestRate;
            }
            else
            {
                var payment = LoanAmount * (Math.Pow((1 + InterestRate / 12), termOfLoan) * InterestRate) / (12 * (Math.Pow((1 + InterestRate / 12), termOfLoan) - 1));

                return payment * 12;

                //var amortizationFormula = ((1 + i) / n);
                //// ((Math.Pow((1 + InterestRate), n) - 1)/Math.Pow(i(1 + i), n)) * 12;
                //var monthlyPayment = (LoanAmount * (((i * amortizationFormula) / amortizationFormula) - 1));
                //return monthlyPayment * 12;
            }
        }
    }
}
