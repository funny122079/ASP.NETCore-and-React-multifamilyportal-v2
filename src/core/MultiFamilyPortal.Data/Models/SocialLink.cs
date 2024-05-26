using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MultiFamilyPortal.Data.Models
{
    public class SocialLink
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        public string UserId { get; set; }

        public int SocialProviderId { get; set; }

        public string Value { get; set; }

        public SocialProvider SocialProvider { get; set; }

        [JsonIgnore]
        public SiteUser User { get; set; }

        [NotMapped]
        public Uri Uri => string.IsNullOrEmpty(SocialProvider?.UriTemplate) ? null : new Uri(string.Format(SocialProvider.UriTemplate, Value));
    }
}
