using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MultiFamilyPortal.Data.Models
{
    public class CRMContactLog
    {
        public CRMContactLog() { }

        [JsonConstructor]
        public CRMContactLog(Guid id, Guid contactId, string notes, DateTimeOffset timestamp)
        {
            Id = id;
            ContactId = contactId;
            Notes = notes;
            _timestamp = timestamp;
        }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public Guid ContactId { get; set; }

        public string Notes { get; set; }

        public string UserId { get; set; }

        private DateTimeOffset _timestamp = DateTimeOffset.Now;
        public DateTimeOffset Timestamp => _timestamp;

        [JsonIgnore]
        public CRMContact Contact { get; set; }
    }
}
