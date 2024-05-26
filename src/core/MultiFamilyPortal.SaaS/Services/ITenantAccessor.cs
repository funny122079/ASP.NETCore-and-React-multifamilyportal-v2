using MultiFamilyPortal.SaaS.Models;

namespace MultiFamilyPortal.SaaS.Services;

public interface ITenantAccessor
{
    Tenant? Current { get; set; }
}
