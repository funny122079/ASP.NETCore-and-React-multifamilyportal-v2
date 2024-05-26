using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using MultiFamilyPortal.SaaS.Models;

namespace MultiFamilyPortal.SaaS.Data;

public class TenantContext(IConfiguration configuration) : DbContext()
{
    public DbSet<Tenant> Tenants { get; set; } = null!;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(configuration.GetConnectionString("DefaultConnection"), x =>
        {
            x.MigrationsAssembly(GetType().Assembly.FullName);
        });
    }

#if DEBUG
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Tenant>()
            .HasData(new Tenant
            {
                Id = new Guid("7285abc4-fd5b-4436-a9de-4a951410eefa"),
                Host = "localhost",
                DatabaseSchema = "local",
            },
            new Tenant
            {
                Id = new Guid("c04cd58c-39bf-4567-abff-8cdf6a46e87b"),
                Host = "quarterdemo",
                DatabaseSchema = "quarter"
            },
            new Tenant
            {
                Id = new Guid("983d007d-1f68-468a-80d9-3cf58e1c46cf"),
                Host = "homyredemo",
                DatabaseSchema = "homyre"
            },
            new Tenant
            {
                Id = new Guid("6c060c90-0c7e-4e36-b419-0224ba6f21da"),
                Host = "underwriter",
                DatabaseSchema = "underwriter"
            },
            new Tenant
            {
                Id = new Guid("5946dcc3-c62e-44c0-b994-8cf2591910f5"),
                Host = "mfpdisabled",
                DatabaseSchema = "mfpdisabled"
            });
    }
#endif
}
