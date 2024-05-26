using Microsoft.EntityFrameworkCore;
using MultiFamilyPortal.Data;
using MultiFamilyPortal.Data.Models;
using MultiFamilyPortal.Dtos.Underwriting;
using MultiFamilyPortal.Extensions;

namespace MultiFamilyPortal.Services
{
    internal class UnderwritingService : IUnderwritingService
    {
        private IMFPContext _dbContext { get; }

        public UnderwritingService(IMFPContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<UnderwritingAnalysis> GetUnderwritingAnalysis(Guid propertyId)
        {
            var property = await _dbContext.UnderwritingPropertyProspects
                .Select(x => new UnderwritingAnalysis
                {
                    Address = x.Address,
                    AquisitionFeePercent = x.AquisitionFeePercent,
                    AskingPrice = x.AskingPrice,
                    AssetId = x.AssetId,
                    CapitalImprovements = x.CapitalImprovements.Select(c => new UnderwritingAnalysisCapitalImprovement
                    {
                        Cost = c.Cost,
                        Description = c.Description,
                    }).ToList(),
                    CapX = x.CapX,
                    CapXType = x.CapXType,
                    City = x.City,
                    ClosingCostMiscellaneous = x.ClosingCostMiscellaneous,
                    ClosingCostPercent = x.ClosingCostPercent,
                    DeferredMaintenance = x.DeferredMaintenance,
                    DesiredYield = x.DesiredYield,
                    Downpayment = x.Downpayment,
                    GrossPotentialRent = x.GrossPotentialRent,
                    HoldYears = x.HoldYears,
                    Id = x.Id,
                    LoanType = x.LoanType,
                    LTV = x.LTV,
                    Management = x.Management,
                    Market = x.Market,
                    MarketVacancy = x.MarketVacancy,
                    Name = x.Name,
                    NeighborhoodClass = x.NeighborhoodClass,
                    Notes = x.Notes.Select(n => new UnderwritingAnalysisNote
                    {
                        Id = n.Id,
                        Note = n.Note,
                        Timestamp = n.Timestamp,
                        Underwriter = n.Underwriter.DisplayName,
                        UnderwriterEmail = n.Underwriter.Email,
                        UnderwriterId = n.UnderwriterId
                    }).ToList(),
                    OfferPrice = x.OfferPrice,
                    OurEquityOfCF = x.OurEquityOfCF,
                    PhysicalVacancy = x.PhysicalVacancy,
                    PropertyClass = x.PropertyClass,
                    PurchasePrice = x.PurchasePrice,
                    RentableSqFt = x.RentableSqFt,
                    ReversionCapRate = x.ReversionCapRate,
                    SECAttorney = x.SECAttorney,
                    StartDate = x.StartDate,
                    State = x.State,
                    Status = x.Status,
                    StrikePrice = x.StrikePrice,
                    Timestamp = x.Timestamp,
                    Underwriter = x.Underwriter.DisplayName,
                    UnderwriterEmail = x.Underwriter.Email,
                    Units = x.Units,
                    Vintage = x.Vintage,
                    Zip = x.Zip,
                    GrossPotentialRentNotes = x.GrossPotentialRentNotes,
                    LossToLeaseNotes = x.LossToLeaseNotes,
                    GrossScheduledRentNotes = x.GrossScheduledRentNotes,
                    PhysicalVacancyNotes = x.PhysicalVacancyNotes,
                    ConcessionsNonPaymentNotes = x.ConcessionsNonPaymentNotes,
                    UtilityReimbursementNotes = x.UtilityReimbursementNotes,
                    OtherIncomeNotes = x.OtherIncomeNotes,
                    TaxesNotes = x.TaxesNotes,
                    MarketingNotes = x.MarketingNotes,
                    InsuranceNotes = x.InsuranceNotes,
                    UtilityNotes = x.UtilityNotes,
                    RepairsMaintenanceNotes = x.RepairsMaintenanceNotes,
                    ContractServicesNotes = x.ContractServicesNotes,
                    PayrollNotes = x.PayrollNotes,
                    GeneralAdminNotes = x.GeneralAdminNotes,
                    ManagementNotes = x.ManagementNotes,
                    LendingNotes = x.LendingNotes,
                })
                .FirstOrDefaultAsync(x => x.Id == propertyId);

            var dealAnalysis = await _dbContext.UnderwritingProspectPropertyDealAnalysis.FirstOrDefaultAsync(x => x.PropertyId == propertyId);
            property.DealAnalysis = new UnderwritingAnalysisDealAnalysis
            {
                CompetitionNotes = dealAnalysis?.CompetitionNotes,
                ConstructionType = dealAnalysis?.ConstructionType,
                HowUnderwritingWasDetermined = dealAnalysis?.HowUnderwritingWasDetermined,
                MarketCapRate = dealAnalysis?.MarketCapRate ?? 0,
                MarketPricePerUnit = dealAnalysis?.MarketPricePerUnit ?? 0,
                Summary = dealAnalysis?.Summary,
                UtilityNotes = dealAnalysis?.UtilityNotes,
                ValuePlays = dealAnalysis?.ValuePlays,
            };
            var forecast = await _dbContext.UnderwritingProspectPropertyIncomeForecasts
                .Where(x => x.ProspectId == propertyId)
                .Select(x => new UnderwritingAnalysisIncomeForecast
                {
                    FixedIncreaseOnRemainingUnits = x.FixedIncreaseOnRemainingUnits,
                    IncreaseType = x.IncreaseType,
                    OtherIncomePercent = x.OtherIncomePercent,
                    OtherLossesPercent = x.OtherLossesPercent,
                    PerUnitIncrease = x.PerUnitIncrease,
                    UnitsAppliedTo = x.UnitsAppliedTo,
                    UtilityIncreases = x.UtilityIncreases,
                    Vacancy = x.Vacancy,
                    Year = x.Year
                }).ToArrayAsync();

            property.ReplaceForecast(forecast);

            if(property.IncomeForecast.Count() != property.HoldYears + 1)
            {
                var forecastList = new List<UnderwritingAnalysisIncomeForecast>();
                var temp = property.IncomeForecast.ToArray();
                for(var i = 0; i < property.HoldYears + 1; i++)
                {
                    var year = temp.FirstOrDefault(x => x.Year == i) ?? new UnderwritingAnalysisIncomeForecast
                    {
                        Year = i
                    };
                    forecastList.Add(year);
                }
                property.ReplaceForecast(forecastList);
            }

            var mortgages = await _dbContext.UnderwritingMortgages.Where(x => x.PropertyId == property.Id)
                .Select(m => new UnderwritingAnalysisMortgage
                {
                    Id = m.Id,
                    BalloonMonths = m.BalloonMonths,
                    InterestOnly = m.InterestOnly,
                    InterestRate = m.InterestRate,
                    LoanAmount = m.LoanAmount,
                    Points = m.Points,
                    TermInYears = m.TermInYears
                })
                .ToArrayAsync();
            if (mortgages.Any())
            {
                property.ReplaceMortgages(mortgages);
            }

            var unitModels = await _dbContext.UnderwritingPropertyUnitModels
                .Where(x => x.PropertyId == propertyId)
                .Select(m => new UnderwritingAnalysisModel
                {
                    Id = m.Id,
                    Area = m.SquareFeet,
                    Baths = m.Baths,
                    Beds = m.Beds,
                    CurrentRent = m.CurrentRent,
                    MarketRent = m.MarketRent,
                    Name = m.Name,
                    TotalUnits = m.TotalUnits,
                    Upgraded = m.Upgraded,
                    Units = m.Units.Select(u => new UnderwritingAnalysisUnit
                    {
                        Id = u.Id,
                        AtWill = u.AtWill,
                        Renter = u.Renter,
                        Balance = u.Balance,
                        Rent = u.Rent,
                        DepositOnHand = u.DepositOnHand,
                        Unit = u.Unit,
                        LeaseEnd = u.LeaseEnd,
                        LeaseStart = u.LeaseStart,
                        Ledger = u.Ledger.Select(l => new UnderwritingAnalysisUnitLedgerItem
                        {
                            ChargesCredits = l.ChargesCredits,
                            Rent = l.Rent,
                            Type = l.Type
                        }).ToList()
                    }).ToList(),
                }).ToListAsync();
            property.AddModels(unitModels);

            var lineItems = await _dbContext.UnderwritingLineItems.Where(x => x.PropertyId == property.Id).ToArrayAsync();
            if (lineItems.Any())
            {
                foreach (var column in lineItems.GroupBy(x => x.Column))
                {
                    var items = column.Select(x => new UnderwritingAnalysisLineItem
                    {
                        Amount = x.Amount,
                        Category = x.Category,
                        Description = x.Description,
                        ExpenseType = x.ExpenseType,
                        Id = x.Id
                    });
                    if (column.Key == UnderwritingColumn.Sellers)
                        property.AddSellerItems(items);
                    else
                        property.AddOurItems(items);
                }
            }

            if(property.ReversionCapRate == 0)
            {
                property.ReversionCapRate = property.CapRate - 0.01;
                if (property.ReversionCapRate < 0)
                    property.ReversionCapRate = 0.07;
            }

            return property;
        }

        public async Task<UnderwritingAnalysis> UpdateProperty(Guid propertyId, UnderwritingAnalysis analysis, string email)
        {
            var property = await _dbContext.UnderwritingPropertyProspects
                .Include(x => x.DealAnalysis)
                .Include(x => x.Notes)
                .Include(x => x.Models)
                .ThenInclude(x => x.Units)
                .Include(x => x.CapitalImprovements)
                .Include(x => x.Forecast)
                .FirstOrDefaultAsync(x => x.Id == propertyId);

            await UpdateDealAnalysis(property, analysis);
            await UpdateCapitalImprovements(propertyId, analysis);
            await UpdateLineItems(propertyId, analysis);
            await UpdateMortgages(propertyId, analysis);
            //await UpdateNotes(propertyId, analysis, property, email);
            await UpdateUnitModelsAndRentRoll(propertyId, analysis);
            await UpdateProspectProperty(propertyId, analysis);
            await UpdateIncomeForecast(propertyId, analysis);

            return await GetUnderwritingAnalysis(propertyId);
        }

        private async Task UpdateIncomeForecast(Guid propertyId, UnderwritingAnalysis analysis)
        {
            if (analysis.HoldYears < 0)
                analysis.HoldYears = 0;

            var expectedResults = analysis.HoldYears + 1;

            var existing = await _dbContext.UnderwritingProspectPropertyIncomeForecasts.Where(x => x.ProspectId == propertyId).ToListAsync();
            _dbContext.UnderwritingProspectPropertyIncomeForecasts.RemoveRange(existing);
            await _dbContext.SaveChangesAsync();
            for(var i = 0; i < expectedResults; i++)
            {
                var analysisForecast = analysis.IncomeForecast.FirstOrDefault(x => x.Year == i);

                await _dbContext.UnderwritingProspectPropertyIncomeForecasts.AddAsync(new UnderwritingProspectPropertyIncomeForecast
                {
                    FixedIncreaseOnRemainingUnits = analysisForecast?.FixedIncreaseOnRemainingUnits ?? 0,
                    IncreaseType = analysisForecast?.IncreaseType ?? 0,
                    OtherIncomePercent = analysisForecast?.OtherIncomePercent ?? 0,
                    OtherLossesPercent = analysisForecast?.OtherLossesPercent ?? 0,
                    PerUnitIncrease = analysisForecast?.PerUnitIncrease ?? 0,
                    ProspectId = propertyId,
                    UnitsAppliedTo = analysisForecast?.UnitsAppliedTo ?? 0,
                    UtilityIncreases = analysisForecast?.UtilityIncreases ?? 0,
                    Vacancy = analysisForecast?.Vacancy ?? 0,
                    Year = i,
                });
            }

            await _dbContext.SaveChangesAsync();
        }

        private async Task UpdateLineItems(Guid propertyId, UnderwritingAnalysis analysis)
        {
            if (await _dbContext.UnderwritingLineItems.AnyAsync(x => x.PropertyId == propertyId))
            {
                var oldLineItems = await _dbContext.UnderwritingLineItems.Where(x => x.PropertyId == propertyId).ToArrayAsync();
                if (oldLineItems.Any())
                {
                    _dbContext.UnderwritingLineItems.RemoveRange(oldLineItems);
                    await _dbContext.SaveChangesAsync();
                }
            }

            var newLineItems = new List<UnderwritingLineItem>();
            if (analysis?.Sellers?.Any() ?? false)
            {
                var sellers = analysis.Sellers
                    .Select(x => new UnderwritingLineItem
                    {
                        Amount = x.Amount,
                        Category = x.Category,
                        Column = UnderwritingColumn.Sellers,
                        Description = string.IsNullOrEmpty(x.Description) ? x.Category.GetDisplayName() : x.Description,
                        ExpenseType = x.ExpenseType,
                        PropertyId = propertyId,
                        Type = x.Category.GetLineItemType()
                    });

                newLineItems.AddRange(sellers);
            }

            if (analysis?.Ours?.Any() ?? false)
            {
                var ours = analysis.Ours
                    .Where(x => !(x.Category == UnderwritingCategory.Management || x.Category == UnderwritingCategory.PhysicalVacancy))
                    .Select(x => new UnderwritingLineItem
                    {
                        Amount = x.Amount,
                        Category = x.Category,
                        Column = UnderwritingColumn.Ours,
                        Description = string.IsNullOrEmpty(x.Description) ? x.Category.GetDisplayName() : x.Description,
                        ExpenseType = x.ExpenseType,
                        PropertyId = propertyId,
                        Type = x.Category.GetLineItemType()
                    }).ToList();

                var vacancyRate = Math.Min(analysis.MarketVacancy, analysis.PhysicalVacancy);
                if (vacancyRate < 0.05)
                    vacancyRate = 0.05;

                var vacancy = new UnderwritingLineItem
                {
                    Amount = analysis.GrossPotentialRent * vacancyRate,
                    Category = UnderwritingCategory.PhysicalVacancy,
                    Description = UnderwritingCategory.PhysicalVacancy.GetDisplayName(),
                    ExpenseType = ExpenseSheetType.T12,
                    Column = UnderwritingColumn.Ours,
                    PropertyId = propertyId,
                    Type = UnderwritingType.Income
                };

                var management = new UnderwritingLineItem
                {
                    Amount = analysis.Management * analysis.GrossPotentialRent,
                    Category = UnderwritingCategory.Management,
                    Column = UnderwritingColumn.Ours,
                    Description = UnderwritingCategory.Management.GetDisplayName(),
                    ExpenseType = ExpenseSheetType.T12,
                    PropertyId = propertyId,
                    Type = UnderwritingType.Expense
                };
                ours.Add(vacancy);
                ours.Add(management);

                newLineItems.AddRange(ours);
            }

            if (newLineItems.Any())
            {
                await _dbContext.UnderwritingLineItems.AddRangeAsync(newLineItems);
                await _dbContext.SaveChangesAsync();
            }
        }

        private async Task UpdateMortgages(Guid propertyId, UnderwritingAnalysis analysis)
        {
            if (await _dbContext.UnderwritingMortgages.AnyAsync(x => x.PropertyId == propertyId))
            {
                var oldMortgages = await _dbContext.UnderwritingMortgages.Where(x => x.PropertyId == propertyId).ToArrayAsync();
                if (oldMortgages.Any())
                {
                    _dbContext.UnderwritingMortgages.RemoveRange(oldMortgages);
                    await _dbContext.SaveChangesAsync();
                }
            }

            if (analysis.PurchasePrice > 0)
            {
                if (analysis.LoanType == UnderwritingLoanType.Automatic)
                {
                    var analysisMortgage = analysis?.Mortgages?.FirstOrDefault() ?? new UnderwritingAnalysisMortgage();
                    var mortgage = new UnderwritingMortgage
                    {
                        BalloonMonths = analysisMortgage.BalloonMonths,
                        InterestOnly = analysisMortgage.InterestOnly,
                        InterestRate = analysisMortgage.InterestRate,
                        LoanAmount = analysis.PurchasePrice * analysis.LTV,
                        Points = analysisMortgage.Points,
                        PropertyId = propertyId,
                        TermInYears = analysisMortgage.TermInYears,
                    };
                    await _dbContext.UnderwritingMortgages.AddAsync(mortgage);
                }
                else if (analysis?.Mortgages?.Any() ?? false)
                {
                    var mortgages = analysis.Mortgages
                        .Select(x => new UnderwritingMortgage
                        {
                            BalloonMonths = x.BalloonMonths,
                            InterestOnly = x.InterestOnly,
                            InterestRate = x.InterestRate,
                            LoanAmount = x.LoanAmount,
                            Points = x.Points,
                            PropertyId = propertyId,
                            TermInYears = x.TermInYears
                        });

                    await _dbContext.UnderwritingMortgages.AddRangeAsync(mortgages);
                }
            }
        }

        //private async Task UpdateNotes(Guid propertyId, UnderwritingAnalysis analysis, UnderwritingProspectProperty property, string email)
        //{
        //    var userId = await _dbContext.Users
        //        .Where(x => x.Email == email)
        //        .Select(x => x.Id)
        //        .FirstOrDefaultAsync();

        //    var newNotes = analysis.Notes
        //        .Where(x => !property.Notes.Any(n => n.Id == x.Id))
        //        .Select(x => new UnderwritingNote
        //        {
        //            Id = x.Id,
        //            Note = x.Note,
        //            PropertyId = propertyId,
        //            UnderwriterId = userId
        //        });

        //    if (newNotes.Any())
        //    {
        //        await _dbContext.UnderwritingNotes.AddRangeAsync(newNotes);
        //        await _dbContext.SaveChangesAsync();
        //    }
        //}

        private async Task UpdateCapitalImprovements(Guid propertyId, UnderwritingAnalysis analysis)
        {
            if (await _dbContext.UnderwritingProspectPropertyCapitalImprovements.AnyAsync(x => x.PropertyId == propertyId))
            {
                var existingImprovements = await _dbContext.UnderwritingProspectPropertyCapitalImprovements
                    .Where(x => x.PropertyId == propertyId)
                    .ToArrayAsync();
                _dbContext.UnderwritingProspectPropertyCapitalImprovements.RemoveRange(existingImprovements);
                await _dbContext.SaveChangesAsync();
            }

            if (analysis.CapitalImprovements?.Any() ?? false)
            {
                await _dbContext.UnderwritingProspectPropertyCapitalImprovements.AddRangeAsync(analysis.CapitalImprovements.Select(x => new UnderwritingProspectPropertyCapitalImprovements
                {
                    Cost = x.Cost,
                    Description = x.Description,
                    PropertyId = propertyId
                }));
                await _dbContext.SaveChangesAsync();
            }
        }

        private async Task UpdateUnitModelsAndRentRoll(Guid propertyId, UnderwritingAnalysis analysis)
        {
            var existingUnits = await _dbContext.UnderwritingPropertyUnitModels
                .Include(x => x.Units)
                .ThenInclude(x => x.Ledger)
                .ToArrayAsync();

            if (existingUnits?.Any() ?? false)
            {
                _dbContext.UnderwritingPropertyUnitModels.RemoveRange(existingUnits);
                await _dbContext.SaveChangesAsync();
            }

            if (analysis.Models?.Any() ?? false)
            {
                foreach (var model in analysis.Models)
                {
                    var unitModel = new UnderwritingPropertyUnitModel
                    {
                        Name = model.Name.Trim(),
                        Baths = model.Baths,
                        Beds = model.Beds,
                        MarketRent = model.MarketRent,
                        CurrentRent = model.CurrentRent,
                        Upgraded = model.Upgraded,
                        SquareFeet = model.Area,
                        TotalUnits = model.TotalUnits,
                        PropertyId = propertyId
                    };
                    await _dbContext.AddAsync(unitModel);
                    await _dbContext.SaveChangesAsync();
                    await AddUnits(model.Units, unitModel);
                }
            }
        }

        private async Task AddUnits(IEnumerable<UnderwritingAnalysisUnit> units, UnderwritingPropertyUnitModel model)
        {
            if (units is null || !units.Any())
                return;

            foreach(var unit in units)
            {
                var propertyUnit = new UnderwritingPropertyUnit
                {
                    AtWill = unit.AtWill,
                    Balance = unit.Balance,
                    DepositOnHand = unit.DepositOnHand,
                    LeaseEnd = unit.LeaseEnd,
                    LeaseStart = unit.LeaseStart,
                    ModelId = model.Id,
                    Rent = unit.Rent,
                    Renter = unit.Renter?.Trim(),
                    Unit = unit.Unit?.Trim(),
                };
                await _dbContext.UnderwritingPropertyUnits.AddAsync(propertyUnit);
                await _dbContext.SaveChangesAsync();
                if(unit.Ledger?.Any() ?? false)
                {
                    var ledgerItems = unit.Ledger.Select(x => new UnderwritingPropertyUnitLedger
                    {
                        ChargesCredits = x.ChargesCredits,
                        Rent = x.Rent,
                        Type = x.Type,
                        UnitId = propertyUnit.Id
                    });
                    await _dbContext.UnderwritingPropertyUnitsLedger.AddRangeAsync(ledgerItems);
                    await _dbContext.SaveChangesAsync();
                }
            }
        }

        private async Task UpdateDealAnalysis(UnderwritingProspectProperty property, UnderwritingAnalysis analysis)
        {
            if (property.DealAnalysis is null)
            {
                var bucketList = new UnderwritingProspectPropertyDealAnalysis
                {
                    CompetitionNotes = analysis.DealAnalysis.CompetitionNotes,
                    ConstructionType = analysis.DealAnalysis.ConstructionType,
                    HowUnderwritingWasDetermined = analysis.DealAnalysis.HowUnderwritingWasDetermined,
                    MarketCapRate = analysis.DealAnalysis.MarketCapRate,
                    MarketPricePerUnit = analysis.DealAnalysis.MarketPricePerUnit,
                    PropertyId = property.Id,
                    Summary = analysis.DealAnalysis.Summary,
                    UtilityNotes = analysis.DealAnalysis.UtilityNotes,
                    ValuePlays = analysis.DealAnalysis.ValuePlays
                };

                await _dbContext.UnderwritingProspectPropertyDealAnalysis.AddAsync(bucketList);
                await _dbContext.SaveChangesAsync();
                property.DealAnalysisId = bucketList.Id;
            }
            else
            {
                var bucketList = property.DealAnalysis;
                bucketList.CompetitionNotes = analysis.DealAnalysis.CompetitionNotes;
                bucketList.ConstructionType = analysis.DealAnalysis.ConstructionType;
                bucketList.HowUnderwritingWasDetermined = analysis.DealAnalysis.HowUnderwritingWasDetermined;
                bucketList.MarketCapRate = analysis.DealAnalysis.MarketCapRate;
                bucketList.MarketPricePerUnit = analysis.DealAnalysis.MarketPricePerUnit;
                bucketList.Summary = analysis.DealAnalysis.Summary;
                bucketList.UtilityNotes = analysis.DealAnalysis.UtilityNotes;
                bucketList.ValuePlays = analysis.DealAnalysis.ValuePlays;
                _dbContext.UnderwritingProspectPropertyDealAnalysis.Update(bucketList);
                await _dbContext.SaveChangesAsync();
            }
        }

        private async Task UpdateProspectProperty(Guid propertyId, UnderwritingAnalysis analysis)
        {
            var property = await _dbContext.UnderwritingPropertyProspects
                .Include(x => x.LineItems)
                .Include(x => x.Mortgages)
                .Include(x => x.Notes)
                .FirstOrDefaultAsync(x => x.Id == propertyId);

            property.Address = analysis.Address;
            property.AquisitionFeePercent = analysis.AquisitionFeePercent;
            property.AskingPrice = analysis.AskingPrice;
            property.AssetId = analysis.AssetId;
            property.CapRate = analysis.CapRate;
            property.CapX = analysis.CapX;
            property.CapXType = analysis.CapXType;
            property.CashOnCash = analysis.CashOnCash;
            property.City = analysis.City;
            property.ClosingCostMiscellaneous = analysis.ClosingCostMiscellaneous;
            property.ClosingCostPercent = analysis.ClosingCostPercent;
            property.DebtCoverage = analysis.DebtCoverage;
            property.DeferredMaintenance = analysis.DeferredMaintenance;
            property.DesiredYield = analysis.DesiredYield;
            property.Downpayment = analysis.Downpayment;
            property.GrossPotentialRent = analysis.GrossPotentialRent;
            property.HoldYears = analysis.HoldYears;
            property.LoanType = analysis.LoanType;
            property.LTV = analysis.LTV;
            property.Management = analysis.Management;
            property.Market = analysis.Market;
            property.MarketVacancy = analysis.MarketVacancy;
            property.Name = analysis.Name;
            property.NeighborhoodClass = analysis.NeighborhoodClass;
            property.NOI = analysis.NOI;
            property.OfferPrice = analysis.OfferPrice;
            property.OurEquityOfCF = analysis.OurEquityOfCF;
            property.PhysicalVacancy = analysis.PhysicalVacancy;
            property.PropertyClass = analysis.PropertyClass;
            property.PurchasePrice = analysis.PurchasePrice;
            property.RentableSqFt = analysis.RentableSqFt;
            property.ReversionCapRate = analysis.ReversionCapRate;
            property.SECAttorney = analysis.SECAttorney;
            property.StartDate = analysis.StartDate;
            property.State = analysis.State;
            property.Status = analysis.Status;
            property.StrikePrice = analysis.StrikePrice;
            property.Units = analysis.Units;
            property.Vintage = analysis.Vintage;
            property.Zip = analysis.Zip;

            #region Bucketlist Notes

            property.GrossPotentialRentNotes = analysis.GrossPotentialRentNotes;
            property.LossToLeaseNotes = analysis.LossToLeaseNotes;
            property.GrossScheduledRentNotes = analysis.GrossScheduledRentNotes;
            property.PhysicalVacancyNotes = analysis.PhysicalVacancyNotes;
            property.ConcessionsNonPaymentNotes = analysis.ConcessionsNonPaymentNotes;
            property.UtilityReimbursementNotes = analysis.UtilityReimbursementNotes;
            property.OtherIncomeNotes = analysis.OtherIncomeNotes;
            property.TaxesNotes = analysis.TaxesNotes;
            property.MarketingNotes = analysis.MarketingNotes;
            property.InsuranceNotes = analysis.InsuranceNotes;
            property.UtilityNotes = analysis.UtilityNotes;
            property.RepairsMaintenanceNotes = analysis.RepairsMaintenanceNotes;
            property.ContractServicesNotes = analysis.ContractServicesNotes;
            property.PayrollNotes = analysis.PayrollNotes;
            property.GeneralAdminNotes = analysis.GeneralAdminNotes;
            property.ManagementNotes = analysis.ManagementNotes;
            property.LendingNotes = analysis.LendingNotes;

            #endregion Bucketlist Notes

            _dbContext.Update(property);
            await _dbContext.SaveChangesAsync();
        }
    }
}
