IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF SCHEMA_ID(N'SchemaToken') IS NULL EXEC(N'CREATE SCHEMA [SchemaToken];');
GO

CREATE TABLE [SchemaToken].[AssetsUnderManagement] (
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(max) NOT NULL,
    [Address] nvarchar(max) NOT NULL,
    [City] nvarchar(max) NOT NULL,
    [State] nvarchar(max) NOT NULL,
    [Zip] nvarchar(max) NOT NULL,
    [PurchasePrice] float NOT NULL,
    [SalesPrice] float NULL,
    [Units] int NOT NULL,
    [Highlighted] bit NOT NULL,
    [Status] int NOT NULL,
    [InvestorState] int NOT NULL,
    [UnderwritingId] uniqueidentifier NULL,
    CONSTRAINT [PK_AssetsUnderManagement] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [SchemaToken].[Categories] (
    [Id] nvarchar(40) NOT NULL,
    CONSTRAINT [PK_Categories] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [SchemaToken].[CrmContactMarkets] (
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(450) NOT NULL,
    CONSTRAINT [PK_CrmContactMarkets] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [SchemaToken].[CrmContactRoles] (
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(450) NOT NULL,
    [CoreTeam] bit NOT NULL,
    [SystemDefined] bit NOT NULL,
    CONSTRAINT [PK_CrmContactRoles] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [SchemaToken].[CrmContacts] (
    [Id] uniqueidentifier NOT NULL,
    [UserId] uniqueidentifier NULL,
    [Prefix] nvarchar(max) NOT NULL,
    [FirstName] nvarchar(max) NOT NULL,
    [MiddleName] nvarchar(max) NOT NULL,
    [LastName] nvarchar(max) NOT NULL,
    [Suffix] nvarchar(max) NOT NULL,
    [Company] nvarchar(max) NOT NULL,
    [Title] nvarchar(max) NOT NULL,
    [DoB] datetime2 NULL,
    [MarketNotes] nvarchar(max) NOT NULL,
    [LicenseNumber] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_CrmContacts] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [SchemaToken].[CustomContent] (
    [Id] nvarchar(450) NOT NULL,
    [Title] nvarchar(max) NOT NULL,
    [HtmlContent] nvarchar(max) NOT NULL,
    [LastUpdated] datetimeoffset NOT NULL,
    CONSTRAINT [PK_CustomContent] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [SchemaToken].[EmailPartialTemplates] (
    [Key] nvarchar(450) NOT NULL,
    [Content] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_EmailPartialTemplates] PRIMARY KEY ([Key])
);
GO

CREATE TABLE [SchemaToken].[EmailTemplates] (
    [Key] nvarchar(450) NOT NULL,
    [Description] nvarchar(max) NOT NULL,
    [Model] nvarchar(max) NOT NULL,
    [Html] nvarchar(max) NOT NULL,
    [PlainText] nvarchar(max) NOT NULL,
    [LastUpdated] datetimeoffset NOT NULL,
    CONSTRAINT [PK_EmailTemplates] PRIMARY KEY ([Key])
);
GO

CREATE TABLE [SchemaToken].[InvestorProspects] (
    [Id] uniqueidentifier NOT NULL,
    [FirstName] nvarchar(max) NOT NULL,
    [LastName] nvarchar(max) NOT NULL,
    [Email] nvarchar(max) NOT NULL,
    [Phone] nvarchar(max) NOT NULL,
    [Timezone] nvarchar(max) NOT NULL,
    [LookingToInvest] float NOT NULL,
    [Contacted] bit NOT NULL,
    [Comments] nvarchar(max) NOT NULL,
    [Timestamp] datetimeoffset NOT NULL,
    CONSTRAINT [PK_InvestorProspects] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [SchemaToken].[InvestorTestimonials] (
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(65) NOT NULL,
    [Title] nvarchar(30) NOT NULL,
    [PhotoUrl] nvarchar(max) NOT NULL,
    [Testimonial] nvarchar(max) NOT NULL,
    [Stars] int NOT NULL,
    [Active] bit NOT NULL,
    CONSTRAINT [PK_InvestorTestimonials] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [SchemaToken].[Roles] (
    [Id] nvarchar(450) NOT NULL,
    [Name] nvarchar(256) NULL,
    [NormalizedName] nvarchar(256) NULL,
    [ConcurrencyStamp] nvarchar(max) NULL,
    CONSTRAINT [PK_Roles] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [SchemaToken].[Settings] (
    [Key] nvarchar(450) NOT NULL,
    [Value] nvarchar(max) NULL,
    CONSTRAINT [PK_Settings] PRIMARY KEY ([Key])
);
GO

CREATE TABLE [SchemaToken].[SiteThemes] (
    [Id] nvarchar(450) NOT NULL,
    [IsDefault] bit NOT NULL,
    CONSTRAINT [PK_SiteThemes] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [SchemaToken].[SocialProviders] (
    [Id] int NOT NULL IDENTITY,
    [Name] nvarchar(max) NOT NULL,
    [UriTemplate] nvarchar(max) NOT NULL,
    [Icon] nvarchar(max) NOT NULL,
    [Placeholder] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_SocialProviders] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [SchemaToken].[Subscribers] (
    [Id] uniqueidentifier NOT NULL,
    [Email] nvarchar(max) NOT NULL,
    [IsActive] bit NOT NULL,
    [Timestamp] datetimeoffset NOT NULL,
    [UserAgent] nvarchar(max) NOT NULL,
    [UserAgentFamily] nvarchar(max) NOT NULL,
    [UserAgentVersion] nvarchar(max) NOT NULL,
    [UserAgentOSFamily] nvarchar(max) NOT NULL,
    [UserAgentDeviceBrand] nvarchar(max) NOT NULL,
    [UserAgentDeviceFamily] nvarchar(max) NOT NULL,
    [UserAgentDeviceModel] nvarchar(max) NOT NULL,
    [UserAgentIsSpider] bit NOT NULL,
    [IpAddress] nvarchar(45) NOT NULL,
    [Type] nvarchar(max) NOT NULL,
    [Continent] nvarchar(max) NOT NULL,
    [Country] nvarchar(max) NOT NULL,
    [Region] nvarchar(max) NOT NULL,
    [City] nvarchar(max) NOT NULL,
    [Source] nvarchar(max) NOT NULL,
    [Medium] nvarchar(max) NOT NULL,
    [Campaign] nvarchar(max) NOT NULL,
    [Term] nvarchar(max) NOT NULL,
    [Content] nvarchar(max) NOT NULL,
    [Unsubscribed] datetimeoffset NULL,
    [ConfirmationCode] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_Subscribers] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [SchemaToken].[Tags] (
    [Id] nvarchar(40) NOT NULL,
    CONSTRAINT [PK_Tags] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [SchemaToken].[UnderwritingGuidance] (
    [Id] uniqueidentifier NOT NULL,
    [Category] int NOT NULL,
    [Market] nvarchar(max) NOT NULL,
    [Type] nvarchar(max) NOT NULL,
    [Min] float NOT NULL,
    [Max] float NOT NULL,
    [IgnoreOutOfRange] bit NOT NULL,
    CONSTRAINT [PK_UnderwritingGuidance] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [SchemaToken].[Users] (
    [Id] nvarchar(450) NOT NULL,
    [FirstName] nvarchar(30) NOT NULL,
    [LastName] nvarchar(40) NOT NULL,
    [Title] nvarchar(40) NOT NULL,
    [Bio] nvarchar(max) NOT NULL,
    [UserName] nvarchar(256) NULL,
    [NormalizedUserName] nvarchar(256) NULL,
    [Email] nvarchar(256) NULL,
    [NormalizedEmail] nvarchar(256) NULL,
    [EmailConfirmed] bit NOT NULL,
    [PasswordHash] nvarchar(max) NULL,
    [SecurityStamp] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(max) NULL,
    [PhoneNumber] nvarchar(max) NULL,
    [PhoneNumberConfirmed] bit NOT NULL,
    [TwoFactorEnabled] bit NOT NULL,
    [LockoutEnd] datetimeoffset NULL,
    [LockoutEnabled] bit NOT NULL,
    [AccessFailedCount] int NOT NULL,
    CONSTRAINT [PK_Users] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [SchemaToken].[CrmContactAddresses] (
    [Id] uniqueidentifier NOT NULL,
    [ContactId] uniqueidentifier NOT NULL,
    [Address1] nvarchar(max) NOT NULL,
    [Address2] nvarchar(max) NOT NULL,
    [City] nvarchar(max) NOT NULL,
    [State] nvarchar(max) NOT NULL,
    [PostalCode] nvarchar(max) NOT NULL,
    [Primary] bit NOT NULL,
    [Type] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_CrmContactAddresses] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_CrmContactAddresses_CrmContacts_ContactId] FOREIGN KEY ([ContactId]) REFERENCES [SchemaToken].[CrmContacts] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[CRMContactCRMContactMarket] (
    [ContactsId] uniqueidentifier NOT NULL,
    [MarketsId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_CRMContactCRMContactMarket] PRIMARY KEY ([ContactsId], [MarketsId]),
    CONSTRAINT [FK_CRMContactCRMContactMarket_CrmContactMarkets_MarketsId] FOREIGN KEY ([MarketsId]) REFERENCES [SchemaToken].[CrmContactMarkets] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_CRMContactCRMContactMarket_CrmContacts_ContactsId] FOREIGN KEY ([ContactsId]) REFERENCES [SchemaToken].[CrmContacts] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[CRMContactCRMContactRole] (
    [ContactsId] uniqueidentifier NOT NULL,
    [RolesId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_CRMContactCRMContactRole] PRIMARY KEY ([ContactsId], [RolesId]),
    CONSTRAINT [FK_CRMContactCRMContactRole_CrmContactRoles_RolesId] FOREIGN KEY ([RolesId]) REFERENCES [SchemaToken].[CrmContactRoles] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_CRMContactCRMContactRole_CrmContacts_ContactsId] FOREIGN KEY ([ContactsId]) REFERENCES [SchemaToken].[CrmContacts] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[CrmContactEmails] (
    [Id] uniqueidentifier NOT NULL,
    [ContactId] uniqueidentifier NOT NULL,
    [Email] nvarchar(max) NOT NULL,
    [Type] nvarchar(max) NOT NULL,
    [Primary] bit NOT NULL,
    CONSTRAINT [PK_CrmContactEmails] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_CrmContactEmails_CrmContacts_ContactId] FOREIGN KEY ([ContactId]) REFERENCES [SchemaToken].[CrmContacts] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[CrmContactLogs] (
    [Id] uniqueidentifier NOT NULL,
    [ContactId] uniqueidentifier NOT NULL,
    [Notes] nvarchar(max) NOT NULL,
    [UserId] nvarchar(max) NOT NULL,
    [Timestamp] datetimeoffset NOT NULL,
    CONSTRAINT [PK_CrmContactLogs] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_CrmContactLogs_CrmContacts_ContactId] FOREIGN KEY ([ContactId]) REFERENCES [SchemaToken].[CrmContacts] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[CrmContactPhones] (
    [Id] uniqueidentifier NOT NULL,
    [ContactId] uniqueidentifier NOT NULL,
    [Number] nvarchar(max) NOT NULL,
    [Type] nvarchar(max) NOT NULL,
    [Primary] bit NOT NULL,
    CONSTRAINT [PK_CrmContactPhones] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_CrmContactPhones_CrmContacts_ContactId] FOREIGN KEY ([ContactId]) REFERENCES [SchemaToken].[CrmContacts] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[CrmContactReminders] (
    [Id] uniqueidentifier NOT NULL,
    [ContactId] uniqueidentifier NOT NULL,
    [Date] datetime2 NOT NULL,
    [Description] nvarchar(max) NOT NULL,
    [SystemGenerated] bit NOT NULL,
    [Dismissed] bit NOT NULL,
    CONSTRAINT [PK_CrmContactReminders] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_CrmContactReminders_CrmContacts_ContactId] FOREIGN KEY ([ContactId]) REFERENCES [SchemaToken].[CrmContacts] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[CrmNotableDates] (
    [Id] uniqueidentifier NOT NULL,
    [ContactId] uniqueidentifier NOT NULL,
    [Description] nvarchar(max) NOT NULL,
    [Date] datetime2 NOT NULL,
    [Type] nvarchar(max) NOT NULL,
    [Recurring] bit NOT NULL,
    [DismissReminders] bit NOT NULL,
    CONSTRAINT [PK_CrmNotableDates] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_CrmNotableDates_CrmContacts_ContactId] FOREIGN KEY ([ContactId]) REFERENCES [SchemaToken].[CrmContacts] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[RoleClaims] (
    [Id] int NOT NULL IDENTITY,
    [RoleId] nvarchar(450) NOT NULL,
    [ClaimType] nvarchar(max) NULL,
    [ClaimValue] nvarchar(max) NULL,
    CONSTRAINT [PK_RoleClaims] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_RoleClaims_Roles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [SchemaToken].[Roles] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[ActivityLogs] (
    [Id] uniqueidentifier NOT NULL,
    [UserId] nvarchar(450) NOT NULL,
    [Total] time NOT NULL,
    [Date] datetime2 NOT NULL,
    [Timestamp] datetimeoffset NOT NULL,
    [Description] nvarchar(max) NOT NULL,
    [Notes] nvarchar(max) NOT NULL,
    [Type] int NOT NULL,
    CONSTRAINT [PK_ActivityLogs] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ActivityLogs_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [SchemaToken].[Users] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[AssetParners] (
    [AssetId] uniqueidentifier NOT NULL,
    [PartnerId] nvarchar(450) NOT NULL,
    [Role] int NOT NULL,
    [Equity] float NOT NULL,
    CONSTRAINT [PK_AssetParners] PRIMARY KEY ([PartnerId], [AssetId]),
    CONSTRAINT [FK_AssetParners_AssetsUnderManagement_AssetId] FOREIGN KEY ([AssetId]) REFERENCES [SchemaToken].[AssetsUnderManagement] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_AssetParners_Users_PartnerId] FOREIGN KEY ([PartnerId]) REFERENCES [SchemaToken].[Users] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[EmailPreferences] (
    [Id] uniqueidentifier NOT NULL,
    [UserId] nvarchar(450) NOT NULL,
    [NotifyNewProperties] bit NOT NULL,
    [NotifyMondayMorning] bit NOT NULL,
    CONSTRAINT [PK_EmailPreferences] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_EmailPreferences_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [SchemaToken].[Users] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[HighlightedUsers] (
    [Order] int NOT NULL,
    [UserId] nvarchar(450) NOT NULL,
    CONSTRAINT [PK_HighlightedUsers] PRIMARY KEY ([Order]),
    CONSTRAINT [FK_HighlightedUsers_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [SchemaToken].[Users] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[Posts] (
    [Id] uniqueidentifier NOT NULL,
    [Slug] nvarchar(max) NOT NULL,
    [Title] nvarchar(max) NOT NULL,
    [Description] nvarchar(155) NOT NULL,
    [Summary] nvarchar(max) NOT NULL,
    [Content] nvarchar(max) NOT NULL,
    [SocialImage] nvarchar(max) NOT NULL,
    [AuthorId] nvarchar(450) NOT NULL,
    [Created] datetimeoffset NOT NULL,
    [Published] datetimeoffset NOT NULL,
    [LastModified] datetimeoffset NOT NULL,
    [IsPublished] bit NOT NULL,
    CONSTRAINT [PK_Posts] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Posts_Users_AuthorId] FOREIGN KEY ([AuthorId]) REFERENCES [SchemaToken].[Users] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[SocialLinks] (
    [Id] uniqueidentifier NOT NULL,
    [UserId] nvarchar(450) NOT NULL,
    [SocialProviderId] int NOT NULL,
    [Value] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_SocialLinks] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_SocialLinks_SocialProviders_SocialProviderId] FOREIGN KEY ([SocialProviderId]) REFERENCES [SchemaToken].[SocialProviders] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_SocialLinks_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [SchemaToken].[Users] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[UnderwriterGoals] (
    [Id] uniqueidentifier NOT NULL,
    [UnderwriterId] nvarchar(450) NOT NULL,
    [PropertiesUnderwritten] int NOT NULL,
    [LOISubmitted] int NOT NULL,
    [BrokersContacted] int NOT NULL,
    [InvestorsContacted] int NOT NULL,
    CONSTRAINT [PK_UnderwriterGoals] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_UnderwriterGoals_Users_UnderwriterId] FOREIGN KEY ([UnderwriterId]) REFERENCES [SchemaToken].[Users] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[UnderwritingPropertyProspects] (
    [Id] uniqueidentifier NOT NULL,
    [DealAnalysisId] uniqueidentifier NOT NULL,
    [Timestamp] datetimeoffset NOT NULL,
    [StartDate] datetimeoffset NOT NULL,
    [Name] nvarchar(max) NOT NULL,
    [UnderwriterId] nvarchar(450) NOT NULL,
    [Address] nvarchar(max) NOT NULL,
    [Market] nvarchar(max) NOT NULL,
    [City] nvarchar(max) NOT NULL,
    [State] nvarchar(max) NOT NULL,
    [Zip] nvarchar(max) NOT NULL,
    [Units] int NOT NULL,
    [Vintage] int NOT NULL,
    [CapRate] float NOT NULL,
    [CashOnCash] float NOT NULL,
    [DebtCoverage] float NOT NULL,
    [DesiredYield] float NOT NULL,
    [HoldYears] int NOT NULL,
    [NOI] float NOT NULL,
    [AskingPrice] float NOT NULL,
    [StrikePrice] float NOT NULL,
    [OfferPrice] float NOT NULL,
    [PurchasePrice] float NOT NULL,
    [Downpayment] float NOT NULL,
    [RentableSqFt] int NOT NULL,
    [GrossPotentialRent] float NOT NULL,
    [PhysicalVacancy] float NOT NULL,
    [MarketVacancy] float NOT NULL,
    [Management] float NOT NULL,
    [CapX] float NOT NULL,
    [CapXType] nvarchar(max) NOT NULL,
    [OurEquityOfCF] float NOT NULL,
    [AquisitionFeePercent] float NOT NULL,
    [ClosingCostPercent] float NOT NULL,
    [DeferredMaintenance] float NOT NULL,
    [SECAttorney] float NOT NULL,
    [ClosingCostMiscellaneous] float NOT NULL,
    [Status] nvarchar(max) NOT NULL,
    [LoanType] nvarchar(max) NOT NULL,
    [LTV] float NOT NULL,
    [PropertyClass] int NOT NULL,
    [NeighborhoodClass] int NOT NULL,
    [GrossPotentialRentNotes] nvarchar(max) NOT NULL,
    [LossToLeaseNotes] nvarchar(max) NOT NULL,
    [GrossScheduledRentNotes] nvarchar(max) NOT NULL,
    [PhysicalVacancyNotes] nvarchar(max) NOT NULL,
    [ConcessionsNonPaymentNotes] nvarchar(max) NOT NULL,
    [UtilityReimbursementNotes] nvarchar(max) NOT NULL,
    [OtherIncomeNotes] nvarchar(max) NOT NULL,
    [TaxesNotes] nvarchar(max) NOT NULL,
    [MarketingNotes] nvarchar(max) NOT NULL,
    [InsuranceNotes] nvarchar(max) NOT NULL,
    [UtilityNotes] nvarchar(max) NOT NULL,
    [RepairsMaintenanceNotes] nvarchar(max) NOT NULL,
    [ContractServicesNotes] nvarchar(max) NOT NULL,
    [PayrollNotes] nvarchar(max) NOT NULL,
    [GeneralAdminNotes] nvarchar(max) NOT NULL,
    [ManagementNotes] nvarchar(max) NOT NULL,
    [LendingNotes] nvarchar(max) NOT NULL,
    [AssetId] uniqueidentifier NULL,
    [ReversionCapRate] float NOT NULL,
    CONSTRAINT [PK_UnderwritingPropertyProspects] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_UnderwritingPropertyProspects_Users_UnderwriterId] FOREIGN KEY ([UnderwriterId]) REFERENCES [SchemaToken].[Users] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[UserClaims] (
    [Id] int NOT NULL IDENTITY,
    [UserId] nvarchar(450) NOT NULL,
    [ClaimType] nvarchar(max) NULL,
    [ClaimValue] nvarchar(max) NULL,
    CONSTRAINT [PK_UserClaims] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_UserClaims_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [SchemaToken].[Users] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[UserLogins] (
    [LoginProvider] nvarchar(450) NOT NULL,
    [ProviderKey] nvarchar(450) NOT NULL,
    [ProviderDisplayName] nvarchar(max) NULL,
    [UserId] nvarchar(450) NOT NULL,
    CONSTRAINT [PK_UserLogins] PRIMARY KEY ([LoginProvider], [ProviderKey]),
    CONSTRAINT [FK_UserLogins_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [SchemaToken].[Users] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[UserRoles] (
    [UserId] nvarchar(450) NOT NULL,
    [RoleId] nvarchar(450) NOT NULL,
    CONSTRAINT [PK_UserRoles] PRIMARY KEY ([UserId], [RoleId]),
    CONSTRAINT [FK_UserRoles_Roles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [SchemaToken].[Roles] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_UserRoles_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [SchemaToken].[Users] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[UserTokens] (
    [UserId] nvarchar(450) NOT NULL,
    [LoginProvider] nvarchar(450) NOT NULL,
    [Name] nvarchar(450) NOT NULL,
    [Value] nvarchar(max) NULL,
    CONSTRAINT [PK_UserTokens] PRIMARY KEY ([UserId], [LoginProvider], [Name]),
    CONSTRAINT [FK_UserTokens_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [SchemaToken].[Users] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[CategoryPost] (
    [CategoriesId] nvarchar(40) NOT NULL,
    [PostsId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_CategoryPost] PRIMARY KEY ([CategoriesId], [PostsId]),
    CONSTRAINT [FK_CategoryPost_Categories_CategoriesId] FOREIGN KEY ([CategoriesId]) REFERENCES [SchemaToken].[Categories] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_CategoryPost_Posts_PostsId] FOREIGN KEY ([PostsId]) REFERENCES [SchemaToken].[Posts] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[Comments] (
    [Id] uniqueidentifier NOT NULL,
    [Email] nvarchar(max) NOT NULL,
    [Name] nvarchar(120) NOT NULL,
    [Content] nvarchar(400) NOT NULL,
    [Moderated] bit NOT NULL,
    [Banned] bit NOT NULL,
    [Timestamp] datetimeoffset NOT NULL,
    [IpAddress] nvarchar(45) NOT NULL,
    [Type] nvarchar(max) NOT NULL,
    [Continent] nvarchar(max) NOT NULL,
    [Country] nvarchar(max) NOT NULL,
    [Region] nvarchar(max) NOT NULL,
    [City] nvarchar(max) NOT NULL,
    [PostId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_Comments] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Comments_Posts_PostId] FOREIGN KEY ([PostId]) REFERENCES [SchemaToken].[Posts] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[PostSubscriber] (
    [NotificationsId] uniqueidentifier NOT NULL,
    [SubscribersId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_PostSubscriber] PRIMARY KEY ([NotificationsId], [SubscribersId]),
    CONSTRAINT [FK_PostSubscriber_Posts_NotificationsId] FOREIGN KEY ([NotificationsId]) REFERENCES [SchemaToken].[Posts] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_PostSubscriber_Subscribers_SubscribersId] FOREIGN KEY ([SubscribersId]) REFERENCES [SchemaToken].[Subscribers] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[PostTag] (
    [PostsId] uniqueidentifier NOT NULL,
    [TagsId] nvarchar(40) NOT NULL,
    CONSTRAINT [PK_PostTag] PRIMARY KEY ([PostsId], [TagsId]),
    CONSTRAINT [FK_PostTag_Posts_PostsId] FOREIGN KEY ([PostsId]) REFERENCES [SchemaToken].[Posts] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_PostTag_Tags_TagsId] FOREIGN KEY ([TagsId]) REFERENCES [SchemaToken].[Tags] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[PostViews] (
    [Id] uniqueidentifier NOT NULL,
    [PostId] uniqueidentifier NOT NULL,
    [Timestamp] datetimeoffset NOT NULL,
    [UserAgent] nvarchar(max) NOT NULL,
    [UserAgentFamily] nvarchar(max) NOT NULL,
    [UserAgentVersion] nvarchar(max) NOT NULL,
    [UserAgentOSFamily] nvarchar(max) NOT NULL,
    [UserAgentDeviceBrand] nvarchar(max) NOT NULL,
    [UserAgentDeviceFamily] nvarchar(max) NOT NULL,
    [UserAgentDeviceModel] nvarchar(max) NOT NULL,
    [UserAgentIsSpider] bit NOT NULL,
    [IpAddress] nvarchar(45) NOT NULL,
    [Type] nvarchar(max) NOT NULL,
    [Continent] nvarchar(max) NOT NULL,
    [Country] nvarchar(max) NOT NULL,
    [Region] nvarchar(max) NOT NULL,
    [City] nvarchar(max) NOT NULL,
    [Source] nvarchar(max) NOT NULL,
    [Medium] nvarchar(max) NOT NULL,
    [Campaign] nvarchar(max) NOT NULL,
    [Term] nvarchar(max) NOT NULL,
    [Content] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_PostViews] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_PostViews_Posts_PostId] FOREIGN KEY ([PostId]) REFERENCES [SchemaToken].[Posts] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[UnderwritingLineItems] (
    [Id] uniqueidentifier NOT NULL,
    [PropertyId] uniqueidentifier NOT NULL,
    [Description] nvarchar(max) NOT NULL,
    [Category] nvarchar(max) NOT NULL,
    [Type] nvarchar(max) NOT NULL,
    [Amount] float NOT NULL,
    [ExpenseType] int NOT NULL,
    [Column] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_UnderwritingLineItems] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_UnderwritingLineItems_UnderwritingPropertyProspects_PropertyId] FOREIGN KEY ([PropertyId]) REFERENCES [SchemaToken].[UnderwritingPropertyProspects] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[UnderwritingMortgages] (
    [Id] uniqueidentifier NOT NULL,
    [PropertyId] uniqueidentifier NOT NULL,
    [LoanAmount] float NOT NULL,
    [InterestRate] float NOT NULL,
    [TermInYears] int NOT NULL,
    [InterestOnly] bit NOT NULL,
    [BalloonMonths] int NOT NULL,
    [Points] float NOT NULL,
    CONSTRAINT [PK_UnderwritingMortgages] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_UnderwritingMortgages_UnderwritingPropertyProspects_PropertyId] FOREIGN KEY ([PropertyId]) REFERENCES [SchemaToken].[UnderwritingPropertyProspects] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[UnderwritingNotes] (
    [Id] uniqueidentifier NOT NULL,
    [PropertyId] uniqueidentifier NOT NULL,
    [Note] nvarchar(max) NOT NULL,
    [UnderwriterId] nvarchar(450) NOT NULL,
    [Timestamp] datetimeoffset NOT NULL,
    CONSTRAINT [PK_UnderwritingNotes] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_UnderwritingNotes_UnderwritingPropertyProspects_PropertyId] FOREIGN KEY ([PropertyId]) REFERENCES [SchemaToken].[UnderwritingPropertyProspects] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_UnderwritingNotes_Users_UnderwriterId] FOREIGN KEY ([UnderwriterId]) REFERENCES [SchemaToken].[Users] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[UnderwritingPropertyUnitModels] (
    [Id] uniqueidentifier NOT NULL,
    [PropertyId] uniqueidentifier NOT NULL,
    [Name] nvarchar(max) NOT NULL,
    [Beds] int NOT NULL,
    [Baths] float NOT NULL,
    [MarketRent] float NOT NULL,
    [CurrentRent] float NOT NULL,
    [Upgraded] bit NOT NULL,
    [SquareFeet] int NULL,
    [TotalUnits] int NOT NULL,
    CONSTRAINT [PK_UnderwritingPropertyUnitModels] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_UnderwritingPropertyUnitModels_UnderwritingPropertyProspects_PropertyId] FOREIGN KEY ([PropertyId]) REFERENCES [SchemaToken].[UnderwritingPropertyProspects] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[UnderwritingProspectFiles] (
    [Id] uniqueidentifier NOT NULL,
    [PropertyId] uniqueidentifier NOT NULL,
    [UnderwriterEmail] nvarchar(max) NOT NULL,
    [Name] nvarchar(max) NOT NULL,
    [Icon] nvarchar(max) NOT NULL,
    [Description] nvarchar(max) NOT NULL,
    [Type] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_UnderwritingProspectFiles] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_UnderwritingProspectFiles_UnderwritingPropertyProspects_PropertyId] FOREIGN KEY ([PropertyId]) REFERENCES [SchemaToken].[UnderwritingPropertyProspects] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[UnderwritingProspectPropertyCapitalImprovements] (
    [Id] uniqueidentifier NOT NULL,
    [Status] nvarchar(max) NOT NULL,
    [Cost] float NOT NULL,
    [Description] nvarchar(max) NOT NULL,
    [PropertyId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_UnderwritingProspectPropertyCapitalImprovements] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_UnderwritingProspectPropertyCapitalImprovements_UnderwritingPropertyProspects_PropertyId] FOREIGN KEY ([PropertyId]) REFERENCES [SchemaToken].[UnderwritingPropertyProspects] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[UnderwritingProspectPropertyDealAnalysis] (
    [Id] uniqueidentifier NOT NULL,
    [PropertyId] uniqueidentifier NOT NULL,
    [Summary] nvarchar(max) NOT NULL,
    [ValuePlays] nvarchar(max) NOT NULL,
    [ConstructionType] nvarchar(max) NOT NULL,
    [UtilityNotes] nvarchar(max) NOT NULL,
    [CompetitionNotes] nvarchar(max) NOT NULL,
    [HowUnderwritingWasDetermined] nvarchar(max) NOT NULL,
    [MarketPricePerUnit] float NOT NULL,
    [MarketCapRate] float NOT NULL,
    CONSTRAINT [PK_UnderwritingProspectPropertyDealAnalysis] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_UnderwritingProspectPropertyDealAnalysis_UnderwritingPropertyProspects_PropertyId] FOREIGN KEY ([PropertyId]) REFERENCES [SchemaToken].[UnderwritingPropertyProspects] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[UnderwritingProspectPropertyIncomeForecasts] (
    [Id] uniqueidentifier NOT NULL,
    [ProspectId] uniqueidentifier NOT NULL,
    [Year] int NOT NULL,
    [IncreaseType] nvarchar(max) NOT NULL,
    [PerUnitIncrease] float NOT NULL,
    [UnitsAppliedTo] int NOT NULL,
    [FixedIncreaseOnRemainingUnits] float NOT NULL,
    [Vacancy] float NOT NULL,
    [OtherLossesPercent] float NOT NULL,
    [UtilityIncreases] float NOT NULL,
    [OtherIncomePercent] float NOT NULL,
    CONSTRAINT [PK_UnderwritingProspectPropertyIncomeForecasts] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_UnderwritingProspectPropertyIncomeForecasts_UnderwritingPropertyProspects_ProspectId] FOREIGN KEY ([ProspectId]) REFERENCES [SchemaToken].[UnderwritingPropertyProspects] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[UnderwritingTiers] (
    [Id] uniqueidentifier NOT NULL,
    [PropertyId] uniqueidentifier NOT NULL,
    [Group] nvarchar(max) NOT NULL,
    [Name] nvarchar(max) NOT NULL,
    [Investment] float NOT NULL,
    [PreferredRoR] float NOT NULL,
    [RoROnSale] float NOT NULL,
    CONSTRAINT [PK_UnderwritingTiers] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_UnderwritingTiers_UnderwritingPropertyProspects_PropertyId] FOREIGN KEY ([PropertyId]) REFERENCES [SchemaToken].[UnderwritingPropertyProspects] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[UnderwritingPropertyUnits] (
    [Id] uniqueidentifier NOT NULL,
    [ModelId] uniqueidentifier NOT NULL,
    [Unit] nvarchar(max) NOT NULL,
    [Renter] nvarchar(max) NOT NULL,
    [LeaseStart] datetime2 NULL,
    [LeaseEnd] datetime2 NULL,
    [AtWill] bit NOT NULL,
    [Rent] float NOT NULL,
    [DepositOnHand] float NOT NULL,
    [Balance] float NOT NULL,
    CONSTRAINT [PK_UnderwritingPropertyUnits] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_UnderwritingPropertyUnits_UnderwritingPropertyUnitModels_ModelId] FOREIGN KEY ([ModelId]) REFERENCES [SchemaToken].[UnderwritingPropertyUnitModels] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [SchemaToken].[UnderwritingPropertyUnitsLedger] (
    [Id] uniqueidentifier NOT NULL,
    [UnitId] uniqueidentifier NOT NULL,
    [Type] nvarchar(max) NOT NULL,
    [Rent] float NOT NULL,
    [ChargesCredits] float NOT NULL,
    CONSTRAINT [PK_UnderwritingPropertyUnitsLedger] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_UnderwritingPropertyUnitsLedger_UnderwritingPropertyUnits_UnitId] FOREIGN KEY ([UnitId]) REFERENCES [SchemaToken].[UnderwritingPropertyUnits] ([Id]) ON DELETE CASCADE
);
GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Icon', N'Name', N'Placeholder', N'UriTemplate') AND [object_id] = OBJECT_ID(N'[SchemaToken].[SocialProviders]'))
    SET IDENTITY_INSERT [SchemaToken].[SocialProviders] ON;
INSERT INTO [SchemaToken].[SocialProviders] ([Id], [Icon], [Name], [Placeholder], [UriTemplate])
VALUES (1, N'fab fa-facebook', N'Facebook', N'Your username', N'https://facebook.com/{0}'),
(2, N'fab fa-instagram', N'Instagram', N'Your username', N'https://instagram.com/{0}'),
(3, N'fab fa-twitter', N'Twitter', N'Your username', N'https://twitter.com/{0}'),
(5, N'fab fa-twitch', N'Twitch', N'Your username', N'https://twitch.tv/{0}'),
(6, N'fab fa-youtube', N'YouTube', N'Your channel name', N'https://youtube.com/{0}'),
(8, N'fab fa-linkedin', N'LinkedIn', N'Your username', N'https://linkedin.com/in/{0}'),
(9, N'fa-duotone fa-globe', N'Website', N'https://amazingwebsite.com', N'{0}');
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Icon', N'Name', N'Placeholder', N'UriTemplate') AND [object_id] = OBJECT_ID(N'[SchemaToken].[SocialProviders]'))
    SET IDENTITY_INSERT [SchemaToken].[SocialProviders] OFF;
GO

CREATE INDEX [IX_ActivityLogs_UserId] ON [SchemaToken].[ActivityLogs] ([UserId]);
GO

CREATE INDEX [IX_AssetParners_AssetId] ON [SchemaToken].[AssetParners] ([AssetId]);
GO

CREATE INDEX [IX_CategoryPost_PostsId] ON [SchemaToken].[CategoryPost] ([PostsId]);
GO

CREATE INDEX [IX_Comments_PostId] ON [SchemaToken].[Comments] ([PostId]);
GO

CREATE INDEX [IX_CrmContactAddresses_ContactId] ON [SchemaToken].[CrmContactAddresses] ([ContactId]);
GO

CREATE INDEX [IX_CRMContactCRMContactMarket_MarketsId] ON [SchemaToken].[CRMContactCRMContactMarket] ([MarketsId]);
GO

CREATE INDEX [IX_CRMContactCRMContactRole_RolesId] ON [SchemaToken].[CRMContactCRMContactRole] ([RolesId]);
GO

CREATE INDEX [IX_CrmContactEmails_ContactId] ON [SchemaToken].[CrmContactEmails] ([ContactId]);
GO

CREATE INDEX [IX_CrmContactLogs_ContactId] ON [SchemaToken].[CrmContactLogs] ([ContactId]);
GO

CREATE UNIQUE INDEX [IX_CrmContactMarkets_Name] ON [SchemaToken].[CrmContactMarkets] ([Name]);
GO

CREATE INDEX [IX_CrmContactPhones_ContactId] ON [SchemaToken].[CrmContactPhones] ([ContactId]);
GO

CREATE INDEX [IX_CrmContactReminders_ContactId] ON [SchemaToken].[CrmContactReminders] ([ContactId]);
GO

CREATE UNIQUE INDEX [IX_CrmContactRoles_Name] ON [SchemaToken].[CrmContactRoles] ([Name]);
GO

CREATE INDEX [IX_CrmNotableDates_ContactId] ON [SchemaToken].[CrmNotableDates] ([ContactId]);
GO

CREATE INDEX [IX_EmailPreferences_UserId] ON [SchemaToken].[EmailPreferences] ([UserId]);
GO

CREATE INDEX [IX_HighlightedUsers_UserId] ON [SchemaToken].[HighlightedUsers] ([UserId]);
GO

CREATE INDEX [IX_Posts_AuthorId] ON [SchemaToken].[Posts] ([AuthorId]);
GO

CREATE INDEX [IX_PostSubscriber_SubscribersId] ON [SchemaToken].[PostSubscriber] ([SubscribersId]);
GO

CREATE INDEX [IX_PostTag_TagsId] ON [SchemaToken].[PostTag] ([TagsId]);
GO

CREATE INDEX [IX_PostViews_PostId] ON [SchemaToken].[PostViews] ([PostId]);
GO

CREATE INDEX [IX_RoleClaims_RoleId] ON [SchemaToken].[RoleClaims] ([RoleId]);
GO

CREATE UNIQUE INDEX [RoleNameIndex] ON [SchemaToken].[Roles] ([NormalizedName]) WHERE [NormalizedName] IS NOT NULL;
GO

CREATE INDEX [IX_SocialLinks_SocialProviderId] ON [SchemaToken].[SocialLinks] ([SocialProviderId]);
GO

CREATE INDEX [IX_SocialLinks_UserId] ON [SchemaToken].[SocialLinks] ([UserId]);
GO

CREATE UNIQUE INDEX [IX_UnderwriterGoals_UnderwriterId] ON [SchemaToken].[UnderwriterGoals] ([UnderwriterId]);
GO

CREATE INDEX [IX_UnderwritingLineItems_PropertyId] ON [SchemaToken].[UnderwritingLineItems] ([PropertyId]);
GO

CREATE INDEX [IX_UnderwritingMortgages_PropertyId] ON [SchemaToken].[UnderwritingMortgages] ([PropertyId]);
GO

CREATE INDEX [IX_UnderwritingNotes_PropertyId] ON [SchemaToken].[UnderwritingNotes] ([PropertyId]);
GO

CREATE INDEX [IX_UnderwritingNotes_UnderwriterId] ON [SchemaToken].[UnderwritingNotes] ([UnderwriterId]);
GO

CREATE INDEX [IX_UnderwritingPropertyProspects_UnderwriterId] ON [SchemaToken].[UnderwritingPropertyProspects] ([UnderwriterId]);
GO

CREATE INDEX [IX_UnderwritingPropertyUnitModels_PropertyId] ON [SchemaToken].[UnderwritingPropertyUnitModels] ([PropertyId]);
GO

CREATE INDEX [IX_UnderwritingPropertyUnits_ModelId] ON [SchemaToken].[UnderwritingPropertyUnits] ([ModelId]);
GO

CREATE INDEX [IX_UnderwritingPropertyUnitsLedger_UnitId] ON [SchemaToken].[UnderwritingPropertyUnitsLedger] ([UnitId]);
GO

CREATE INDEX [IX_UnderwritingProspectFiles_PropertyId] ON [SchemaToken].[UnderwritingProspectFiles] ([PropertyId]);
GO

CREATE INDEX [IX_UnderwritingProspectPropertyCapitalImprovements_PropertyId] ON [SchemaToken].[UnderwritingProspectPropertyCapitalImprovements] ([PropertyId]);
GO

CREATE UNIQUE INDEX [IX_UnderwritingProspectPropertyDealAnalysis_PropertyId] ON [SchemaToken].[UnderwritingProspectPropertyDealAnalysis] ([PropertyId]);
GO

CREATE INDEX [IX_UnderwritingProspectPropertyIncomeForecasts_ProspectId] ON [SchemaToken].[UnderwritingProspectPropertyIncomeForecasts] ([ProspectId]);
GO

CREATE INDEX [IX_UnderwritingTiers_PropertyId] ON [SchemaToken].[UnderwritingTiers] ([PropertyId]);
GO

CREATE INDEX [IX_UserClaims_UserId] ON [SchemaToken].[UserClaims] ([UserId]);
GO

CREATE INDEX [IX_UserLogins_UserId] ON [SchemaToken].[UserLogins] ([UserId]);
GO

CREATE INDEX [IX_UserRoles_RoleId] ON [SchemaToken].[UserRoles] ([RoleId]);
GO

CREATE INDEX [EmailIndex] ON [SchemaToken].[Users] ([NormalizedEmail]);
GO

CREATE UNIQUE INDEX [UserNameIndex] ON [SchemaToken].[Users] ([NormalizedUserName]) WHERE [NormalizedUserName] IS NOT NULL;
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20240415235432_Initial_SchemaToken', N'8.0.4');
GO

COMMIT;
GO

