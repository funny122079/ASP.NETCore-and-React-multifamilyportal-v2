using MultiFamilyPortal.Data;

namespace MultiFamilyPortal.Services
{
    internal class SiteInfo : ISiteInfo
    {
        private IReadOnlyDictionary<string, string> _settings { get; }

        public SiteInfo(IMFPContext db)
        {
            _settings = db.Settings.ToDictionary(x => x.Key, x => x.Value);
        }

        public string Title => Get(PortalSetting.SiteTitle);
        public string PublicEmail => Get(PortalSetting.ContactEmail);
        public string SenderEmail => Get(PortalSetting.NotificationEmail);
        public string SenderEmailName => Get(PortalSetting.NotificationEmailFrom);
        public string LegalBusinessName => Get(PortalSetting.LegalBusinessName);
        public string ContactPhone => Get(PortalSetting.ContactPhone);
        public string Address => Get(PortalSetting.ContactStreetAddress);
        public string City => Get(PortalSetting.ContactCity);
        public string State => Get(PortalSetting.ContactState);
        public string PostalCode => Get(PortalSetting.ContactZip);
        public string Facebook => Get(PortalSetting.SocialFacebook);
        public string Twitter => Get(PortalSetting.SocialTwitter);
        public string LinkedIn => Get(PortalSetting.SocialLinkedIn);
        public string Instagram => Get(PortalSetting.SocialInstagram);
        public string YouTube => Get(PortalSetting.SocialYouTube);

        private string Get(string key)
        {
            if (_settings.ContainsKey(key))
                return _settings[key];

            return default;
        }
    }
}
