using Microsoft.Extensions.DependencyInjection;
using MultiFamilyPortal.Data.Services;

namespace MultiFamilyPortal.Services
{
    internal class BrandStartupTask : IStartupTask
    {
        private IStartupContextHelper _startup { get; }

        public BrandStartupTask(IStartupContextHelper startup)
        {
            _startup = startup;
        }

        public async Task StartAsync()
        {
            await _startup.RunStartupTask((tenant, services) =>
            {
                var brand = services.GetRequiredService<IBrandService>();
                return brand.CreateDefaultIcons();
            });
        }
    }
}
