using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace MultiFamilyPortal.Dtos
{
    public class LoginRequest
    {
        [EmailAddress]
        [JsonPropertyName("username")]
        public string Email { get; set; }

        [MinLength(6)]
        [JsonPropertyName("password")]
        public string Password { get; set; }

        [JsonPropertyName("rememberMe")]
        public bool? RememberMe { get; set; }
    }
}
