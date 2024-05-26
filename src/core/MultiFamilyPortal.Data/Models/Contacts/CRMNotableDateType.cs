using MultiFamilyPortal.Data.ComponentModel;

namespace MultiFamilyPortal.Data.Models
{
    public enum CRMNotableDateType
    {
        [KnownRecurrance(false)]
        Wedding,

        [KnownRecurrance(true)]
        SpousalAnniversary,

        [KnownRecurrance(true)]
        ChildsBirthday,

        [KnownRecurrance(false)]
        Graduation,

        [KnownRecurrance(true)]
        BusinessAniversary,

        Other
    }
}
