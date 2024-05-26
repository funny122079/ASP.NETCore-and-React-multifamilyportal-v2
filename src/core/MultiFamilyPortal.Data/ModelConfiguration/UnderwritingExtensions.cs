using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MultiFamilyPortal.Data.Models;

namespace MultiFamilyPortal.Data.ModelConfiguration
{
    internal static class UnderwritingExtensions
    {
        public static void ConfigureUnderwriting(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UnderwritingProspectProperty>(builder =>
            {
                builder.HasOne(x => x.DealAnalysis)
                    .WithOne(x => x.Property)
                    .HasForeignKey<UnderwritingProspectPropertyDealAnalysis>(x => x.PropertyId);
            });
            modelBuilder.HasField<UnderwritingProspectProperty, DateTimeOffset>(x => x.Timestamp);
            modelBuilder.HasField<UnderwritingNote, DateTimeOffset>(x => x.Timestamp);

            modelBuilder.Entity<UnderwritingLineItem>(builder =>
            {
                builder.Property(x => x.Category)
                    .HasConversion(new EnumToStringConverter<UnderwritingCategory>());
                builder.Property(x => x.Type)
                    .HasConversion(new EnumToStringConverter<UnderwritingType>());
                builder.Property(x => x.Column)
                    .HasConversion(new EnumToStringConverter<UnderwritingColumn>());
            });

            modelBuilder.Entity<UnderwritingGuidance>(builder =>
            {
                builder.Property(x => x.Type)
                    .HasConversion(new EnumToStringConverter<CostType>());
            });

            modelBuilder.Entity<UnderwritingProspectProperty>()
                .Property(x => x.CapXType)
                .HasConversion(new EnumToStringConverter<CostType>());

            modelBuilder.Entity<UnderwritingProspectProperty>()
                .Property(x => x.Status)
                .HasConversion(new EnumToStringConverter<UnderwritingStatus>());

            modelBuilder.Entity<UnderwritingProspectProperty>()
                .Property(x => x.LoanType)
                .HasConversion(new EnumToStringConverter<UnderwritingLoanType>());

            modelBuilder.Entity<UnderwritingProspectFile>(builder =>
            {
                builder.Property(x => x.Type)
                    .HasConversion(new EnumToStringConverter<UnderwritingProspectFileType>());
            });

            modelBuilder.Entity<UnderwritingPropertyUnitLedger>(builder =>
            {
                builder.Property(x => x.Type)
                    .HasConversion(new EnumToStringConverter<UnderwritingPropertyUnitLedgerType>());
            });

            modelBuilder.Entity<UnderwritingProspectPropertyCapitalImprovements>(builder =>
            {
                builder.Property(x => x.Status)
                    .HasConversion(new EnumToStringConverter<CapitalImprovementStatus>());
            });

            modelBuilder.Entity<UnderwritingProspectPropertyIncomeForecast>(builder =>
            {
                builder.Property(x => x.IncreaseType)
                    .HasConversion(new EnumToStringConverter<IncomeForecastIncreaseType>());
            });
        }
    }
}
