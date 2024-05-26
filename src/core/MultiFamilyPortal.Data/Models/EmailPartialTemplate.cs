using System.ComponentModel.DataAnnotations;

namespace MultiFamilyPortal.Data.Models
{
    public class EmailPartialTemplate
    {
        [Required]
        public string Key { get; set; }

        public string Content { get; set; }
    }


}
