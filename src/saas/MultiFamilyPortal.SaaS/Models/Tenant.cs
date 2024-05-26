namespace MultiFamilyPortal.SaaS.Models
{
    public class Tenant
    {
        public int Id { get; set; }
        public string Host { get; set; }
        public string Environment { get; set; }
        public bool Disabled { get; set; }
        public string DatabaseName { get; set; }
        public bool IsREMentorStudent { get; set; } = true;
        public string GoogleSiteVerification { get; set; }
        public DateTimeOffset Created { get; set; }
    }
}
