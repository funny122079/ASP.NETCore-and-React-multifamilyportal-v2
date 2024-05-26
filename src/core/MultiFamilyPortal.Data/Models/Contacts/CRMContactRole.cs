using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MultiFamilyPortal.Data.Models
{
    public class CRMContactRole
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public string Name { get; set; }

        public bool CoreTeam { get; set; }

        public bool SystemDefined { get; set; }

        [JsonIgnore]
        public virtual ICollection<CRMContact> Contacts { get; set; }
    }
}
