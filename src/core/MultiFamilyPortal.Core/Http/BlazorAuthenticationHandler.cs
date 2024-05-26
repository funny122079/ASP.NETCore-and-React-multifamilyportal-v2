using System.Net.Http.Headers;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;

namespace MultiFamilyPortal.Http
{
    public class BlazorAuthenticationHandler : HttpClientHandler
    {
        private IHttpContextAccessor _contextAccessor { get; }
        private HttpContext HttpContext => _contextAccessor.HttpContext;

        public BlazorAuthenticationHandler(IHttpContextAccessor httpContextAccessor)
        {
            _contextAccessor = httpContextAccessor;
            AllowAutoRedirect = false;
        }

        protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            if(HttpContext != null)
            {
                if (HttpContext.Request.Headers.TryGetValue("Cookie", out var cookieHeader))
                {
                    request.Headers.Add("Cookie", cookieHeader.AsEnumerable<string>());
                }

                var accessToken = await HttpContext.GetTokenAsync("access_token");
                if (!string.IsNullOrEmpty(accessToken))
                {
                    request.Headers.Authorization = new AuthenticationHeaderValue("BEARER", accessToken);
                }
            }

            return await base.SendAsync(request, cancellationToken);
        }
    }
}
