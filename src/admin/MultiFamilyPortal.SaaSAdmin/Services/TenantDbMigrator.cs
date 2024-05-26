using Microsoft.EntityFrameworkCore;
using MultiFamilyPortal.SaaS.Data;
using MultiFamilyPortal.SaaS.Models;
using System.Text.RegularExpressions;

namespace MultiFamilyPortal.SaaSAdmin.Services;

public class TenantDbMigrator(TenantContext context, IConfiguration configuration) : IDisposable
{
    private static readonly string SqlTemplate;
    private bool disposedValue;

    static TenantDbMigrator()
    {
        var sqlResourceName = typeof(TenantDbMigrator).Assembly.GetManifestResourceNames().Single(x => x.EndsWith(".sql", StringComparison.InvariantCultureIgnoreCase)); ;
        using var sqlResource = typeof(TenantDbMigrator).Assembly.GetManifestResourceStream(sqlResourceName);
        ArgumentNullException.ThrowIfNull(sqlResource);
        using var reader = new StreamReader(sqlResource);
        SqlTemplate = reader.ReadToEnd();
    }

    public async Task CreateDatabase(Tenant tenant)
    {
        var sql = Regex.Replace(SqlTemplate, "SchemaToken", tenant.DatabaseSchema);
        using var transaction = context.Database.BeginTransaction();
        await context.Database.ExecuteSqlRawAsync(sql);
        await transaction.CommitAsync();
    }

    protected virtual void Dispose(bool disposing)
    {
        if (!disposedValue)
        {
            if (disposing)
            {
                context.Dispose();
            }

            // TODO: free unmanaged resources (unmanaged objects) and override finalizer
            // TODO: set large fields to null
            disposedValue = true;
        }
    }

    // // TODO: override finalizer only if 'Dispose(bool disposing)' has code to free unmanaged resources
    // ~TenantDbMigrator()
    // {
    //     // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
    //     Dispose(disposing: false);
    // }

    public void Dispose()
    {
        // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
        Dispose(disposing: true);
        GC.SuppressFinalize(this);
    }
}
