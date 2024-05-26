using MultiFamilyPortal.Dtos.Underwriting;

namespace MultiFamilyPortal.Services
{
    public interface IUnderwritingService
    {
        Task<UnderwritingAnalysis> GetUnderwritingAnalysis(Guid propertyId);
        Task<UnderwritingAnalysis> UpdateProperty(Guid propertyId, UnderwritingAnalysis analysis, string email);
    }
}
