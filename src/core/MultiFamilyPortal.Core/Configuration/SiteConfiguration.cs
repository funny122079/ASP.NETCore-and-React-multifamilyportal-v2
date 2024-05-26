using AvantiPoint.FileStorage.AzureBlobStorage;

namespace MultiFamilyPortal.Configuration;

internal class SiteConfiguration
{
    public string PostmarkApiKey { get; set; } = string.Empty;

    public GoogleCaptchaOptions Captcha { get; set; } = new ();

    public AzureBlobStorageOptions Storage { get; set; } = new ();
}
