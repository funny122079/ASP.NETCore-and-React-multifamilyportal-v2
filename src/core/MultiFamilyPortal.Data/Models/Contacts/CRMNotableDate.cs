using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MultiFamilyPortal.Data.Models
{
    public class CRMNotableDate
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public Guid ContactId { get; set; }

        public string Description { get; set; }

        public DateTime Date { get; set; }

        public CRMNotableDateType Type { get; set; }

        public bool Recurring { get; set; }

        public bool DismissReminders { get; set; }

        [JsonIgnore]
        public CRMContact Contact { get; set; }
    }
}
