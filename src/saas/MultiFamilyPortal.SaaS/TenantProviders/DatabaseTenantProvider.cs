using System.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using MultiFamilyPortal.SaaS.Data;
using MultiFamilyPortal.SaaS.Models;

namespace MultiFamilyPortal.SaaS.TenantProviders
{
    internal class DatabaseTenantProvider : ITenantProvider
    {
        private TenantContext _dbContext { get; }
        private ILogger _logger { get; }
        private IHttpContextAccessor _contextAccessor { get; }
        private IWebHostEnvironment _hostEnvironment { get; }
        private TenantCache _cache { get; }
        private ITenantAccessor _tenant { get; }

        public DatabaseTenantProvider(TenantContext dbContext,
            ILogger<DatabaseTenantProvider> logger,
            IHttpContextAccessor contextAccessor,
            IWebHostEnvironment hostEnvironment,
            ITenantAccessor tenant,
            TenantCache cache)
        {
            _dbContext = dbContext;
            _logger = logger;
            _contextAccessor = contextAccessor;
            _cache = cache;
            _hostEnvironment = hostEnvironment;
            _tenant = tenant;
        }

        public Tenant GetTenant()
        {
            if (_tenant.Current is not null)
                return _tenant.Current;

            else if (_contextAccessor.HttpContext is null)
            {
                var st = new StackTrace();
                var message = st.ToString();
                _logger.LogWarning("GetTenant() called while HttpContext is null.");
                _logger.LogDebug(message);
                return null;
            }

            return GetTenant(_contextAccessor.HttpContext.Request.Host.Host);
        }

        public Tenant GetTenant(string host)
        {
            if (_tenant.Current is not null && _tenant.Current.Host == host)
                return _tenant.Current;

            if (string.IsNullOrWhiteSpace(host))
            {
                _logger.LogWarning("The host provided is null or empty.");
                return null;
            }

            _tenant.Current = _cache.Get(host);
            if(_tenant.Current is null)
            {
                _tenant.Current = _dbContext.Tenants.FirstOrDefault(x => x.Host == host && x.Environment == _hostEnvironment.EnvironmentName);
                if (_tenant.Current is null)
                    _logger.LogWarning($"No tenant could be found for {host}");
                else
                    _cache.Add(host, _tenant.Current);
            }

            return _tenant.Current;
        }
    }
}
