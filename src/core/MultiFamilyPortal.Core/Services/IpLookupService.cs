using System.Net;
using System.Text.Json;
using MultiFamilyPortal.Dtos;

namespace MultiFamilyPortal.Services
{
    public sealed class IpLookupService : IIpLookupService, IDisposable
    {
        private bool _disposedValue;
        private HttpClient _client { get; }

        public IpLookupService()
        {
            _client = new HttpClient {
                BaseAddress = new Uri("https://iprelay.azurewebsites.net/")
            };
        }

        public async Task<IpData> LookupAsync(IPAddress ip, string host)
        {
            using var requestMessage = new HttpRequestMessage(HttpMethod.Get, $"/lookup/ip/{ip}");
            requestMessage.Headers.Add("X-HostApp", host);
            using var response = await _client.SendAsync(requestMessage);
            var json = await response.Content.ReadAsStringAsync();
            return JsonSerializer.Deserialize<IpData>(json);
        }

        private void Dispose(bool disposing)
        {
            if (!_disposedValue)
            {
                if (disposing)
                {
                    _client.Dispose();
                }

                _disposedValue = true;
            }
        }

        public void Dispose()
        {
            // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
            Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }
    }
}
