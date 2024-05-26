using System.ComponentModel.DataAnnotations;
using System.Net;

namespace MultiFamilyPortal.Data.Models
{
    public class Comment
    {
        public Guid Id { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MaxLength(120)]
        public string Name { get; set; }

        [Required]
        [MaxLength(400)]
        public string Content { get; set; }

        // Viewed in the Admin Portal
        public bool Moderated { get; set; }

        public bool Banned { get; set; }

        private DateTimeOffset _timestamp = DateTimeOffset.UtcNow;
        public DateTimeOffset Timestamp => _timestamp;

        public IPAddress IpAddress { get; set; }

        public string Type { get; set; }

        public string Continent { get; set; }

        public string Country { get; set; }

        public string Region { get; set; }

        public string City { get; set; }

        public Guid PostId { get; set; }

        public Post Post { get; set; }
    }
}
