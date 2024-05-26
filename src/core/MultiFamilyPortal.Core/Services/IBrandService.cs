using Microsoft.AspNetCore.Http;

namespace MultiFamilyPortal.Services
{
    public interface IBrandService
    {
        Task CreateDefaultIcons();
        Task CreateIcons(Stream stream, string name);
        Task CreateBrandImage(IFormFile file, string name);

        Task<Stream> GetIcon(string name);
        Task<(Stream Stream, string MimeType, string FileName)> GetBrandImage(string name);
    }
}
