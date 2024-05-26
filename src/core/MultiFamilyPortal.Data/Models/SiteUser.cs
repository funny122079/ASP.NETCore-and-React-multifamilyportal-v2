using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace MultiFamilyPortal.Data.Models
{
    public class SiteUser : IdentityUser
    {
        public SiteUser()
        {
        }

        public SiteUser(string userName)
            : base(userName)
        {
        }

        [MaxLength(30)]
        public string FirstName { get; set; }

        [MaxLength(40)]
        public string LastName { get; set; }

        [NotMapped]
        public string DisplayName => $"{FirstName} {LastName}".Trim();

        [MaxLength(40)]
        public string Title { get; set; }

        public string Bio { get; set; }

        public UnderwriterGoal Goals { get; set; }

        public virtual ICollection<ActivityLog> ActivityLogs { get; set; }

        public virtual ICollection<AssetParner> Assets { get; set; }

        public virtual ICollection<Post> Posts { get; set; }

        public virtual ICollection<UnderwritingProspectProperty> ProspectProperties { get; set; }

        public virtual ICollection<SocialLink> SocialLinks { get; set; }
    }
}
