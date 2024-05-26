using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using MultiFamilyPortal.Data.Models;

namespace MultiFamilyPortal.Data.Internals;

public interface IBaseContext : IDisposable
{
    DbSet<SiteUser> Users { get; }
    DbSet<IdentityUserRole<string>> UserRoles { get; }
    DbSet<IdentityRole> Roles { get; }
    DbSet<Setting> Settings { get; }

    int SaveChanges();
    EntityEntry<TEntity> Add<TEntity>(TEntity entity) where TEntity : class;
    ValueTask<EntityEntry<TEntity>> AddAsync<TEntity>(TEntity entity, CancellationToken cancellationToken = default) where TEntity : class;
    void AddRange(params object[] entities);
    Task AddRangeAsync(params object[] entities);
    EntityEntry<TEntity> Remove<TEntity>(TEntity entity) where TEntity : class;
    EntityEntry<TEntity> Update<TEntity>(TEntity entity) where TEntity : class;
    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default);

    T GetSetting<T>(string key, T defaultValue = default)
    {
        var setting = Settings.FirstOrDefault(x => x.Key == key);
        if (setting is null)
            return defaultValue;

        return setting.As<T>(defaultValue);
    }

    async Task<T> GetSettingAsync<T>(string key, T defaultValue = default)
    {
        var setting = await Settings.FirstOrDefaultAsync(x => x.Key == key);
        if (setting is null)
            return defaultValue;

        return setting.As<T>(defaultValue);
    }
}
