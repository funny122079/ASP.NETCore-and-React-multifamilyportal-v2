using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MultiFamilyPortal.Data.Models
{
    public class CRMContactPhone
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public Guid ContactId { get; set; }

        public string Number { get; set; }

        public CRMContactPhoneType Type { get; set; }

        public bool Primary { get; set; }

        [JsonIgnore]
        public CRMContact Contact { get; set; }
    }
}
