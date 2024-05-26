namespace MultiFamilyPortal.Dtos
{
    public record FormResult
    {
        public string Message { get; init; }
        public ResultState State { get; init; }
        public Dictionary<string, List<string>> Errors { get; set; }
    }
}
