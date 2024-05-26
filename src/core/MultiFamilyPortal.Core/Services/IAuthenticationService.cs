using MultiFamilyPortal.Dtos;

namespace MultiFamilyPortal.Services
{
    public interface IAuthenticationService
    {
        Task ForgotPassword(ForgotPasswordRequest request);
    }
}