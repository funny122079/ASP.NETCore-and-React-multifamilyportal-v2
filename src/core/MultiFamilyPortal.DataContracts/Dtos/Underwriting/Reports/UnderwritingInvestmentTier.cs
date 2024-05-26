using System.Text.Json.Serialization;
using MultiFamilyPortal.Converters;
using ReactiveUI;
using ReactiveUI.Fody.Helpers;

namespace MultiFamilyPortal.Dtos.Underwriting.Reports
{
    [JsonConverter(typeof(ReactiveObjectConverter<UnderwritingInvestmentTier>))]
    public class UnderwritingInvestmentTier : ReactiveObject
    {
        public Guid Id { get; set; }

        /// <summary>
        /// The name of the Tier (i.e. Tier 1, Tier 2 or Class A, Class B, etc)
        /// </summary>
        [Reactive]
        public string Name { get; set; }

        /// <summary>
        /// The investment capital. How much is being invested.
        /// </summary>
        [Reactive]
        public double Investment { get; set; }

        /// <summary>
        /// The Preferred Rate of Return. This is what they get on a yearly basis.
        /// </summary>
        [Reactive]
        public double PreferredRoR { get; set; }

        /// <summary>
        /// The Rate of Return on Sale. This is how much they are expected to earn
        /// on the sale of the property.
        /// </summary>
        [Reactive]
        public double RoROnSale { get; set; }
    }
}
