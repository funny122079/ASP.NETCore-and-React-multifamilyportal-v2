namespace MultiFamilyPortal.SaaS.Data
{
    public class DatabaseSettings
    {
        public Dictionary<string, string> ConnectionStrings { get; set; }

        public string GetConnectionString()
        {
            if (ConnectionStrings is null || !ConnectionStrings.Any())
                return null;

            if (ConnectionStrings.ContainsKey("DefaultConnection"))
                return ConnectionStrings["DefaultConnection"];

            return ConnectionStrings.FirstOrDefault().Value;
        }
    }
}
