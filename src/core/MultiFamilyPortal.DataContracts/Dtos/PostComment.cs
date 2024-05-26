using System.ComponentModel.DataAnnotations;

namespace MultiFamilyPortal.Dtos
{
    public class PostComment
    {
        [Required]
        public string Name { get; set; }

        [Required]
        [MinLength(20)]
        [MaxLength(500)]
        public string Comment { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
