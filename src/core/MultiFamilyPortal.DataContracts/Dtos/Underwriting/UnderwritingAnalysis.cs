using System.Collections.ObjectModel;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Reactive;
using System.Reactive.Disposables;
using System.Reactive.Linq;
using System.Text.Json.Serialization;
using DynamicData;
using MultiFamilyPortal.Converters;
using MultiFamilyPortal.Data.Models;
using MultiFamilyPortal.Extensions;
using ReactiveUI;
using ReactiveUI.Fody.Helpers;
using static MultiFamilyPortal.Helpers.FinancialHelpers;

namespace MultiFamilyPortal.Dtos.Underwriting
{
    [JsonConverter(typeof(ReactiveObjectConverter<UnderwritingAnalysis>))]
    public class UnderwritingAnalysis : ReactiveObject, IDisposable
    {
        private bool _disposedValue;
        private readonly CompositeDisposable _disposable;
        private ReadOnlyObservableCollection<UnderwritingAnalysisLineItem> _sellersLineItems;
        private ReadOnlyObservableCollection<UnderwritingAnalysisLineItem> _sellersIncomeItems;
        private ReadOnlyObservableCollection<UnderwritingAnalysisLineItem> _sellersExpenseItems;
        private ReadOnlyObservableCollection<UnderwritingAnalysisLineItem> _ourLineItems;
        private ReadOnlyObservableCollection<UnderwritingAnalysisLineItem> _ourIncomeItems;
        private ReadOnlyObservableCollection<UnderwritingAnalysisLineItem> _ourExpenseItems;
        private ReadOnlyObservableCollection<UnderwritingAnalysisMortgage> _mortgages;
        private ReadOnlyObservableCollection<UnderwritingAnalysisModel> _models;
        private ReadOnlyObservableCollection<UnderwritingAnalysisIncomeForecast> _forecast;
        private ReadOnlyObservableCollection<UnderwritingAnalysisProjection> _projections;
        private readonly SourceCache<UnderwritingAnalysisLineItem, Guid> _sellersCache;
        private readonly SourceCache<UnderwritingAnalysisLineItem, Guid> _oursCache;
        private readonly SourceCache<UnderwritingAnalysisMortgage, Guid> _mortgageCache;
        private readonly SourceCache<UnderwritingAnalysisModel, Guid> _modelsCache;
        private readonly SourceCache<UnderwritingAnalysisIncomeForecast, int> _forecastCache;
        private readonly SourceCache<UnderwritingAnalysisProjection, int> _projectionCache;

        private ReactiveCommand<Unit, Unit> _downpaymentCommand;
        private ReactiveCommand<Unit, Unit> _calculateVacancyAndManagement;
        private ReactiveCommand<MortgageUpdate, Unit> _calculateLoanAmount;
        private ReactiveCommand<ManualMortgageUpdate, Unit> _updateLTV;
        private ReactiveCommand<Unit, Unit> _updateIncomeForecast;
        private ReactiveCommand<ProjectionUpdate, Unit> _updateProjections;
        private ReactiveCommand<ManagementUpdate, Unit> _updateManagement;
        private ReactiveCommand<VacancyUpdate, Unit> _vacancyUpdate;

        private IObservable<IncomeLedger> _incomeLedger;
        private IObservable<ExpenseLedger> _expenseLedger;
        private IObservable<PropertyInfo> _projectionContext;
        private IObservable<CoreInfo> _coreInfo;
        private IObservable<AdditionalInfo> _additionalInfo;

        public UnderwritingAnalysis()
        {
            _disposable = new();
            Notes = new List<UnderwritingAnalysisNote>();

            _sellersCache = new SourceCache<UnderwritingAnalysisLineItem, Guid>(x => x.Id);
            _oursCache = new SourceCache<UnderwritingAnalysisLineItem, Guid>(x => x.Id);
            _mortgageCache = new SourceCache<UnderwritingAnalysisMortgage, Guid>(x => x.Id);
            _modelsCache = new SourceCache<UnderwritingAnalysisModel, Guid>(x => x.Id);
            _forecastCache = new SourceCache<UnderwritingAnalysisIncomeForecast, int>(x => x.Year);
            _projectionCache = new SourceCache<UnderwritingAnalysisProjection, int>(x => x.Year);

            var loanType = this.WhenAnyValue(x => x.LoanType);
            _calculateVacancyAndManagement = ReactiveCommand.Create(OnCalculateGSRAndManagement)
                .DisposeWith(_disposable);
            _downpaymentCommand = ReactiveCommand.Create(OnDownpaymentCommandExecuted)
                .DisposeWith(_disposable);
            _calculateLoanAmount = ReactiveCommand.Create<MortgageUpdate>(OnCalculateLoanAmount, loanType.Select(x => x == UnderwritingLoanType.Automatic))
                .DisposeWith(_disposable);
            _updateLTV = ReactiveCommand.Create<ManualMortgageUpdate>(OnUpdateLTV, loanType.Select(x => x != UnderwritingLoanType.Automatic));
            _updateIncomeForecast = ReactiveCommand.Create(OnUpdateIncomeForecast)
                .DisposeWith(_disposable);
            _updateProjections = ReactiveCommand.Create<ProjectionUpdate>(OnUpdateProjections, this.WhenAnyValue(x => x.Units).Select(x => x > 0))
                .DisposeWith(_disposable);
            _updateManagement = ReactiveCommand.Create<ManagementUpdate>(OnManagementChanged);
            _vacancyUpdate = ReactiveCommand.Create<VacancyUpdate>(OnVacancyChanged);

            var sellersRefCount = _sellersCache.Connect()
                .RefCount()
                .AutoRefresh(x => x.AnnualizedTotal)
                .AutoRefresh(x => x.Category);
            var ourRefCount = _oursCache.Connect()
                .RefCount()
                .AutoRefresh(x => x.AnnualizedTotal)
                .AutoRefresh(x => x.Category);
            var mortgageRefCount = _mortgageCache.Connect()
                .RefCount()
                .AutoRefresh(x => x.AnnualDebtService)
                .AutoRefresh(x => x.LoanAmount)
                .AutoRefresh(x => x.InterestOnly)
                .AutoRefresh(x => x.InterestRate)
                .AutoRefresh(x => x.BalloonMonths)
                .AutoRefresh(x => x.TermInYears);
            var modelRefCount = _modelsCache.Connect()
                .RefCount();
            var forecastRef = _forecastCache.Connect()
                .RefCount();
            var projectionsRef = _projectionCache.Connect()
                .RefCount();

            #region Setup ReadOnlyObservableCollections
            sellersRefCount
                .SortBy(x => x.Category)
                .Bind(out _sellersLineItems)
                .DisposeMany()
                .Subscribe()
                .DisposeWith(_disposable);

            sellersRefCount
                .Filter(x => x.Category.GetLineItemType() == UnderwritingType.Income)
                .SortBy(x => x.Category)
                .Bind(out _sellersIncomeItems)
                .DisposeMany()
                .Subscribe()
                .DisposeWith(_disposable);

            sellersRefCount
                .Filter(x => x.Category.GetLineItemType() == UnderwritingType.Expense)
                .SortBy(x => x.Category)
                .Bind(out _sellersExpenseItems)
                .DisposeMany()
                .Subscribe()
                .DisposeWith(_disposable);

            ourRefCount
                .SortBy(x => x.Category)
                .Bind(out _ourLineItems)
                .DisposeMany()
                .Subscribe()
                .DisposeWith(_disposable);

            ourRefCount
                .Filter(x => x.Category.GetLineItemType() == UnderwritingType.Income)
                .SortBy(x => x.Category)
                .Bind(out _ourIncomeItems)
                .DisposeMany()
                .Subscribe()
                .DisposeWith(_disposable);

            ourRefCount
                .Filter(x => x.Category.GetLineItemType() == UnderwritingType.Expense)
                .SortBy(x => x.Category)
                .Bind(out _ourExpenseItems)
                .DisposeMany()
                .Subscribe()
                .DisposeWith(_disposable);

            mortgageRefCount
                .Bind(out _mortgages)
                .DisposeMany()
                .Subscribe()
                .DisposeWith(_disposable);

            modelRefCount
                .Bind(out _models)
                .DisposeMany()
                .Subscribe()
                .DisposeWith(_disposable);

            forecastRef
                .Bind(out _forecast)
                .DisposeMany()
                .Subscribe()
                .DisposeWith(_disposable);

            projectionsRef
                .Bind(out _projections)
                .DisposeMany()
                .Subscribe()
                .DisposeWith(_disposable);
            #endregion

            #region Configure Summary Properties
            ConfigureLedgerItem(ourRefCount, nameof(GrossScheduledRent), out _grossScheduledRent, UnderwritingCategory.GrossScheduledRent);
            ConfigureLedgerItem(ourRefCount, nameof(VacanyTotal), out _vacancyTotal, UnderwritingCategory.PhysicalVacancy);
            ConfigureLedgerItem(ourRefCount, nameof(ConcessionsNonPayment), out _concessionsNonPayment, UnderwritingCategory.ConsessionsNonPayment);
            ConfigureLedgerItem(ourRefCount, nameof(UtilityReimbursement), out _utilityReimbursement, UnderwritingCategory.UtilityReimbursement);
            ConfigureLedgerItem(ourRefCount, nameof(OtherIncome), out _otherIncome, UnderwritingCategory.OtherIncome, UnderwritingCategory.OtherIncomeBad);

            ConfigureLedgerItem(ourRefCount, nameof(PropertyTaxes), out _propertyTaxes, UnderwritingCategory.Taxes);
            ConfigureLedgerItem(ourRefCount, nameof(PropertyInsurance), out _propertyInsurance, UnderwritingCategory.Insurance);
            ConfigureLedgerItem(ourRefCount, nameof(RepairsMaintenance), out _repairsMaintenance, UnderwritingCategory.RepairsMaintenance);
            ConfigureLedgerItem(ourRefCount, nameof(GeneralAdmin), out _generalAdmin, UnderwritingCategory.GeneralAdmin);
            ConfigureLedgerItem(ourRefCount, nameof(ManagementTotal), out _managementTotal, UnderwritingCategory.Management);
            ConfigureLedgerItem(ourRefCount, nameof(Marketing), out _marketing, UnderwritingCategory.Marketing);
            ConfigureLedgerItem(ourRefCount, nameof(Utilities), out _utilities, UnderwritingCategory.Utility);
            ConfigureLedgerItem(ourRefCount, nameof(ContractServices), out _contractServices, UnderwritingCategory.ContractServices);
            ConfigureLedgerItem(ourRefCount, nameof(Payroll), out _payroll, UnderwritingCategory.Payroll);

            // Update Ledger Physical Vacancy
            ourRefCount
                .AutoRefreshOnObservable(_ => this.WhenAnyValue(x => x.GrossScheduledRent, x => x.MarketVacancy, x => x.PhysicalVacancy))
                .ToCollection()
                .WithLatestFrom(this.WhenAnyValue(x => x.GrossScheduledRent, x => x.MarketVacancy, x => x.PhysicalVacancy))
                .Select(x => new VacancyUpdate(x.Second.Item1, x.Second.Item2, x.Second.Item3, x.First))
                .InvokeCommand(_vacancyUpdate)
                .DisposeWith(_disposable);

            // Update Ledger Management
            ourRefCount
                .AutoRefreshOnObservable(_ => this.WhenAnyValue(x => x.EffectiveGrossIncome, x => x.Management))
                .ToCollection()
                .WithLatestFrom(this.WhenAnyValue(x => x.TotalRentalIncome, x => x.Management))
                .Select(x => new ManagementUpdate(x.Second.Item1, x.Second.Item2, x.First))
                .InvokeCommand(_updateManagement)
                .DisposeWith(_disposable);

            // AnnualDebtService - Calculated sum from the _mortgageCache AnnualDebtService
            mortgageRefCount
                .ToCollection()
                .Select(x => x.Sum(m => m.AnnualDebtService))
                .ToProperty(this, nameof(AnnualDebtService), out _annualDebtService);

            mortgageRefCount
                .AutoRefreshOnObservable(_ => this.WhenAnyValue(x => x.PurchasePrice, x => x.LTV, x => x.LoanType))
                .WithLatestFrom(this.WhenAnyValue(x => x.PurchasePrice, x => x.LTV, x => x.LoanType))
                .Select(x => new MortgageUpdate(x.Second.Item1, x.Second.Item2, x.Second.Item3))
                .InvokeCommand(_calculateLoanAmount)
                .DisposeWith(_disposable);

            mortgageRefCount
                .AutoRefreshOnObservable(_ => this.WhenAnyValue(x => x.PurchasePrice, x => x.LoanType))
                .WithLatestFrom(this.WhenAnyValue(x => x.PurchasePrice, x => x.LoanType))
                .Select(x => new ManualMortgageUpdate(x.Second.Item1, x.Second.Item2))
                .InvokeCommand(_updateLTV)
                .DisposeWith(_disposable);
            #endregion Configure Summary Properties

            this.WhenAnyValue(x => x.GrossScheduledRent, x => x.ConcessionsNonPayment, x => x.VacanyTotal, CalculateTotalRentalIncome)
                .ToProperty(this, nameof(TotalRentalIncome), out _totalRentalIncome)
                .DisposeWith(_disposable);

            this.WhenAnyValue(x => x.TotalRentalIncome, x => x.UtilityReimbursement, x => x.OtherIncome, CalculateEffectiveGrossIncome)
                .ToProperty(this, nameof(EffectiveGrossIncome), out _effectiveGrossIncome)
                .DisposeWith(_disposable);

            this.WhenAnyValue(x => x.RepairsMaintenance, x => x.GeneralAdmin, x => x.ManagementTotal, x => x.Marketing, x => x.Utilities, x => x.ContractServices, x => x.Payroll, CalculateOperatingExpenses)
                .ToProperty(this, nameof(OperatingExpenses), out _operartingExpenses)
                .DisposeWith(_disposable);

            this.WhenAnyValue(x => x.OperatingExpenses, x => x.PropertyTaxes, x => x.PropertyInsurance, CalculateTotalExpenses)
                .ToProperty(this, nameof(TotalExpenses), out _totalExpenses)
                .DisposeWith(_disposable);

            this.WhenAnyValue(x => x.EffectiveGrossIncome, x => x.TotalExpenses, (egi, te) => egi - te)
                .ToProperty(this, nameof(NOI), out _noi)
                .DisposeWith(_disposable);

            this.WhenAnyValue(x => x.NOI, x => x.AnnualDebtService, CalculateDebtCoverage)
                .ToProperty(this, nameof(DebtCoverage), out _debtCoverage)
                .DisposeWith(_disposable);

            this.WhenAnyValue(x => x.NOI, x => x.PurchasePrice, CalculateCapRate)
                .ToProperty(this, nameof(CapRate), out _capRate)
                .DisposeWith(_disposable);

            sellersRefCount
                .ToCollection()
                .Select(x => CalculateNOI(x, Management, false))
                .ToProperty(this, nameof(SellerNOI), out _sellerNOI)
                .DisposeWith(_disposable);

            _incomeLedger = this.WhenAnyValue(x => x.GrossScheduledRent, x => x.VacanyTotal, x => x.ConcessionsNonPayment, x => x.OtherIncome, x => x.Utilities, x => x.TotalRentalIncome, x => x.EffectiveGrossIncome, (gsr, vt, cnp, oi, util, tri, egi) => new IncomeLedger(gsr, vt, cnp, oi, util, tri, egi));
            _expenseLedger = this.WhenAnyValue(x => x.PropertyTaxes, x => x.PropertyInsurance, x => x.RepairsMaintenance, x => x.GeneralAdmin, x => x.Marketing, x => x.Utilities, x => x.Management, x => x.ContractServices, x => x.Payroll, (pt, pi, rm, ga, mark, util, man, cs, p) => new ExpenseLedger(pt, pi, rm, ga, mark, util, man, cs, p));
            _coreInfo = this.WhenAnyValue(x => x.StartDate,
                x => x.Units,
                x => x.CapXTotal,
                x => x.PurchasePrice,
                x => x.NOI,
                x => x.AnnualDebtService, (StartDate, Units, CapX, PurchasePrice, NOI, AnnualDebtService) => new CoreInfo(StartDate.Date, Units, CapX, PurchasePrice, NOI, AnnualDebtService));
            _additionalInfo = this.WhenAnyValue(x => x.HoldYears,
                x => x.Management,
                x => x.PhysicalVacancy,
                x => x.ReversionCapRate,
                x => x.CapRate,
                x => x.Raise,
                x => x.DesiredYield, (Hold, Management, PhysicalVacancy, ReversionCapRate, CapRate, Raise, DesiredYield) => new AdditionalInfo(Hold, Management, PhysicalVacancy, ReversionCapRate, CapRate, Raise, DesiredYield));
            _projectionContext = this.WhenAnyObservable(x => x._coreInfo, x => x._additionalInfo, (core, additional) => new PropertyInfo(core.StartDate, core.Units, core.CapX, core.PurchasePrice, core.NOI, core.AnnualDebtService, additional.Hold, additional.Management, additional.PhysicalVacancy, additional.ReversionCapRate, additional.CapRate, additional.Raise, additional.DesiredYield));

            var projectionUpdate = mortgageRefCount
                .AutoRefreshOnObservable(_ => this.WhenAnyObservable(x => x._incomeLedger, x => x._expenseLedger, x => x._projectionContext, (income, expense, context) => (income, expense, context)))
                .ToCollection()
                .WithLatestFrom(this.WhenAnyObservable(x => x._incomeLedger, x => x._expenseLedger, x => x._projectionContext, (income, expense, context) => (income, expense, context)))
                .Select(x => new ProjectionContext(x.Second.income, x.Second.expense, x.Second.context, x.First));

            // double ManagementRate, double VacancyRate, double ReversionCapRate, double CapRate

            var projectionUpdateObservable = forecastRef
                .AutoRefresh(x => x.FixedIncreaseOnRemainingUnits)
                .AutoRefresh(x => x.IncreaseType)
                .AutoRefresh(x => x.OtherIncomePercent)
                .AutoRefresh(x => x.OtherLossesPercent)
                .AutoRefresh(x => x.PerUnitIncrease)
                .AutoRefresh(x => x.UnitsAppliedTo)
                .AutoRefresh(x => x.UtilityIncreases)
                .AutoRefresh(x => x.Vacancy)
                .AutoRefreshOnObservable(_ => projectionUpdate)
                .ToCollection()
                .WithLatestFrom(projectionUpdate)
                .Select(x => new ProjectionUpdate(x.Second, x.First));

            projectionsRef
                .ToCollection()
                .WithLatestFrom(_projectionContext)
                .Select(x => CalculateNetPresentValue(x.First, x.Second))
                .ToProperty(this, nameof(NetPresentValue), out _netPresentValue)
                .DisposeWith(_disposable);

            projectionsRef
                .ToCollection()
                .WithLatestFrom(_projectionContext)
                .Select(x => CalculateInternalRateOfReturn(x.First, x.Second))
                .ToProperty(this, nameof(InternalRateOfReturn), out _internalRateOfReturn)
                .DisposeWith(_disposable);

            projectionUpdateObservable
                .InvokeCommand(_updateProjections)
                .DisposeWith(_disposable);

            this.WhenAnyValue(x => x.RentableSqFt, x => x.PurchasePrice, CalculatePricePerSqFt)
                .ToProperty(this, nameof(PricePerSqFt), out _pricePerSqFt)
                .DisposeWith(_disposable);

            this.WhenAnyValue(x => x.CapX, x => x.CapXType, x => x.Units, x => x.PurchasePrice, CalculateCapX)
                .ToProperty(this, nameof(CapXTotal), out _capXTotal)
                .DisposeWith(_disposable);

            this.WhenAnyValue(x => x.NOI, x => x.Raise, CalculateCashOnCash)
                .ToProperty(this, nameof(CashOnCash), out _cashOnCash)
                .DisposeWith(_disposable);

            this.WhenAnyValue(x => x.SellerNOI, x => x.Raise, CalculateCashOnCash)
                .ToProperty(this, nameof(SellerCashOnCash), out _sellerCashOnCash)
                .DisposeWith(_disposable);

            this.WhenAnyValue(x => x.AquisitionFeePercent, x => x.PurchasePrice, CalculateAquisitionFee)
                .ToProperty(this, nameof(AquisitionFee), out _aquisitionFee)
                .DisposeWith(_disposable);

            this.WhenAnyValue(x => x.ClosingCosts, x => x.ClosingCostOther, x => x.AquisitionFee, x => x.PurchasePrice, x => x.LTV, CalculateRaise)
                .ToProperty(this, nameof(Raise), out _raise)
                .DisposeWith(_disposable);

            this.WhenAnyValue(x => x.PurchasePrice, x => x.ClosingCostPercent, CalculateClosingCosts)
                .ToProperty(this, nameof(ClosingCosts), out _closingCosts)
                .DisposeWith(_disposable);

            this.WhenAnyValue(x => x.SellerNOI, x => x.PurchasePrice, CalculateCapRate)
                .ToProperty(this, nameof(SellerCapRate), out _sellerCapRate)
                .DisposeWith(_disposable);

            this.WhenAnyValue(x => x.PurchasePrice, x => x.Units, CalculateCostPerUnit)
                .ToProperty(this, nameof(CostPerUnit), out _costPerUnit)
                .DisposeWith(_disposable);

            this.WhenAnyValue(x => x.HoldYears, x => x.IncomeForecast, (h, i) => Unit.Default)
                .InvokeCommand(_updateIncomeForecast)
                .DisposeWith(_disposable);

            this.WhenAnyValue(x => x.GrossPotentialRent, x => x.GrossScheduledRent, CalculateLossToLease)
                .ToProperty(this, nameof(LossToLease), out _lossToLease)
                .DisposeWith(_disposable);

            this.WhenAnyValue(x => x.OperatingExpenses, x => x.PropertyInsurance, x => x.DeferredMaintenance, x => x.CapXTotal, x => x.SECAttorney, x => x.ClosingCostMiscellaneous, CalculateClosingCostOther)
                .ToProperty(this, nameof(ClosingCostOther), out _closingCostOther)
                .DisposeWith(_disposable);

            _mortgageCache.AddOrUpdate(new UnderwritingAnalysisMortgage
            {
                Id = Guid.NewGuid(),
                InterestRate = 0.04,
                Points = 0.01,
                TermInYears = 30
            });

            StartDate = DateTime.Now.AddMonths(3);
        }

        #region Settable Properties

        public Guid Id { get; set; }

        public Guid? AssetId { get; set; }

        public DateTimeOffset Timestamp { get; set; }

        [Reactive]
        public DateTimeOffset StartDate { get; set; }

        public string Name { get; set; }

        public string Underwriter { get; set; }

        public string UnderwriterEmail { get; set; }

        public string Address { get; set; }

        public string Market { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string Zip { get; set; }

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:P}")]
        public double DesiredYield { get; set; }

        [Reactive]
        public int HoldYears { get; set; }

        [Reactive]
        public int Units { get; set; }

        [DisplayFormat(DataFormatString = "{0:0000}")]
        public int Vintage { get; set; }

        [Reactive]
        public UnderwritingLoanType LoanType { get; set; }

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:P}")]
        public double LTV { get; set; } = 0.8;

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double AskingPrice { get; set; }

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double StrikePrice { get; set; }

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double OfferPrice { get; set; }

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double PurchasePrice { get; set; }

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double Downpayment { get; set; }

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:G}")]
        public int RentableSqFt { get; set; }

        [DisplayFormat(DataFormatString = "{0:C}")]
        public double GrossPotentialRent { get; set; }

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:P}")]
        public double PhysicalVacancy { get; set; }

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:P}")]
        public double MarketVacancy { get; set; }

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:P}")]
        public double Management { get; set; }

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double CapX { get; set; }

        [Reactive]
        public CostType CapXType { get; set; }

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:P}")]
        public double OurEquityOfCF { get; set; } = 0.25;

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:P}")]
        public double AquisitionFeePercent { get; set; } = 0.05;

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:P}")]
        public double ClosingCostPercent { get; set; } = 0.03;

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double DeferredMaintenance { get; set; }

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double SECAttorney { get; set; }

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double ClosingCostMiscellaneous { get; set; }

        public UnderwritingStatus Status { get; set; }

        public PropertyClass PropertyClass { get; set; }

        public PropertyClass NeighborhoodClass { get; set; }

        #region Bucketlist Notes

        public string GrossPotentialRentNotes { get; set; }

        public string LossToLeaseNotes { get; set; }

        public string GrossScheduledRentNotes { get; set; }

        public string PhysicalVacancyNotes { get; set; }

        public string ConcessionsNonPaymentNotes { get; set; }

        public string UtilityReimbursementNotes { get; set; }

        public string OtherIncomeNotes { get; set; }

        public string TaxesNotes { get; set; }

        public string MarketingNotes { get; set; }

        public string InsuranceNotes { get; set; }

        public string UtilityNotes { get; set; }

        public string RepairsMaintenanceNotes { get; set; }

        public string ContractServicesNotes { get; set; }

        public string PayrollNotes { get; set; }

        public string GeneralAdminNotes { get; set; }

        public string ManagementNotes { get; set; }

        public string LendingNotes { get; set; }

        #endregion Bucketlist Notes

        [Reactive]
        [DisplayFormat(DataFormatString = "{0:P}")]
        public double ReversionCapRate { get; set; }

        [Reactive]
        [JsonIgnore]
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double Reversion { get; private set; }

        #endregion Settable Properties

        #region Collections

        public UnderwritingAnalysisDealAnalysis DealAnalysis { get; set; }

        [AddMethod(nameof(ReplaceSellerItems))]
        public IEnumerable<UnderwritingAnalysisLineItem> Sellers => _sellersLineItems;

        [JsonIgnore]
        public IEnumerable<UnderwritingAnalysisLineItem> SellerIncome => _sellersIncomeItems;

        [JsonIgnore]
        public IEnumerable<UnderwritingAnalysisLineItem> SellerExpense => _sellersExpenseItems;

        [AddMethod(nameof(ReplaceOurItems))]
        public IEnumerable<UnderwritingAnalysisLineItem> Ours => _ourLineItems;

        [JsonIgnore]
        public IEnumerable<UnderwritingAnalysisLineItem> OurIncome => _ourIncomeItems;

        [JsonIgnore]
        public IEnumerable<UnderwritingAnalysisLineItem> OurExpense => _ourExpenseItems;

        [AddMethod(nameof(ReplaceMortgages))]
        public IEnumerable<UnderwritingAnalysisMortgage> Mortgages => _mortgages;

        public List<UnderwritingAnalysisNote> Notes { get; set; }

        [AddMethod(nameof(AddModels))]
        public IEnumerable<UnderwritingAnalysisModel> Models => _models;

        public List<UnderwritingAnalysisCapitalImprovement> CapitalImprovements { get; set; }

        [AddMethod(nameof(ReplaceForecast))]
        public IEnumerable<UnderwritingAnalysisIncomeForecast> IncomeForecast => _forecast;

        [JsonIgnore]
        public IEnumerable<UnderwritingAnalysisProjection> Projections => _projections;

        #endregion Collections

        #region Calculated Properties
        private ObservableAsPropertyHelper<double> _grossScheduledRent;
        public double GrossScheduledRent => _grossScheduledRent?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _concessionsNonPayment;
        public double ConcessionsNonPayment => _concessionsNonPayment?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _vacancyTotal;
        public double VacanyTotal => _vacancyTotal?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _otherIncome;
        public double OtherIncome => _otherIncome?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _utilityReimbursement;
        public double UtilityReimbursement => _utilityReimbursement?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _totalRentalIncome;
        public double TotalRentalIncome => _totalRentalIncome?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _effectiveGrossIncome;
        public double EffectiveGrossIncome => _effectiveGrossIncome?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _annualDebtService;
        public double AnnualDebtService => _annualDebtService?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _propertyTaxes;
        public double PropertyTaxes => _propertyTaxes?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _propertyInsurance;
        public double PropertyInsurance => _propertyInsurance?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _repairsMaintenance;
        public double RepairsMaintenance => _repairsMaintenance?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _generalAdmin;
        public double GeneralAdmin => _generalAdmin?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _marketing;
        public double Marketing => _marketing?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _utilities;
        public double Utilities => _utilities?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _contractServices;
        public double ContractServices => _contractServices?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _managementTotal;
        public double ManagementTotal => _managementTotal?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _payroll;
        public double Payroll => _payroll?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _operartingExpenses;
        public double OperatingExpenses => _operartingExpenses?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _totalExpenses;
        public double TotalExpenses => _totalExpenses?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _netPresentValue;
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double NetPresentValue => _netPresentValue?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _internalRateOfReturn;
        [DisplayFormat(DataFormatString = "{0:P}")]
        public double InternalRateOfReturn => _internalRateOfReturn?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _totalAnnualReturn;
        [DisplayFormat(DataFormatString = "{0:P}")]
        public double TotalAnnualReturn => _totalAnnualReturn?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _capXTotal;
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double CapXTotal => _capXTotal?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _costPerUnit;
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double CostPerUnit => _costPerUnit?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _pricePerSqFt;
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double PricePerSqFt => _pricePerSqFt?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _noi;
        [DisplayFormat(DataFormatString = "{0:C}")]
        [JsonPropertyName("noi")]
        public double NOI => _noi?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _sellerNOI;
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double SellerNOI => _sellerNOI?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _lossToLease;
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double LossToLease => _lossToLease?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _capRate;
        [DisplayFormat(DataFormatString = "{0:P}")]
        public double CapRate => _capRate?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _sellerCapRate;
        [DisplayFormat(DataFormatString = "{0:P}")]
        public double SellerCapRate => _sellerCapRate?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _cashOnCash;
        [DisplayFormat(DataFormatString = "{0:P}")]
        public double CashOnCash => _cashOnCash?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _sellerCashOnCash;
        [DisplayFormat(DataFormatString = "{0:P}")]
        public double SellerCashOnCash => _sellerCashOnCash?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _aquisitionFee;
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double AquisitionFee => _aquisitionFee?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _closingCosts;
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double ClosingCosts => _closingCosts?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _closingCostOther;
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double ClosingCostOther => _closingCostOther?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _debtCoverage;
        [DisplayFormat(DataFormatString = "{0:P}")]
        public double DebtCoverage => _debtCoverage?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _raise;
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double Raise => _raise?.Value ?? 0;

        private ObservableAsPropertyHelper<double> _annualCashOnCashReturn;
        public double AnnualCashOnCashReturn => _annualCashOnCashReturn?.Value ?? 0;
        #endregion Calculated Properties

        #region Collection CRUD Helpers

        public void AddModel(UnderwritingAnalysisModel item)
        {
            if (item.Id == default)
                item.Id = Guid.NewGuid();

            _modelsCache.AddOrUpdate(item);
        }

        public void AddModels(IEnumerable<UnderwritingAnalysisModel> items)
        {
            foreach (var model in items.Where(x => x.Id == default))
                model.Id = Guid.NewGuid();

            _modelsCache.Edit(x => x.AddOrUpdate(items));
        }

        public void RemoveModel(UnderwritingAnalysisModel model)
        {
            _modelsCache.Remove(model);
        }

        public void AddMortgage(UnderwritingAnalysisMortgage mortgage)
        {
            if (LoanType != UnderwritingLoanType.Automatic)
                _mortgageCache.AddOrUpdate(mortgage);
            else
                _mortgageCache.Edit(x =>
                {
                    x.Clear();
                    x.AddOrUpdate(mortgage);
                });
        }

        public void AddMortgages(IEnumerable<UnderwritingAnalysisMortgage> item)
        {
            _mortgageCache.Edit(x => x.AddOrUpdate(item));
        }

        public void ReplaceMortgages(IEnumerable<UnderwritingAnalysisMortgage> items)
        {
            _mortgageCache.Edit(x =>
            {
                x.Clear();
                x.AddOrUpdate(items);
            });
        }

        public void RemoveMortgage(UnderwritingAnalysisMortgage mortgage)
        {
            _mortgageCache.Remove(mortgage.Id);
        }

        public void AddSellerItem(UnderwritingAnalysisLineItem item)
        {
            _sellersCache.AddOrUpdate(item);
        }

        public void AddSellerItems(IEnumerable<UnderwritingAnalysisLineItem> items)
        {
            _sellersCache.Edit(x => x.AddOrUpdate(items));
        }

        public void RemoveSellerItem(UnderwritingAnalysisLineItem item)
        {
            _sellersCache.Remove(item.Id);
        }

        public void ReplaceSellerItems(IEnumerable<UnderwritingAnalysisLineItem> items)
        {
            _sellersCache.Edit(x =>
            {
                x.Clear();
                x.AddOrUpdate(items);
            });
        }

        public void AddOurItem(UnderwritingAnalysisLineItem item)
        {
            _oursCache.AddOrUpdate(item);
        }

        public void AddOurItems(IEnumerable<UnderwritingAnalysisLineItem> items)
        {
            _oursCache.Edit(x => x.AddOrUpdate(items));
        }

        public void ReplaceOurItems(IEnumerable<UnderwritingAnalysisLineItem> items)
        {
            _oursCache.Edit(x =>
            {
                x.Clear();
                x.AddOrUpdate(items.Select(x =>
                {
                    x.Id = Guid.NewGuid();
                    return x;
                }));
            });
        }

        public void RemoveOurItem(UnderwritingAnalysisLineItem item)
        {
            _oursCache.Remove(item.Id);
        }

        [EditorBrowsable(EditorBrowsableState.Never)]
        public void ReplaceForecast(IEnumerable<UnderwritingAnalysisIncomeForecast> items)
        {
            _forecastCache.Edit(x =>
            {
                x.Clear();
                x.AddOrUpdate(items.OrderBy(i => i.Year));
            });
        }

        #endregion Collection CRUD Helpers

        #region Command Handlers
        private void OnCalculateLoanAmount(MortgageUpdate update)
        {
            if (update.LoanType != UnderwritingLoanType.Automatic)
                return;

            var loanAmount = update.PurchasePrice * update.LTV;
            if(Mortgages.Count() == 1)
            {
                var mortgage = Mortgages.First();
                if (mortgage.LoanAmount != loanAmount)
                {
                    mortgage.LoanAmount = loanAmount;
                    _mortgageCache.AddOrUpdate(mortgage);
                }
            }
            else
            {
                var mortgage = new UnderwritingAnalysisMortgage
                {
                    Id = Guid.NewGuid(),
                    InterestRate = 0.04,
                    LoanAmount = loanAmount,
                    Points = 0.01,
                    TermInYears = 30
                };
                ReplaceMortgages(new[] { mortgage });
            }
        }

        private void OnDownpaymentCommandExecuted()
        {
            if (PurchasePrice > 0 && LoanType == UnderwritingLoanType.NewLoan && Mortgages != null && Mortgages.Any())
            {
                var mortgageTotal = Mortgages.Sum(x => x.LoanAmount);
                LTV = mortgageTotal / PurchasePrice;
                Downpayment = PurchasePrice - mortgageTotal;
            }
            else if (PurchasePrice > 0 && LoanType == UnderwritingLoanType.Automatic)
            {
                Downpayment = PurchasePrice - (PurchasePrice * LTV);
            }
        }

        private void OnCalculateGSRAndManagement()
        {
            if (Ours is null)
                return;

            var gsr = Ours.Where(x => x.Category == UnderwritingCategory.GrossScheduledRent).Sum(x => x.AnnualizedTotal);

            if (gsr <= 0)
                return;

            var rate = Math.Max(0.05, Math.Min(MarketVacancy, PhysicalVacancy));
            var amount = rate * gsr;
            var vacancy = Ours.FirstOrDefault(x => x.Category == UnderwritingCategory.PhysicalVacancy);
            if (vacancy is null)
            {
                AddOurItem(new UnderwritingAnalysisLineItem
                {
                    Amount = amount,
                    Category = UnderwritingCategory.PhysicalVacancy,
                    Description = UnderwritingCategory.PhysicalVacancy.GetDisplayName(),
                    ExpenseType = ExpenseSheetType.T12,
                });
            }
            else if (vacancy.Amount != amount)
            {
                vacancy.Amount = amount;
            }

            var managementAmount = gsr * Management;
            var management = Ours.FirstOrDefault(x => x.Category == UnderwritingCategory.Management);
            if (management is null)
            {
                AddOurItem(new UnderwritingAnalysisLineItem
                {
                    Amount = managementAmount,
                    Category = UnderwritingCategory.Management,
                    Description = UnderwritingCategory.Management.GetDisplayName(),
                    ExpenseType = ExpenseSheetType.T12
                });
            }
            else if (management.Amount != managementAmount)
            {
                management.Amount = managementAmount;
            }
        }

        private void OnUpdateIncomeForecast()
        {
            var list = new List<UnderwritingAnalysisIncomeForecast>();

            if(IncomeForecast.Count() != HoldYears + 1)
            {
                var temp = IncomeForecast.ToArray();
                for (int i = 0; i < HoldYears + 1; i++)
                {
                    var forecast = temp.FirstOrDefault(x => x.Year == i);
                    list.Insert(i, forecast ?? new UnderwritingAnalysisIncomeForecast
                    {
                        Year = i,
                    });
                }

                ReplaceForecast(list);
            }
        }

        private void OnUpdateProjections(ProjectionUpdate update)
        {
            if (!(update.Forecast?.Any() ?? false))
                return;

            var list = new List<UnderwritingAnalysisProjection>();
            var grossScheduledRent = update.Context.IncomeLedger.GrossScheduledRent;
            var concessionsNonPayment = update.Context.IncomeLedger.Concessions;
            var otherIncome = update.Context.IncomeLedger.OtherIncome;
            var utilityReimbursement = update.Context.IncomeLedger.UtilityReimbursement;

            var taxes = update.Context.ExpenseLedger.Taxes;
            var insurance = update.Context.ExpenseLedger.Insurance;
            var repairsMaint = update.Context.ExpenseLedger.RepairsMaintenance;
            var generalAdmin = update.Context.ExpenseLedger.GeneralAdmin;
            var marketing = update.Context.ExpenseLedger.Marketing;
            var utility = update.Context.ExpenseLedger.Utility;
            var contractServices = update.Context.ExpenseLedger.ContractServices;
            var payroll = update.Context.ExpenseLedger.Payroll;

            var debtService = update.Context.Info.DebtService;
            var capitalReserves = update.Context.Info.CapX;

            var loanStart = update.Context.Info.Start.AddMonths(2);
            var firstYearOffset = 0;
            if(loanStart.Year > update.Context.Info.Start.Year)
            {
                firstYearOffset -= loanStart.Month;
            }

            var months = 0;
            for (int i = 0; i < update.Context.Info.Hold + 1; i++)
            {
                if (i == 0)
                {
                    if (firstYearOffset == 0)
                        months = 13 - loanStart.Month;
                    else
                        months = 0;
                }
                else if (i == 1 && firstYearOffset != 0)
                {
                    // First Year Offset is negative
                    months = 12 - firstYearOffset;
                }
                else
                {
                    months += 12;
                }

                var factor = 1.0;
                if (i == 0)
                {
                    factor = (new DateTime(update.Context.Info.Start.Year, 1, 1) - update.Context.Info.Start) / TimeSpan.FromDays(365);
                }

                var forecast = IncomeForecast.ElementAtOrDefault(i);
                if (forecast is null)
                    break;

                if ((forecast.UnitsAppliedTo > 0 && forecast.PerUnitIncrease > 0) || forecast.FixedIncreaseOnRemainingUnits > 0)
                {
                    var increase = forecast.IncreaseType switch
                    {
                        IncomeForecastIncreaseType.FixedAmount => forecast.UnitsAppliedTo * forecast.PerUnitIncrease,
                        _ => (forecast.UnitsAppliedTo / update.Context.Info.Units) * (grossScheduledRent * forecast.PerUnitIncrease),
                    };
                    increase += (update.Context.Info.Units - forecast.UnitsAppliedTo) * forecast.FixedIncreaseOnRemainingUnits;
                    grossScheduledRent += increase;
                }

                if (forecast.OtherIncomePercent > 0)
                {
                    otherIncome += otherIncome * forecast.OtherIncomePercent;
                }

                utility += forecast.UtilityIncreases;

                var vacancyRate = forecast.Vacancy > 0 ? forecast.Vacancy : update.Context.Info.VacancyRate;
                var vacancy = (grossScheduledRent * vacancyRate);
                var netCollectedRent = grossScheduledRent - vacancy;
                var management = update.Context.Info.ManagementRate * netCollectedRent;

                var egi = grossScheduledRent - vacancy - concessionsNonPayment + otherIncome + utilityReimbursement;
                var expenses = taxes + insurance + repairsMaint + generalAdmin + management + marketing + utility + contractServices + payroll;

                if (forecast.OtherLossesPercent > 0)
                {
                    expenses -= egi * forecast.OtherLossesPercent;
                }

                var noi = egi - expenses;
                var capRate = update.Context.Info.ReversionCapRate > 0 ? update.Context.Info.ReversionCapRate : update.Context.Info.CapRate - 0.01;
                if (capRate <= 0)
                    capRate = 0.06;

                list.Add(new UnderwritingAnalysisProjection
                {
                    CapitalReserves = capitalReserves * factor,
                    ConcessionsNonPayment = concessionsNonPayment * factor,
                    ContractServices = contractServices * factor,
                    DebtService = debtService * factor,
                    GeneralAdmin = generalAdmin * factor,
                    GrossScheduledRent = grossScheduledRent * factor,
                    Insurance = insurance * factor,
                    Management = management * factor,
                    Marketing = marketing * factor,
                    OtherIncome = otherIncome * factor,
                    Payroll = payroll * factor,
                    RemainingDebt = update.Context.Loans.Sum(x => x.CalculateRemainingBalance(months)),
                    RepairsMaintenance = repairsMaint * factor,
                    SalesPrice = noi / capRate,
                    Taxes = taxes * factor,
                    UtilityReimbursement = utilityReimbursement * factor,
                    Vacancy = vacancy * factor,
                    Year = update.Context.Info.Start.Year + i
                });
            }

            _projectionCache.Edit(x =>
            {
                x.Clear();
                x.AddOrUpdate(list);
            });

            Reversion = Projections.LastOrDefault()?.SalesPrice ?? PurchasePrice;
        }

        private void OnUpdateLTV(ManualMortgageUpdate update)
        {
            if (update.LoanType == UnderwritingLoanType.Automatic)
                return;

            if (update.PurchasePrice == 0)
                LTV = 0;

            var totalLoans = Mortgages.Sum(x => x.LoanAmount);
            var ltv = totalLoans / update.PurchasePrice;
            if (LTV != ltv)
                LTV = ltv;
        }

        private void OnManagementChanged(ManagementUpdate update)
        {
            var percent = Math.Max(0, update.ManagementPercent);
            var income = Math.Max(0, update.TotalRentalIncome);
            var total = income * percent;
            var existingCount = update.Ledger.Count(x => x.Category == UnderwritingCategory.Management);
            var item = new UnderwritingAnalysisLineItem
            {
                Id = Guid.NewGuid(),
                Category = UnderwritingCategory.Management,
                Description = UnderwritingCategory.Management.GetDisplayName(),
                ExpenseType = ExpenseSheetType.T12,
                Amount = total,
            };

            if (existingCount == 1)
            {
                var record = update.Ledger.First(x => x.Category == UnderwritingCategory.Management);
                record.ExpenseType = ExpenseSheetType.T12;
                record.Amount = total;
            }
            else if (existingCount > 1)
            {
                var toRemove = update.Ledger.Where(x => x.Category == UnderwritingCategory.Management);

                _oursCache.Edit(x =>
                {
                    x.Remove(toRemove);
                    x.AddOrUpdate(item);
                });
            }
            else
            {
                _oursCache.AddOrUpdate(item);
            }
        }

        private void OnVacancyChanged(VacancyUpdate update)
        {
            var rate = new[] { 0.05, update.MarketVacancy, update.PhysicalVacancy }
                .Where(x => x >= 0.05)
                .Min();

            var total = Math.Max(0, update.GrossScheduledRent) * rate;
            var existingCount = update.Ledger.Count(x => x.Category == UnderwritingCategory.PhysicalVacancy);
            var item = new UnderwritingAnalysisLineItem
            {
                Id = Guid.NewGuid(),
                Category = UnderwritingCategory.PhysicalVacancy,
                Description = UnderwritingCategory.PhysicalVacancy.GetDisplayName(),
                ExpenseType = ExpenseSheetType.T12,
                Amount = total,
            };

            if (existingCount == 1)
            {
                var record = update.Ledger.First(x => x.Category == UnderwritingCategory.PhysicalVacancy);
                record.ExpenseType = ExpenseSheetType.T12;
                record.Amount = total;
            }
            else if(existingCount > 1)
            {
                var toRemove = update.Ledger.Where(x => x.Category == UnderwritingCategory.PhysicalVacancy);

                _oursCache.Edit(x =>
                {
                    x.Remove(toRemove);
                    x.AddOrUpdate(item);
                });
            }
            else
            {
                _oursCache.AddOrUpdate(item);
            }
        }
        #endregion Command Handlers

        private void ConfigureLedgerItem(IObservable<IChangeSet<UnderwritingAnalysisLineItem, Guid>> changeSet, string name, out ObservableAsPropertyHelper<double> helper, params UnderwritingCategory[] categories)
        {
            changeSet
                .Filter(x => categories.Any(c => c == x.Category))
                .ToCollection()
                .Select(x => GetSum(x, categories))
                .ToProperty(this, name, out helper)
                .DisposeWith(_disposable);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!_disposedValue)
            {
                if (disposing)
                {
                    // TODO: dispose managed state (managed objects)
                    _disposable.Dispose();
                }

                // TODO: free unmanaged resources (unmanaged objects) and override finalizer
                // TODO: set large fields to null
                _disposedValue = true;
            }
        }

        // // TODO: override finalizer only if 'Dispose(bool disposing)' has code to free unmanaged resources
        // ~UnderwritingAnalysis()
        // {
        //     // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
        //     Dispose(disposing: false);
        // }

        public void Dispose()
        {
            // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
            Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }

        private record MortgageUpdate(double PurchasePrice, double LTV, UnderwritingLoanType LoanType);
        private record ManualMortgageUpdate(double PurchasePrice, UnderwritingLoanType LoanType);
        private record ManagementUpdate(double TotalRentalIncome, double ManagementPercent, IEnumerable<UnderwritingAnalysisLineItem> Ledger);
        private record VacancyUpdate(double GrossScheduledRent, double MarketVacancy, double PhysicalVacancy, IEnumerable<UnderwritingAnalysisLineItem> Ledger);
        private record IncomeLedger(double GrossScheduledRent,
            double Vacancy,
            double Concessions,
            double OtherIncome,
            double UtilityReimbursement,
            double TotalRentalIncome,
            double EffectiveGrossIncome);

        private record ExpenseLedger(
            double Taxes,
            double Insurance,
            double RepairsMaintenance,
            double GeneralAdmin,
            double Marketing,
            double Utility,
            double Management,
            double ContractServices,
            double Payroll);

        private record CoreInfo(DateTime StartDate, int Units, double CapX, double PurchasePrice, double NOI, double AnnualDebtService);
        private record AdditionalInfo(int Hold, double Management, double PhysicalVacancy, double ReversionCapRate, double CapRate, double Raise, double DesiredYield);

        internal record PropertyInfo(
            DateTime Start,
            int Units,
            double CapX,
            double PurchasePrice,
            double NOI,
            double DebtService,
            int Hold,
            double ManagementRate,
            double VacancyRate,
            double ReversionCapRate,
            double CapRate,
            double Raise,
            double DesiredYield);

        private record ProjectionContext(
            IncomeLedger IncomeLedger,
            ExpenseLedger ExpenseLedger,
            PropertyInfo Info,
            IEnumerable<UnderwritingAnalysisMortgage> Loans);

        private record ProjectionUpdate(ProjectionContext Context, IEnumerable<UnderwritingAnalysisIncomeForecast> Forecast);
    }
}
