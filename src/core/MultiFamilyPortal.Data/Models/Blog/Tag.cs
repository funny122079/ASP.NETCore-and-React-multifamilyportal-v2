using System.ComponentModel.DataAnnotations;

namespace MultiFamilyPortal.Data.Models
{
    public class Tag
    {
        [MaxLength(40)]
        public string Id { get; set; }

        public List<Post> Posts { get; set; }
    }
}
