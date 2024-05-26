using Microsoft.EntityFrameworkCore;
using MultiFamilyPortal.Data.Internals;
using MultiFamilyPortal.Data.Models;

namespace MultiFamilyPortal.Data
{
    public interface ICRMContext : IBaseContext
    {
        DbSet<CRMContact> CrmContacts { get; }
        DbSet<CRMContactAddress> CrmContactAddresses { get; }
        DbSet<CRMContactEmail> CrmContactEmails { get; }
        DbSet<CRMContactLog> CrmContactLogs { get; }
        DbSet<CRMContactMarket> CrmContactMarkets { get; }
        DbSet<CRMContactPhone> CrmContactPhones { get; }
        DbSet<CRMContactReminder> CrmContactReminders { get; }
        DbSet<CRMContactRole> CrmContactRoles { get; }
        DbSet<CRMNotableDate> CrmNotableDates { get; }

        DbSet<InvestorProspect> InvestorProspects { get; }
    }
}
