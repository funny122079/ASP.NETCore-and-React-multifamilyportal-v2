namespace MultiFamilyPortal.Dtos
{
    public class IpData
    {
        public string Ip { get; set; }

        public string Host { get; set; }

        public string ReverseDNS { get; set; }

        public int ASN { get; set; }

        public string ISP { get; set; }

        public string Country { get; set; }

        public string CountryCode { get; set; }

        public string Region { get; set; }

        public string RegionCode { get; set; }

        public string City { get; set; }

        public string PostalCode { get; set; }

        public string Continent { get; set; }

        public string ContinentCode { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

        public int MetroCode { get; set; }

        public string Timezone { get; set; }

        public bool IsPublicVpn { get; set; }

        public DateTimeOffset Timestamp { get; set; }
    }
}
