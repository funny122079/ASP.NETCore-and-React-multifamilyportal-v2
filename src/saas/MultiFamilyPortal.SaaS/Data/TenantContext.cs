using Microsoft.EntityFrameworkCore;
using MultiFamilyPortal.SaaS.Models;

namespace MultiFamilyPortal.SaaS.Data
{
    public class TenantContext : DbContext
    {
        public TenantContext(DbContextOptions<TenantContext> options)
            : base(options)
        {
        }

        public DbSet<Tenant> Tenants { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Tenant>(builder =>
            {
                builder.Property(x => x.Id)
                    .ValueGeneratedOnAdd();
                builder.HasIndex(x => x.Host)
                    .IsUnique();
            });
        }
    }
}
