namespace MultiFamilyPortal
{
    public static class DateExtensions
    {
        public static string ToQueryString(this DateTimeOffset date)
        => date.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffZ");
    }
}