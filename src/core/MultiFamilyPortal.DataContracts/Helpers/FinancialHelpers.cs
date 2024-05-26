using Microsoft.VisualBasic;
using MultiFamilyPortal.Data.Models;
using MultiFamilyPortal.Dtos;
using MultiFamilyPortal.Dtos.Underwriting;

namespace MultiFamilyPortal.Helpers
{
    internal static class FinancialHelpers
    {
        public static double CalculateNOI(IEnumerable<UnderwritingAnalysisLineItem> items, double managementPercent, bool calculateManagement)
        {
            if (items is null)
                return 0;

            var gsr = items.Where(x => x.Category == UnderwritingCategory.GrossScheduledRent)
                .Sum(x => x.AnnualizedTotal);
            var vacancy = items.Where(x => x.Category == UnderwritingCategory.PhysicalVacancy)
                .Sum(x => x.AnnualizedTotal);
            var concessions = items.Where(x => x.Category == UnderwritingCategory.ConsessionsNonPayment)
                .Sum(x => x.AnnualizedTotal);
            var utilityReimbursement = items.Where(x => x.Category == UnderwritingCategory.UtilityReimbursement)
                .Sum(x => x.AnnualizedTotal);
            var otherIncome = items.Where(x => x.Category == UnderwritingCategory.OtherIncome || x.Category == UnderwritingCategory.OtherIncomeBad || x.Category == UnderwritingCategory.OtherIncomeOneTime)
                .Sum(x => x.AnnualizedTotal);

            var income = gsr - vacancy - concessions + utilityReimbursement + otherIncome;

            var taxes = items.Where(x => x.Category == UnderwritingCategory.Taxes)
                .Sum(x => x.AnnualizedTotal);
            var insurance = items.Where(x => x.Category == UnderwritingCategory.Insurance)
                .Sum(x => x.AnnualizedTotal);
            var repairsMaint = items.Where(x => x.Category == UnderwritingCategory.RepairsMaintenance)
                .Sum(x => x.AnnualizedTotal);
            var generalAdmin = items.Where(x => x.Category == UnderwritingCategory.GeneralAdmin)
                .Sum(x => x.AnnualizedTotal);
            var marketing = items.Where(x => x.Category == UnderwritingCategory.Marketing)
                .Sum(x => x.AnnualizedTotal);
            var utility = items.Where(x => x.Category == UnderwritingCategory.Utility)
                .Sum(x => x.AnnualizedTotal);
            var contractServices = items.Where(x => x.Category == UnderwritingCategory.ContractServices)
                .Sum(x => x.AnnualizedTotal);
            var payroll = items.Where(x => x.Category == UnderwritingCategory.Payroll)
                .Sum(x => x.AnnualizedTotal);
            var management = calculateManagement ? (gsr - vacancy - concessions) * managementPercent :
                items.Where(x => x.Category == UnderwritingCategory.Management)
                     .Sum(x => x.AnnualizedTotal);

            var expenses = taxes + insurance + repairsMaint + generalAdmin + marketing + utility + contractServices + payroll + management;

            return income - expenses;
        }

        public static double CalculateCapRate(double noi, double purchasePrice)
        {
            if (purchasePrice <= 0 || noi <= 0)
                return 0;

            return noi / purchasePrice;
        }

        public static double CalculateCapX(double capXbasis, CostType costType, int units, double purchasePrice)
        {
            return costType switch
            {
                CostType.PercentOfPurchase => capXbasis * purchasePrice,
                CostType.PerDoor => capXbasis * units,
                _ => capXbasis
            };
        }

        public static double CalculateCashOnCash(double noi, double raise)
        {
            return noi / raise;
        }

        public static double CalculateClosingCostOther(double annualOperatingExpenses, double insurance, double deferredMaintenance, double capXTotal, double secAttorney, double closingCostMiscellaneous)
        {
            return (annualOperatingExpenses / 6) + insurance + deferredMaintenance + capXTotal + secAttorney + closingCostMiscellaneous;
        }

        public static double CalculateClosingCostOther(IEnumerable<UnderwritingAnalysisLineItem> lineItems, double deferredMaintenance, double capXTotal, double secAttorney, double closingCostMiscellaneous)
        {
            return (AnnualOperatingExpenses(lineItems) / 6) + InsuranceTotal(lineItems) + deferredMaintenance + capXTotal + secAttorney + closingCostMiscellaneous;
        }

        public static double AnnualOperatingExpenses(IEnumerable<UnderwritingAnalysisLineItem> lineItems)
        {
            if (lineItems is null || !lineItems.Any(x => x.Category.IsOperatingExpense()))
                return 0;

            return lineItems.Where(x => x.Category.IsOperatingExpense())
                .Sum(x => x.AnnualizedTotal);
        }

        public static double InsuranceTotal(IEnumerable<UnderwritingAnalysisLineItem> lineItems)
        {
            if (lineItems is null || !lineItems.Any(x => x.Category == UnderwritingCategory.Insurance))
                return 0;

            return lineItems.Where(x => x.Category == UnderwritingCategory.Insurance)
                .Sum(x => x.AnnualizedTotal);
        }

        public static double CalculateLossToLease(double grossPotentialRent, double grossScheduledRent)
        {
            if (grossPotentialRent < grossScheduledRent || grossPotentialRent <= 0)
                return 0;

            return grossPotentialRent - grossScheduledRent;
        }

        public static double CalculateRaise(double closingCosts, double closingCostOther, double aquisitionFee, double purchasePrice, double ltv)
        {
            return closingCostOther + closingCosts + aquisitionFee + ((1 - ltv) * purchasePrice);
        }

        public static double CalculatePricePerUnit(int units, double purchasePrice)
        {
            if (units < 1)
                return 0;

            return purchasePrice / units;
        }

        public static double CalculatePricePerSqFt(int rentableSqFt, double purchasePrice)
        {
            if (rentableSqFt < 1)
                return 0;

            return purchasePrice / rentableSqFt;
        }

        public static double CalculateAquisitionFee(double percent, double purchasePrice)
        {
            return percent * purchasePrice;
        }

        public static double CalculateClosingCosts(double purchasePrice, double percent)
        {
            return percent * purchasePrice;
        }

        public static double CalculateCostPerUnit(double purchasePrice, int units)
        {
            if (units <= 0)
                return 0;

            return purchasePrice / units;
        }

        public static double CalculateDebtCoverage(double noi, double mortgageTotal)
        {
            if (noi <= 0 || mortgageTotal <= 0)
                return 0;

            return noi / mortgageTotal;
        }

        public static double CalculateTotalExpenses(double operatingExpenses, double taxes, double insurance)
        {
            return operatingExpenses + taxes + insurance;
        }

        public static double CalculateOperatingExpenses(double repairs, double generalAdmin, double management, double marketing, double utilities, double contract, double payroll)
        {
            return repairs + generalAdmin + management + marketing + utilities + contract + payroll;
        }

        public static double CalculateTotalRentalIncome(double grossScheduledRent, double concessionsNonPayment, double vacancy)
        {
            return grossScheduledRent - concessionsNonPayment - vacancy;
        }

        public static double CalculateEffectiveGrossIncome(double totalRentalIncome, double utilityReimbursement, double otherIncome)
        {
            return totalRentalIncome + utilityReimbursement + otherIncome; ;
        }

        public static double GetSum(IEnumerable<UnderwritingAnalysisLineItem> ledger, params UnderwritingCategory[] categories)
        {
            var items = ledger.Where(x => categories.Any(c => c == x.Category));
            var total = items.Sum(l => l.AnnualizedTotal);
            return total;
        }

        public static double CalculateNetPresentValue(IEnumerable<UnderwritingAnalysisProjection> projections, UnderwritingAnalysis.PropertyInfo info)
        {
            var cashFlow = projections.Sum(x => x.TotalCashFlow);
            if(info.DesiredYield <= 0 || cashFlow == 0 || info.Raise == 0)
                return 0;

            var holdMonths = (info.Hold * 12) + (12 - info.Start.Month);
            return (cashFlow / Math.Pow(1 + info.DesiredYield, holdMonths)) - info.Raise;
        }

        public static double CalculateInternalRateOfReturn(IEnumerable<UnderwritingAnalysisProjection> projections, UnderwritingAnalysis.PropertyInfo info)
        {
            if (info.Raise == 0 || projections.All(x => x.TotalCashFlow == 0))
                return 0;

            var cashFlows = new double[projections.Count() + 1];
            cashFlows[0] = info.Raise * -1;
            for(var i = 0; i < projections.Count(); i++)
                cashFlows[i + 1] = projections.ElementAt(i).TotalCashFlow;

            var yield = 0.1;
            //while(yield > 0.01)
            //{
            //    try
            //    {
            //        return Financial.IRR(ref cashFlows, yield);
            //    }
            //    catch
            //    {
            //        yield -= 0.01;
            //    }
            //}

            return -1;
        }
    }
}
