using MultiFamilyPortal.Data.Services;

namespace MultiFamilyPortal.Data.Internals;

public class DbContextStartupTask(IStartupContextHelper contextHelper, DatabaseContextSeeder seeder) : IStartupTask
{
    public async Task StartAsync()
    {
        await contextHelper.RunDatabaseAction(seeder.SeedAsync);
    }
}
