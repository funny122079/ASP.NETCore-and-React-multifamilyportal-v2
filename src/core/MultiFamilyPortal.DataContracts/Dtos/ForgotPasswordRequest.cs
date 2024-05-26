using System.ComponentModel.DataAnnotations;

namespace MultiFamilyPortal.Dtos
{
    public class ForgotPasswordRequest
    {
        [EmailAddress]
        [Required]
        public string Email { get; set; }
    }
}
