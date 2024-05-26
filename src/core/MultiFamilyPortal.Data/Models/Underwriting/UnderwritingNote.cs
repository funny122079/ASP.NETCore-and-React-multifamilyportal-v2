using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MultiFamilyPortal.Data.Models
{
    public class UnderwritingNote
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public Guid PropertyId { get; set; }

        [Required]
        public string Note { get; set; }

        public string UnderwriterId { get; set; }

        private DateTimeOffset _timestamp = DateTimeOffset.Now;
        public DateTimeOffset Timestamp => _timestamp;

        public SiteUser Underwriter { get; set; }

        [JsonIgnore]
        public UnderwritingProspectProperty Property { get; set; }
    }
}
