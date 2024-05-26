using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.Data.Models
{
    public class Post
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        public string Slug { get; set; }

        [Required]
        public string Title { get; set; }

        [MinLength(20)]
        [MaxLength(155)]
        public string Description { get; set; }

        [Required]
        public string Summary { get; set; }

        [Required]
        public string Content { get; set; }

        [Required]
        public string SocialImage { get; set; }

        public string AuthorId { get; set; }

        public DateTimeOffset Created { get; set; }

        public DateTimeOffset Published { get; set; }

        public DateTimeOffset LastModified { get; set; }

        public bool IsPublished { get; set; }

        public SiteUser Author { get; set; }

        public virtual ICollection<Category> Categories { get; set; }

        public virtual ICollection<Tag> Tags { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }

        public virtual ICollection<PostView> Views { get; set; }

        public virtual ICollection<Subscriber> Subscribers { get; set; }
    }
}
