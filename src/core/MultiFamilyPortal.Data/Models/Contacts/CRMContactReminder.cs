using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MultiFamilyPortal.Data.Models
{
    public class CRMContactReminder
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public Guid ContactId { get; set; }

        public DateTime Date { get; set; }

        public string Description { get; set; }

        public bool SystemGenerated { get; set; }

        public bool Dismissed { get; set; }

        [JsonIgnore]
        public CRMContact Contact { get; set; }
    }
}
