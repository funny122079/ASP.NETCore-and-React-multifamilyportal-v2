namespace MultiFamilyPortal.SaaS.Data
{
    public interface IMultiTenantDbContext
    {
        int TenantId { get; }
    }
}
