namespace MultiFamilyPortal.Dtos
{
    public record ReportResponse
    {
        public string FileName { get; init; }
        public string MimeType { get; init; }
        public byte[] Data { get; init; }
    }
}