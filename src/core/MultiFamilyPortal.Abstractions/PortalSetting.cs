using System.ComponentModel;

namespace MultiFamilyPortal
{
    public static class PortalSetting
    {
        [DefaultValue("10")]
        public const string BlogPageLimit = nameof(BlogPageLimit);
        public const string RssDescription = nameof(RssDescription);

        [DefaultValue("MultiFamily Portal")]
        public const string SiteTitle = nameof(SiteTitle);

        [DefaultValue("MultiFamily Guru")]
        public const string Webmaster = nameof(Webmaster);
        public const string ManagingEditor = nameof(ManagingEditor);
        public const string ImageUrl = nameof(ImageUrl);

        [DefaultValue("MultiFamily Gurus")]
        public const string NotificationEmailFrom = nameof(NotificationEmailFrom);

        [DefaultValue("no-reply@website.com")]
        public const string NotificationEmail = nameof(NotificationEmail);

        [DefaultValue("hello@website.com")]
        public const string ContactEmail = nameof(ContactEmail);

        [DefaultValue("MultiFamily Portal LLC")]
        public const string LegalBusinessName = nameof(LegalBusinessName);

        [DefaultValue("838-555-1234")]
        public const string ContactPhone = nameof(ContactPhone);

        [DefaultValue("1234 Any St")]
        public const string ContactStreetAddress = nameof(ContactStreetAddress);

        [DefaultValue("Miami")]
        public const string ContactCity = nameof(ContactCity);

        [DefaultValue("FL")]
        public const string ContactState = nameof(ContactState);

        [DefaultValue("12345")]
        public const string ContactZip = nameof(ContactZip);

        public const string SocialFacebook = nameof(SocialFacebook);
        public const string SocialTwitter = nameof(SocialTwitter);
        public const string SocialLinkedIn = nameof(SocialLinkedIn);
        public const string SocialYouTube = nameof(SocialYouTube);
        public const string SocialInstagram = nameof(SocialInstagram);

        [DefaultValue("#FFFFFF")]
        public const string ThemeColor = nameof(ThemeColor);

        [DefaultValue("#FFFFFF")]
        public const string BackgroundColor = nameof(BackgroundColor);

        public const string MicrosoftClientId = nameof(MicrosoftClientId);
        public const string MicrosoftClientSecret = nameof(MicrosoftClientSecret);
        public const string GoogleClientId = nameof(GoogleClientId);
        public const string GoogleClientSecret = nameof(GoogleClientSecret);

        public const string CaptchaSiteKey = nameof(CaptchaSiteKey);
        public const string CaptchaSiteSecret = nameof(CaptchaSiteSecret);
    }
}
