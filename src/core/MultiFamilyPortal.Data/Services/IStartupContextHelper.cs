using Microsoft.AspNetCore.Identity;
using MultiFamilyPortal.Data.Models;
using MultiFamilyPortal.SaaS.Models;

namespace MultiFamilyPortal.Data.Services
{
    public interface IStartupContextHelper
    {
        Task RunStartupTask(Func<Tenant, IServiceProvider, Task> action);
        Task RunDatabaseAction(Func<MFPContext, Tenant, Task> action);
        Task RunRoleManagerAction(Func<RoleManager<IdentityRole>, Tenant, Task> action);
        Task RunUserManagerAction(Func<UserManager<SiteUser>, Tenant, IServiceProvider, Task> action);
    }
}
