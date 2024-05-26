namespace MultiFamilyPortal.Dtos.Underwriting.Reports
{
    public class LeaseExposureReport
    {
        private Dictionary<DateTime, int> _exposure { get; }
        public LeaseExposureReport(UnderwritingAnalysis analysis)
        {
            _exposure = new Dictionary<DateTime, int>();

            if (analysis.Units <= 0 || !analysis.Models.Any())
                return;

            var units = analysis.Models.SelectMany(x => x.Units);
            if (!units.Any())
                return;

            CurrentlyVacant = units.Count(x => x.Rent == 0 && x.LeaseEnd is null);
            TotalExposure = units.Count(x => x.LeaseEnd.HasValue && x.LeaseEnd.Value < analysis.StartDate.Date) + CurrentlyVacant;
            ExposurePercentage = TotalExposure / analysis.Units;

            _exposure = units.Where(x => x.LeaseEnd.HasValue)
                .Select(x =>
                {
                    x.LeaseEnd = new DateTime(x.LeaseEnd.Value.Year, x.LeaseEnd.Value.Month, 1);
                    return x;
                })
                .GroupBy(x => x.LeaseEnd.Value)
                .ToDictionary(x => x.Key, x => x.Count());
        }

        public int CurrentlyVacant { get; }

        public int TotalExposure { get; }

        public double ExposurePercentage { get; }

        public IReadOnlyDictionary<DateTime, int> Exposure => _exposure;
    }
}
