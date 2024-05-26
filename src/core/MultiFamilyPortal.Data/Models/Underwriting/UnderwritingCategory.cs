using System.ComponentModel.DataAnnotations;
using MultiFamilyPortal.Data.ComponentModel;

namespace MultiFamilyPortal.Data.Models
{
    public enum UnderwritingCategory
    {
        // Income
        [UnderwritingType(UnderwritingType.Income)]
        [Display(Name = "Gross Scheduled Rent")]
        GrossScheduledRent,

        [UnderwritingType(UnderwritingType.Income)]
        [Display(Name = "Physical Vacancy")]
        PhysicalVacancy,

        [UnderwritingType(UnderwritingType.Income)]
        [Display(Name = "Concessions / Non-Payment")]
        ConsessionsNonPayment,

        [UnderwritingType(UnderwritingType.Income)]
        [Display(Name = "Utility Reimbursement")]
        UtilityReimbursement,

        [UnderwritingType(UnderwritingType.Income)]
        [Display(Name = "Other Income")]
        OtherIncome,

        [UnderwritingType(UnderwritingType.Income)]
        [Display(Name = "Other Income (Bad)")]
        OtherIncomeBad,

        [UnderwritingType(UnderwritingType.Income)]
        [Display(Name = "Other Income (One Time)")]
        OtherIncomeOneTime,

        // Expenses
        [UnderwritingType(UnderwritingType.Expense)]
        [Display(Name = "Taxes")]
        Taxes,

        [UnderwritingType(UnderwritingType.Expense)]
        [Display(Name = "Insurance")]
        Insurance,

        [UnderwritingType(UnderwritingType.Expense, true)]
        [Display(Name = "Repairs / Maintenance")]
        RepairsMaintenance,

        [UnderwritingType(UnderwritingType.Expense, true)]
        [Display(Name = "General / Admin")]
        GeneralAdmin,

        [UnderwritingType(UnderwritingType.Expense, true)]
        [Display(Name = "Management")]
        Management,

        [UnderwritingType(UnderwritingType.Expense, true)]
        [Display(Name = "Marketing")]
        Marketing,

        [UnderwritingType(UnderwritingType.Expense, true)]
        [Display(Name = "Utility")]
        Utility,

        [UnderwritingType(UnderwritingType.Expense, true)]
        [Display(Name = "Contract Services")]
        ContractServices,

        [UnderwritingType(UnderwritingType.Expense, true)]
        [Display(Name = "Payroll")]
        Payroll
    }
}
