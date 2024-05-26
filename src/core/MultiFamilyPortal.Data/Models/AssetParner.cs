namespace MultiFamilyPortal.Data.Models
{
    public class AssetParner
    {
        public Guid AssetId { get; set; } = default!;

        public string PartnerId { get; set; } = default!;

        public AssetPartnerRole Role { get; set; }

        public double Equity { get; set; }

        public SiteUser Partner { get; set; }

        public AssetUnderManagement Asset { get; set; }
    }
}
