using System.Net;
using MultiFamilyPortal.Dtos;

namespace MultiFamilyPortal.Services
{
    public interface IIpLookupService
    {
        Task<IpData> LookupAsync(IPAddress ip, string host);
    }
}
