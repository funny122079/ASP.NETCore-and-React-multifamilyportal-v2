using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.Data.Models
{
    public class CRMContact
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public Guid? UserId { get; set; }

        public string Prefix { get; set; }

        public string FirstName { get; set; }

        public string MiddleName { get; set; }

        public string LastName { get; set; }

        public string Suffix { get; set; }

        public string Company { get; set; }

        public string Title { get; set; }

        public DateTime? DoB { get; set; }

        public string MarketNotes { get; set; }

        public string LicenseNumber { get; set; }

        public virtual ICollection<CRMContactMarket> Markets { get; set; }

        public virtual ICollection<CRMContactRole> Roles { get; set; }

        public virtual ICollection<CRMContactEmail> Emails { get; set; }

        public virtual ICollection<CRMContactPhone> Phones { get; set; }

        public virtual ICollection<CRMContactAddress> Addresses { get; set; }

        public virtual ICollection<CRMContactReminder> Reminders { get; set; }

        public virtual ICollection<CRMContactLog> Logs { get; set; }

        public virtual ICollection<CRMNotableDate> NotableDates { get; set; }
    }
}
