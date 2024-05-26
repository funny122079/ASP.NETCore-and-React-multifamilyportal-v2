using System.Net.Http.Json;
using AvantiPoint.EmailService;
using MultiFamilyPortal.Dtos;

namespace MultiFamilyPortal.Services
{
    internal class FormService : IFormService
    {
        private HttpClient _client { get; }
        private IEmailValidationService _emailValidationService { get; }

        public FormService(IEmailValidationService emailValidationService, HttpClient client)
        {
            _emailValidationService = emailValidationService;
            _client = client;
            SignupModel = new();
            ContactForm = new();
            InvestorInquiry = new();
        }


        public NewsletterSubscriberRequest SignupModel { get; private set; }
        public ContactFormRequest ContactForm { get; private set; }
        public InvestorInquiryRequest InvestorInquiry { get; private set; }

        public async Task<FormResult> SubmitContactForm()
        {
            var validationResponse = _emailValidationService.Validate(ContactForm.Email);
            if (!validationResponse.IsValid)
                return new FormResult
                {
                    State = ResultState.Warning,
                    Message = validationResponse.Message,
                    Errors = new Dictionary<string, List<string>>
                    {
                        { nameof(ContactFormRequest.Email), new List<string> { validationResponse.Message } }
                    }
                };

            var result = await ProcessResponse("/api/forms/contact-us", ContactForm);
            if (result.State == ResultState.Success)
                ContactForm = new();

            return result;
        }

        public async Task<FormResult> SubmitInvestorContactForm()
        {
            var validationResponse = _emailValidationService.Validate(InvestorInquiry.Email);
            if (!validationResponse.IsValid)
                return new FormResult
                {
                    State = ResultState.Warning,
                    Message = validationResponse.Message,
                    Errors = new Dictionary<string, List<string>>
                    {
                        { nameof(InvestorInquiryRequest.Email), new List<string> { validationResponse.Message } }
                    }
                };

            var result = await ProcessResponse("/api/forms/investor-inquiry", InvestorInquiry);
            if (result.State == ResultState.Success)
                InvestorInquiry = new();

            return result;
        }

        public async Task<FormResult> SubmitSubscriberSignup()
        {
            var validationResponse = _emailValidationService.Validate(SignupModel.Email);
            if (!validationResponse.IsValid)
                return new FormResult
                {
                    State = ResultState.Warning,
                    Message = validationResponse.Message,
                    Errors = new Dictionary<string, List<string>>
                    {
                        { nameof(NewsletterSubscriberRequest.Email), new List<string> { validationResponse.Message } }
                    }
                };

            var result = await ProcessResponse("/api/forms/newsletter-subscriber", SignupModel);
            if (result.State == ResultState.Success)
                SignupModel = new();

            return result;
        }

        private async Task<FormResult> ProcessResponse<T>(string uri, T model)
        {
            try
            {
                using var response = await _client.PostAsJsonAsync(uri, model);
                return await response.Content.ReadFromJsonAsync<FormResult>();
            }
            catch (Exception ex)
            {
                return new FormResult
                {
                    State = ResultState.Error,
                    Errors = new(),
                    Message = ex.Message,
                };
            }
        }
    }
}
