using Microsoft.EntityFrameworkCore;
using MultiFamilyPortal.Data.Internals;
using MultiFamilyPortal.Data.Models;

namespace MultiFamilyPortal.Data
{
    public interface IMFPContext : IBaseContext
    {
        DbSet<AssetParner> AssetParners { get; }
        DbSet<AssetUnderManagement> AssetsUnderManagement { get; }

        DbSet<CustomContent> CustomContent { get; }
        DbSet<EmailTemplate> EmailTemplates { get; }
        DbSet<EmailPartialTemplate> EmailPartialTemplates { get; }
        DbSet<HighlightedUser> HighlightedUsers { get; }
        DbSet<SiteTheme> SiteThemes { get; set; }
        DbSet<InvestorProspect> InvestorProspects { get; }
        DbSet<InvestorTestimonial> InvestorTestimonials { get; }
        DbSet<EmailPreferences> EmailPreferences { get; }
        DbSet<ActivityLog> ActivityLogs { get; }

        DbSet<SocialLink> SocialLinks { get; }
        DbSet<SocialProvider> SocialProviders { get; }

        DbSet<UnderwriterGoal> UnderwriterGoals { get; }
        DbSet<UnderwritingLineItem> UnderwritingLineItems { get; }
        DbSet<UnderwritingMortgage> UnderwritingMortgages { get; }
        DbSet<UnderwritingNote> UnderwritingNotes { get; }
        DbSet<UnderwritingProspectProperty> UnderwritingPropertyProspects { get; }
        DbSet<UnderwritingPropertyUnitModel> UnderwritingPropertyUnitModels { get; }
        DbSet<UnderwritingPropertyUnit> UnderwritingPropertyUnits { get; }
        DbSet<UnderwritingPropertyUnitLedger> UnderwritingPropertyUnitsLedger { get; }
        DbSet<UnderwritingProspectFile> UnderwritingProspectFiles { get; }
        DbSet<UnderwritingGuidance> UnderwritingGuidance { get; }
        DbSet<UnderwritingProspectPropertyCapitalImprovements> UnderwritingProspectPropertyCapitalImprovements { get; }
        DbSet<UnderwritingProspectPropertyDealAnalysis> UnderwritingProspectPropertyDealAnalysis { get; }
        DbSet<UnderwritingProspectPropertyIncomeForecast> UnderwritingProspectPropertyIncomeForecasts { get; }
        DbSet<UnderwritingTier> UnderwritingTiers { get; }
    }
}
