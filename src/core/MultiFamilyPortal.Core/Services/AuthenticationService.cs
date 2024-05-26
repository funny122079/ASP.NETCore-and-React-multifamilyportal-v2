using System.Text;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using MultiFamilyPortal.Data.Models;
using MultiFamilyPortal.Dtos;

namespace MultiFamilyPortal.Services
{
    internal class AuthenticationService : IAuthenticationService
    {
        private UserManager<SiteUser> _userManager { get; }
        private NavigationManager _navigationManager { get; }

        public AuthenticationService(UserManager<SiteUser> userManager, NavigationManager navigationManager)
        {
            _userManager = userManager;
            _navigationManager = navigationManager;
        }

        public async Task ForgotPassword(ForgotPasswordRequest request)
        {
            var user = await _userManager.FindByEmailAsync(request.Email);
            if (user == null || !(await _userManager.IsEmailConfirmedAsync(user)))
            {
                // Don't reveal that the user does not exist or is not confirmed
                return;
            }

            // For more information on how to enable account confirmation and password reset please
            // visit https://go.microsoft.com/fwlink/?LinkID=532713
            var code = await _userManager.GeneratePasswordResetTokenAsync(user);
            code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
            var baseUri = new Uri(_navigationManager.BaseUri);
            var callbackUrl = new Uri(baseUri, $"account/reset-password/{code}");

            //await _emailSender.SendEmailAsync(Input.Email, "Reset Password", $"Please reset your password by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>.");
        }
    }
}
