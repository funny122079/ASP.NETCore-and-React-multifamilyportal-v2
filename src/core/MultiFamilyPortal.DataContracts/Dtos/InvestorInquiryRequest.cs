using System.ComponentModel.DataAnnotations;

namespace MultiFamilyPortal.Dtos
{
    public class InvestorInquiryRequest
    {
        [Required]
        [MinLength(2)]
        [MaxLength(25)]
        public string FirstName { get; set; }

        [Required]
        [MinLength(2)]
        [MaxLength(25)]
        public string LastName { get; set; }

        [Required]
        [MinLength(10)]
        [MaxLength(15)]
        public string Phone { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        public string Timezone { get; set; }

        [Required]
        [Range(10000.0, 100000000.0)]
        public double? LookingToInvest { get; set; }


        [MinLength(10, ErrorMessage = "Please let use know about what type of investments you are looking to invest in, or questions that you may have.")]
        public string Comments { get; set; }
    }
}
