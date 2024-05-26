using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.Data.Models
{
    public class AssetUnderManagement
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string State { get; set; }

        [Required]
        public string Zip { get; set; }

        public double PurchasePrice { get; set; }

        public double? SalesPrice { get; set; }

        public int Units { get; set; }

        public bool Highlighted { get; set; }

        public AssetState Status { get; set; }

        public AssetInvestorState InvestorState { get; set; }

        public Guid? UnderwritingId { get; set; }

        private DateTimeOffset _timestamp = DateTimeOffset.Now;
        public DateTimeOffset Timestamp => _timestamp;

        public virtual ICollection<AssetParner> Partners { get; set; }
    }
}
