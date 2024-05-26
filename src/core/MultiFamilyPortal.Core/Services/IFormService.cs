using MultiFamilyPortal.Dtos;

namespace MultiFamilyPortal.Services
{
    public interface IFormService
    {
        NewsletterSubscriberRequest SignupModel { get; }

        ContactFormRequest ContactForm { get; }

        InvestorInquiryRequest InvestorInquiry { get; }

        Task<FormResult> SubmitSubscriberSignup();

        Task<FormResult> SubmitContactForm();

        Task<FormResult> SubmitInvestorContactForm();
    }
}
