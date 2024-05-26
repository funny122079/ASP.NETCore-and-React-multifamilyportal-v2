using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.Data.Models
{
    public class InvestorTestimonial
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [MaxLength(65)]
        public string Name { get; set; }

        [MaxLength(30)]
        public string Title { get; set; }

        public string PhotoUrl { get; set; }

        public string Testimonial { get; set; }

        [Range(0, 5)]
        public int Stars { get; set; }

        public bool Active { get; set; }

        private DateTimeOffset _timestamp = DateTimeOffset.Now;
        public DateTimeOffset Timestamp => _timestamp;
    }
}
