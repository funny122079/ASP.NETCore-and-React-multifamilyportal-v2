using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MultiFamilyPortal.Data.Models
{
    public class CRMContactAddress
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public Guid ContactId { get; set; }

        public string Address1 { get; set; }

        public string Address2 { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string PostalCode { get; set; }

        public bool Primary { get; set; }

        public CRMContactAddressType Type { get; set; }

        [JsonIgnore]
        public CRMContact Contact { get; set; }
    }
}
