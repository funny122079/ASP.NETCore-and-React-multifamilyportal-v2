using System.Text.Json;
using MultiFamilyPortal.Data.Models;
using MultiFamilyPortal.Dtos.Underwriting;
using Xunit;

namespace MultiFamilyPortal.Tests.Fixtures
{
    public class UnderwritingAnalysisConversionTests
    {
        private const string ExpectedJson = @"{""id"":""c3dd3627-9ca7-48db-bbe4-0ed04f8b42e2"",""timestamp"":""12/29/2021 4:21:16 PM -08:00"",""startDate"":""3/29/2022 4:21:16 PM -08:00"",""name"":""Hello World"",""address"":""123 Some St"",""city"":""San Diego"",""state"":""CA"",""desiredYield"":0,""holdYears"":0,""units"":45,""vintage"":1980,""loanType"":""Automatic"",""lTV"":0.75,""askingPrice"":2600000,""strikePrice"":2500000,""offerPrice"":2500000,""purchasePrice"":2500000,""downpayment"":0,""rentableSqFt"":29250,""grossPotentialRent"":0,""physicalVacancy"":0,""marketVacancy"":0,""management"":0,""capX"":0,""capXType"":""PerDoor"",""ourEquityOfCF"":0.25,""aquisitionFeePercent"":0.05,""closingCostPercent"":0.03,""deferredMaintenance"":0,""sECAttorney"":0,""closingCostMiscellaneous"":0,""status"":""Active"",""propertyClass"":""ClassA"",""neighborhoodClass"":""ClassA"",""sellers"":[{""id"":""a02c392b-1d49-46bf-a265-1f79c7b60be2"",""description"":""Gross Scheduled Rent"",""category"":""GrossScheduledRent"",""amount"":150000,""expenseType"":""T12""}],""ours"":[{""id"":""dc9dd330-68ea-4f80-aaa7-9655690161d3"",""description"":""Gross Scheduled Rent"",""category"":""GrossScheduledRent"",""amount"":150000,""expenseType"":""T12""}],""mortgages"":[{""id"":""14772ceb-4f07-447e-afdf-3e0a3fc21228"",""loanAmount"":1875000,""interestRate"":0.03875,""termInYears"":30,""interestOnly"":false,""balloonMonths"":0,""points"":0.01}],""notes"":[],""incomeForecast"":[{""year"":0,""increaseType"":""Percent"",""perUnitIncrease"":0,""unitsAppliedTo"":0,""fixedIncreaseOnRemainingUnits"":0,""vacancy"":0,""otherLossesPercent"":0,""utilityIncreases"":0,""otherIncomePercent"":0}]}";

        [Fact]
        public void SerializesWithoutException()
        {
            var model = new UnderwritingAnalysis()
            {
                Id = Guid.NewGuid(),
                Name = "Hello World",
                Address = "123 Some St",
                City = "San Diego",
                State = "CA",
                AskingPrice = 2600000,
                OfferPrice = 2500000,
                StrikePrice = 2500000,
                PurchasePrice = 2500000,
                LTV = 0.75,
                LoanType = Data.Models.UnderwritingLoanType.Automatic,
                Units = 45,
                RentableSqFt = 45 * 650,
                StartDate = DateTimeOffset.Now.AddMonths(3),
                Timestamp = DateTimeOffset.Now,
                Vintage = 1980
            };
            model.AddMortgage(new UnderwritingAnalysisMortgage
            {
                Id = Guid.NewGuid(),
                InterestRate = 0.03875,
                LoanAmount = 2500000 * 0.75,
                TermInYears = 30,
                Points = 0.01,
            });
            model.AddOurItem(new UnderwritingAnalysisLineItem
            {
                Id = Guid.NewGuid(),
                Amount = 150000,
                Category = Data.Models.UnderwritingCategory.GrossScheduledRent,
                ExpenseType = Data.Models.ExpenseSheetType.T12,
                Description = "Gross Scheduled Rent",
            });
            model.AddSellerItem(new UnderwritingAnalysisLineItem
            {
                Id = Guid.NewGuid(),
                Amount = 150000,
                Category = Data.Models.UnderwritingCategory.GrossScheduledRent,
                ExpenseType = Data.Models.ExpenseSheetType.T12,
                Description = "Gross Scheduled Rent",
            });

            string json = null;
            var ex = Record.Exception(() => json = JsonSerializer.Serialize(model));

            Assert.Null(ex);
            Assert.NotEmpty(json);
        }

        [Fact]
        public void AddsMortgages()
        {
            var model = JsonSerializer.Deserialize<UnderwritingAnalysis>(ExpectedJson);

            Assert.NotNull(model);
            Assert.Single(model.Mortgages);

            var mortgage = model.Mortgages.First();
            Assert.Equal(1875000, mortgage.LoanAmount);
        }

        [Fact]
        public void AddsProForma()
        {
            var model = JsonSerializer.Deserialize<UnderwritingAnalysis>(ExpectedJson);

            Assert.NotNull(model);
            Assert.Equal(3, model.Ours.Count());

            var lineItem = model.Ours.FirstOrDefault(x => x.Category == UnderwritingCategory.GrossScheduledRent);
            Assert.NotNull(lineItem);
            Assert.Equal(150000, lineItem.AnnualizedTotal);
        }

        [Fact]
        public void AddsStatedInPlace()
        {
            var model = JsonSerializer.Deserialize<UnderwritingAnalysis>(ExpectedJson);

            Assert.NotNull(model);
            Assert.Single(model.Sellers);

            var lineItem = model.Sellers.First();
            Assert.Equal(150000, lineItem.AnnualizedTotal);
        }

        [Fact]
        public void InitializesDealAnalysis()
        {
            var model = JsonSerializer.Deserialize<UnderwritingAnalysis>(ExpectedJson);
            Assert.NotNull(model.DealAnalysis);
        }

        [Fact]
        public void InitializesInvestmentForcast()
        {
            var model = JsonSerializer.Deserialize<UnderwritingAnalysis>(ExpectedJson);
            Assert.NotNull(model.IncomeForecast);
            Assert.Single(model.IncomeForecast);
        }

        [Fact]
        public void InitializesModels()
        {
            var model = JsonSerializer.Deserialize<UnderwritingAnalysis>(ExpectedJson);
            Assert.NotNull(model.Models);
            Assert.Empty(model.Models);
        }

        [Fact]
        public void SerializesAndDeserializesModelsAndUnits()
        {
            var analysis = new UnderwritingAnalysis()
            {
                Id = Guid.NewGuid(),
                Name = "Hello World",
                Address = "123 Some St",
                City = "San Diego",
                State = "CA",
                AskingPrice = 2600000,
                OfferPrice = 2500000,
                StrikePrice = 2500000,
                PurchasePrice = 2500000,
                LTV = 0.75,
                LoanType = Data.Models.UnderwritingLoanType.Automatic,
                Units = 45,
                RentableSqFt = 45 * 650,
                StartDate = DateTimeOffset.Now.AddMonths(3),
                Timestamp = DateTimeOffset.Now,
                Vintage = 1980,
            };
            analysis.AddModel(new UnderwritingAnalysisModel
            {
                Name = "Classic 1bed",
                Area = 650,
                Baths = 1,
                Beds = 1,
                CurrentRent = 1200,
                MarketRent = 1400,
                TotalUnits = 10,
                Units = new List<UnderwritingAnalysisUnit>
                        {
                            new UnderwritingAnalysisUnit
                            {
                                DepositOnHand = 500,
                                LeaseEnd = new DateTime(2022, 6, 30),
                                LeaseStart = new DateTime(2021, 7, 1),
                                Rent = 1175,
                                Renter = "John Smith",
                                Unit = "D101",
                                Ledger = new List<UnderwritingAnalysisUnitLedgerItem>
                                {
                                    new UnderwritingAnalysisUnitLedgerItem
                                    {
                                        Type = UnderwritingPropertyUnitLedgerType.Rent,
                                        Rent = 1175
                                    },
                                    new UnderwritingAnalysisUnitLedgerItem
                                    {
                                        Type = UnderwritingPropertyUnitLedgerType.Admin,
                                        ChargesCredits = 25
                                    }
                                }
                            }
                        }
            });

            var json = JsonSerializer.Serialize(analysis);
            Assert.Contains("John Smith", json);
            Assert.Contains("D101", json);

            var deserialized = JsonSerializer.Deserialize<UnderwritingAnalysis>(json);

            Assert.Single(deserialized.Models);
            var model = deserialized.Models.First();
            Assert.Equal("Classic 1bed", model.Name);

            Assert.Single(model.Units);
            var unit = model.Units.First();

            Assert.Equal("D101", unit.Unit);
            Assert.Equal("John Smith", unit.Renter);
            Assert.Equal(new DateTime(2022, 6, 30), unit.LeaseEnd);
            Assert.Equal(new DateTime(2021, 7, 1), unit.LeaseStart);

            Assert.NotNull(unit.Ledger);
            Assert.Equal(2, unit.Ledger.Count);

            var rent = unit.Ledger.First();
            Assert.Equal(UnderwritingPropertyUnitLedgerType.Rent, rent.Type);
            Assert.Equal(1175, rent.Rent);
        }
    }
}
