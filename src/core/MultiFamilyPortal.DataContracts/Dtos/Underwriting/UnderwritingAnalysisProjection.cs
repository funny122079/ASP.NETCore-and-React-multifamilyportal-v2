namespace MultiFamilyPortal.Dtos
{
    public record UnderwritingAnalysisProjection
    {
        public int Year { get; init; }

        public double GrossScheduledRent { get; init; }

        public double Vacancy { get; init; } 

        public double ConcessionsNonPayment { get; init; }

        public double UtilityReimbursement { get; init; }

        public double OtherIncome { get; init; }

        public double Taxes { get; init; }

        public double Insurance { get; init; }

        public double RepairsMaintenance { get; init; }

        public double GeneralAdmin { get; init; }

        public double Marketing { get; init; }

        public double ContractServices { get; init; }

        public double Payroll { get; init; }

        public double Management { get; init; }

        public double EffectiveGrossIncome =>
            GrossScheduledRent - Vacancy - ConcessionsNonPayment + UtilityReimbursement + OtherIncome;

        public double OperatingExpenses =>
            Taxes + Insurance + RepairsMaintenance + GeneralAdmin + Marketing + ContractServices + Payroll + Management;

        public double NetOperatingIncome =>
            EffectiveGrossIncome - OperatingExpenses;

        public double CapitalReserves { get; init; }

        public double CashFlowBeforeDebtService =>
            NetOperatingIncome - CapitalReserves;

        public double RemainingDebt { get; init; }

        public double DebtService { get; init; }

        public double TotalCashFlow => CashFlowBeforeDebtService - DebtService;

        public double SalesPrice { get; init; }

        public double Equity => SalesPrice - RemainingDebt;
    }
}
