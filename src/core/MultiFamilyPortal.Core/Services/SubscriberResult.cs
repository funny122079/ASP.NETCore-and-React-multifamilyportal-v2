namespace MultiFamilyPortal.Services
{
    public record SubscriberResult
    {
        public bool Success { get; init; }
        public string Message { get; init; }
        public int StatusCode { get; init; } = 200;

        public static implicit operator bool(SubscriberResult result) =>
            result.Success;

        public static implicit operator int(SubscriberResult result) =>
            result.StatusCode;
    }
}
