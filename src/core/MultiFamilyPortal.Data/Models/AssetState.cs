using System.ComponentModel.DataAnnotations;

namespace MultiFamilyPortal.Data.Models
{
    public enum AssetState
    {
        [Display(Name = "Under Contract")]
        UnderContract,

        [Display(Name = "Under Management")]
        UnderManagement,

        [Display(Name = "For Sale")]
        ForSale,

        Sold
    }
}
