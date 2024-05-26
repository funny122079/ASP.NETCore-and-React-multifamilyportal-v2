using System.ComponentModel.DataAnnotations;

namespace MultiFamilyPortal.Data.Models
{
    public enum UnderwritingPropertyUnitLedgerType
    {
        Rent,
        MTM,
        [Display(Name = "Water/Sewer")]
        Water,
        Electric,
        Admin,
        Vacant
    }
}
