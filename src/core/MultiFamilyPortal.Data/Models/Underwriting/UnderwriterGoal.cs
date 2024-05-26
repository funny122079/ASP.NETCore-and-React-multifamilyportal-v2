using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MultiFamilyPortal.Data.Models
{
    public class UnderwriterGoal
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        public string UnderwriterId { get; set; }

        public int PropertiesUnderwritten { get; set; } = 5;

        public int LOISubmitted { get; set; } = 1;

        public int BrokersContacted { get; set; } = 2;

        public int InvestorsContacted { get; set; } = 2;

        [JsonIgnore]
        public SiteUser Underwriter { get; set; }
    }
}
