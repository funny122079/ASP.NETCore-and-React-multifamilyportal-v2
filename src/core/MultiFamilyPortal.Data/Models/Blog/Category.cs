using System.ComponentModel.DataAnnotations;

namespace MultiFamilyPortal.Data.Models
{
    public class Category
    {
        [MaxLength(40)]
        public string Id { get; set; } = default!;

        public List<Post> Posts { get; }
    }
}
