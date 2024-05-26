using MultiFamilyPortal.SaaS.Models;

namespace MultiFamilyPortal.SaaS.Services;

public class TenantAccessor : ITenantAccessor
{
    public Tenant? Current { get; set; }
}