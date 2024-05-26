using System.Net;

namespace MultiFamilyPortal.Data.Models
{
    public class PostView
    {
        public Guid Id { get; set; }

        public Guid PostId { get; set; }

        private DateTimeOffset _timestamp = DateTimeOffset.UtcNow;
        public DateTimeOffset Timestamp => _timestamp;

        public string UserAgent { get; set; }

        public string UserAgentFamily { get; set; }

        public string UserAgentVersion { get; set; }

        public string UserAgentOSFamily { get; set; }

        public string UserAgentDeviceBrand { get; set; }

        public string UserAgentDeviceFamily { get; set; }

        public string UserAgentDeviceModel { get; set; }

        public bool UserAgentIsSpider { get; set; }

        public IPAddress IpAddress { get; set; }

        public string Type { get; set; }

        public string Continent { get; set; }

        public string Country { get; set; }

        public string Region { get; set; }

        public string City { get; set; }

        public string Source { get; set; }

        public string Medium { get; set; }

        public string Campaign { get; set; }

        public string Term { get; set; }

        public string Content { get; set; }

        public Post Post { get; set; }
    }
}
