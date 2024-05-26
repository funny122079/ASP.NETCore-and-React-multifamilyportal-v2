using System.ComponentModel.DataAnnotations;

namespace MultiFamilyPortal.Data.Models
{
    public enum CRMContactPhoneType
    {
        Mobile,

        Home,

        Work,

        School,

        iPhone,

        Main,

        [Display(Name = "Home Fax")]
        HomeFax,

        [Display(Name = "Work Fax")]
        WorkFax,

        Pager,

        Other
    }
}
