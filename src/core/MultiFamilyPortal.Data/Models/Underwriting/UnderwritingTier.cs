using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.Data.Models
{
    public class UnderwritingTier
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public Guid PropertyId { get; set; }

        public string Group { get; set; }

        public string Name { get; set; }

        public double Investment { get; set; }

        public double PreferredRoR { get; set; }

        public double RoROnSale { get; set; }

        public UnderwritingProspectProperty Property { get; set; }
    }
}
