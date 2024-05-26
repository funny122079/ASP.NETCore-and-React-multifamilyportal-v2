using AvantiPoint.EmailService;
using MultiFamilyPortal.Dtos;

namespace MultiFamilyPortal.Services
{
    public interface ITemplateProvider
    {
        Task<TemplateResult> GetTemplate<T>(string templateName, T model)
            where T : HtmlTemplateBase;
    }
}
