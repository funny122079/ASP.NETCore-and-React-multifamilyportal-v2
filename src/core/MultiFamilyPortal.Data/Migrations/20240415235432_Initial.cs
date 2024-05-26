using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace MultiFamilyPortal.Data.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "SchemaToken");

            migrationBuilder.CreateTable(
                name: "AssetsUnderManagement",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Zip = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PurchasePrice = table.Column<double>(type: "float", nullable: false),
                    SalesPrice = table.Column<double>(type: "float", nullable: true),
                    Units = table.Column<int>(type: "int", nullable: false),
                    Highlighted = table.Column<bool>(type: "bit", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false),
                    InvestorState = table.Column<int>(type: "int", nullable: false),
                    UnderwritingId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AssetsUnderManagement", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Categories",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CrmContactMarkets",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CrmContactMarkets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CrmContactRoles",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CoreTeam = table.Column<bool>(type: "bit", nullable: false),
                    SystemDefined = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CrmContactRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CrmContacts",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Prefix = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MiddleName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Suffix = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Company = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DoB = table.Column<DateTime>(type: "datetime2", nullable: true),
                    MarketNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LicenseNumber = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CrmContacts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CustomContent",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HtmlContent = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastUpdated = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomContent", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EmailPartialTemplates",
                schema: "SchemaToken",
                columns: table => new
                {
                    Key = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmailPartialTemplates", x => x.Key);
                });

            migrationBuilder.CreateTable(
                name: "EmailTemplates",
                schema: "SchemaToken",
                columns: table => new
                {
                    Key = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Model = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Html = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PlainText = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastUpdated = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmailTemplates", x => x.Key);
                });

            migrationBuilder.CreateTable(
                name: "InvestorProspects",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Timezone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LookingToInvest = table.Column<double>(type: "float", nullable: false),
                    Contacted = table.Column<bool>(type: "bit", nullable: false),
                    Comments = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Timestamp = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InvestorProspects", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "InvestorTestimonials",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(65)", maxLength: 65, nullable: false),
                    Title = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    PhotoUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Testimonial = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Stars = table.Column<int>(type: "int", nullable: false),
                    Active = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InvestorTestimonials", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Settings",
                schema: "SchemaToken",
                columns: table => new
                {
                    Key = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Settings", x => x.Key);
                });

            migrationBuilder.CreateTable(
                name: "SiteThemes",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    IsDefault = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SiteThemes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SocialProviders",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UriTemplate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Icon = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Placeholder = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SocialProviders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Subscribers",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    Timestamp = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    UserAgent = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAgentFamily = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAgentVersion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAgentOSFamily = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAgentDeviceBrand = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAgentDeviceFamily = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAgentDeviceModel = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAgentIsSpider = table.Column<bool>(type: "bit", nullable: false),
                    IpAddress = table.Column<string>(type: "nvarchar(45)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Continent = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Region = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Source = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Medium = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Campaign = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Term = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Unsubscribed = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    ConfirmationCode = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subscribers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tags",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tags", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UnderwritingGuidance",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Category = table.Column<int>(type: "int", nullable: false),
                    Market = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Min = table.Column<double>(type: "float", nullable: false),
                    Max = table.Column<double>(type: "float", nullable: false),
                    IgnoreOutOfRange = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnderwritingGuidance", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: false),
                    Title = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: false),
                    Bio = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CrmContactAddresses",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ContactId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Address1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PostalCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Primary = table.Column<bool>(type: "bit", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CrmContactAddresses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CrmContactAddresses_CrmContacts_ContactId",
                        column: x => x.ContactId,
                        principalSchema: "SchemaToken",
                        principalTable: "CrmContacts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CRMContactCRMContactMarket",
                schema: "SchemaToken",
                columns: table => new
                {
                    ContactsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MarketsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CRMContactCRMContactMarket", x => new { x.ContactsId, x.MarketsId });
                    table.ForeignKey(
                        name: "FK_CRMContactCRMContactMarket_CrmContactMarkets_MarketsId",
                        column: x => x.MarketsId,
                        principalSchema: "SchemaToken",
                        principalTable: "CrmContactMarkets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CRMContactCRMContactMarket_CrmContacts_ContactsId",
                        column: x => x.ContactsId,
                        principalSchema: "SchemaToken",
                        principalTable: "CrmContacts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CRMContactCRMContactRole",
                schema: "SchemaToken",
                columns: table => new
                {
                    ContactsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    RolesId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CRMContactCRMContactRole", x => new { x.ContactsId, x.RolesId });
                    table.ForeignKey(
                        name: "FK_CRMContactCRMContactRole_CrmContactRoles_RolesId",
                        column: x => x.RolesId,
                        principalSchema: "SchemaToken",
                        principalTable: "CrmContactRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CRMContactCRMContactRole_CrmContacts_ContactsId",
                        column: x => x.ContactsId,
                        principalSchema: "SchemaToken",
                        principalTable: "CrmContacts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CrmContactEmails",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ContactId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Primary = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CrmContactEmails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CrmContactEmails_CrmContacts_ContactId",
                        column: x => x.ContactId,
                        principalSchema: "SchemaToken",
                        principalTable: "CrmContacts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CrmContactLogs",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ContactId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Timestamp = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CrmContactLogs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CrmContactLogs_CrmContacts_ContactId",
                        column: x => x.ContactId,
                        principalSchema: "SchemaToken",
                        principalTable: "CrmContacts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CrmContactPhones",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ContactId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Number = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Primary = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CrmContactPhones", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CrmContactPhones_CrmContacts_ContactId",
                        column: x => x.ContactId,
                        principalSchema: "SchemaToken",
                        principalTable: "CrmContacts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CrmContactReminders",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ContactId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SystemGenerated = table.Column<bool>(type: "bit", nullable: false),
                    Dismissed = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CrmContactReminders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CrmContactReminders_CrmContacts_ContactId",
                        column: x => x.ContactId,
                        principalSchema: "SchemaToken",
                        principalTable: "CrmContacts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CrmNotableDates",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ContactId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Recurring = table.Column<bool>(type: "bit", nullable: false),
                    DismissReminders = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CrmNotableDates", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CrmNotableDates_CrmContacts_ContactId",
                        column: x => x.ContactId,
                        principalSchema: "SchemaToken",
                        principalTable: "CrmContacts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RoleClaims",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RoleClaims_Roles_RoleId",
                        column: x => x.RoleId,
                        principalSchema: "SchemaToken",
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ActivityLogs",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Total = table.Column<TimeSpan>(type: "time", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Timestamp = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Type = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ActivityLogs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ActivityLogs_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "SchemaToken",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AssetParners",
                schema: "SchemaToken",
                columns: table => new
                {
                    AssetId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PartnerId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Role = table.Column<int>(type: "int", nullable: false),
                    Equity = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AssetParners", x => new { x.PartnerId, x.AssetId });
                    table.ForeignKey(
                        name: "FK_AssetParners_AssetsUnderManagement_AssetId",
                        column: x => x.AssetId,
                        principalSchema: "SchemaToken",
                        principalTable: "AssetsUnderManagement",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AssetParners_Users_PartnerId",
                        column: x => x.PartnerId,
                        principalSchema: "SchemaToken",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EmailPreferences",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    NotifyNewProperties = table.Column<bool>(type: "bit", nullable: false),
                    NotifyMondayMorning = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmailPreferences", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EmailPreferences_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "SchemaToken",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "HighlightedUsers",
                schema: "SchemaToken",
                columns: table => new
                {
                    Order = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HighlightedUsers", x => x.Order);
                    table.ForeignKey(
                        name: "FK_HighlightedUsers_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "SchemaToken",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Posts",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Slug = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(155)", maxLength: 155, nullable: false),
                    Summary = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SocialImage = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AuthorId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Created = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    Published = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    LastModified = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    IsPublished = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Posts_Users_AuthorId",
                        column: x => x.AuthorId,
                        principalSchema: "SchemaToken",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SocialLinks",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    SocialProviderId = table.Column<int>(type: "int", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SocialLinks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SocialLinks_SocialProviders_SocialProviderId",
                        column: x => x.SocialProviderId,
                        principalSchema: "SchemaToken",
                        principalTable: "SocialProviders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SocialLinks_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "SchemaToken",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UnderwriterGoals",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UnderwriterId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    PropertiesUnderwritten = table.Column<int>(type: "int", nullable: false),
                    LOISubmitted = table.Column<int>(type: "int", nullable: false),
                    BrokersContacted = table.Column<int>(type: "int", nullable: false),
                    InvestorsContacted = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnderwriterGoals", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UnderwriterGoals_Users_UnderwriterId",
                        column: x => x.UnderwriterId,
                        principalSchema: "SchemaToken",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UnderwritingPropertyProspects",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DealAnalysisId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Timestamp = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    StartDate = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UnderwriterId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Market = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Zip = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Units = table.Column<int>(type: "int", nullable: false),
                    Vintage = table.Column<int>(type: "int", nullable: false),
                    CapRate = table.Column<double>(type: "float", nullable: false),
                    CashOnCash = table.Column<double>(type: "float", nullable: false),
                    DebtCoverage = table.Column<double>(type: "float", nullable: false),
                    DesiredYield = table.Column<double>(type: "float", nullable: false),
                    HoldYears = table.Column<int>(type: "int", nullable: false),
                    NOI = table.Column<double>(type: "float", nullable: false),
                    AskingPrice = table.Column<double>(type: "float", nullable: false),
                    StrikePrice = table.Column<double>(type: "float", nullable: false),
                    OfferPrice = table.Column<double>(type: "float", nullable: false),
                    PurchasePrice = table.Column<double>(type: "float", nullable: false),
                    Downpayment = table.Column<double>(type: "float", nullable: false),
                    RentableSqFt = table.Column<int>(type: "int", nullable: false),
                    GrossPotentialRent = table.Column<double>(type: "float", nullable: false),
                    PhysicalVacancy = table.Column<double>(type: "float", nullable: false),
                    MarketVacancy = table.Column<double>(type: "float", nullable: false),
                    Management = table.Column<double>(type: "float", nullable: false),
                    CapX = table.Column<double>(type: "float", nullable: false),
                    CapXType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OurEquityOfCF = table.Column<double>(type: "float", nullable: false),
                    AquisitionFeePercent = table.Column<double>(type: "float", nullable: false),
                    ClosingCostPercent = table.Column<double>(type: "float", nullable: false),
                    DeferredMaintenance = table.Column<double>(type: "float", nullable: false),
                    SECAttorney = table.Column<double>(type: "float", nullable: false),
                    ClosingCostMiscellaneous = table.Column<double>(type: "float", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LoanType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LTV = table.Column<double>(type: "float", nullable: false),
                    PropertyClass = table.Column<int>(type: "int", nullable: false),
                    NeighborhoodClass = table.Column<int>(type: "int", nullable: false),
                    GrossPotentialRentNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LossToLeaseNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GrossScheduledRentNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhysicalVacancyNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConcessionsNonPaymentNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UtilityReimbursementNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OtherIncomeNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TaxesNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MarketingNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    InsuranceNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UtilityNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RepairsMaintenanceNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContractServicesNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PayrollNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GeneralAdminNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ManagementNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LendingNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AssetId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    ReversionCapRate = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnderwritingPropertyProspects", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UnderwritingPropertyProspects_Users_UnderwriterId",
                        column: x => x.UnderwriterId,
                        principalSchema: "SchemaToken",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserClaims",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserClaims_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "SchemaToken",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserLogins",
                schema: "SchemaToken",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_UserLogins_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "SchemaToken",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserRoles",
                schema: "SchemaToken",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_UserRoles_Roles_RoleId",
                        column: x => x.RoleId,
                        principalSchema: "SchemaToken",
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserRoles_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "SchemaToken",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserTokens",
                schema: "SchemaToken",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_UserTokens_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "SchemaToken",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CategoryPost",
                schema: "SchemaToken",
                columns: table => new
                {
                    CategoriesId = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    PostsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoryPost", x => new { x.CategoriesId, x.PostsId });
                    table.ForeignKey(
                        name: "FK_CategoryPost_Categories_CategoriesId",
                        column: x => x.CategoriesId,
                        principalSchema: "SchemaToken",
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CategoryPost_Posts_PostsId",
                        column: x => x.PostsId,
                        principalSchema: "SchemaToken",
                        principalTable: "Posts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Comments",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(120)", maxLength: 120, nullable: false),
                    Content = table.Column<string>(type: "nvarchar(400)", maxLength: 400, nullable: false),
                    Moderated = table.Column<bool>(type: "bit", nullable: false),
                    Banned = table.Column<bool>(type: "bit", nullable: false),
                    Timestamp = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    IpAddress = table.Column<string>(type: "nvarchar(45)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Continent = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Region = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PostId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Comments_Posts_PostId",
                        column: x => x.PostId,
                        principalSchema: "SchemaToken",
                        principalTable: "Posts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PostSubscriber",
                schema: "SchemaToken",
                columns: table => new
                {
                    NotificationsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SubscribersId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PostSubscriber", x => new { x.NotificationsId, x.SubscribersId });
                    table.ForeignKey(
                        name: "FK_PostSubscriber_Posts_NotificationsId",
                        column: x => x.NotificationsId,
                        principalSchema: "SchemaToken",
                        principalTable: "Posts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PostSubscriber_Subscribers_SubscribersId",
                        column: x => x.SubscribersId,
                        principalSchema: "SchemaToken",
                        principalTable: "Subscribers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PostTag",
                schema: "SchemaToken",
                columns: table => new
                {
                    PostsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TagsId = table.Column<string>(type: "nvarchar(40)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PostTag", x => new { x.PostsId, x.TagsId });
                    table.ForeignKey(
                        name: "FK_PostTag_Posts_PostsId",
                        column: x => x.PostsId,
                        principalSchema: "SchemaToken",
                        principalTable: "Posts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PostTag_Tags_TagsId",
                        column: x => x.TagsId,
                        principalSchema: "SchemaToken",
                        principalTable: "Tags",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PostViews",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PostId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Timestamp = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    UserAgent = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAgentFamily = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAgentVersion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAgentOSFamily = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAgentDeviceBrand = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAgentDeviceFamily = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAgentDeviceModel = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAgentIsSpider = table.Column<bool>(type: "bit", nullable: false),
                    IpAddress = table.Column<string>(type: "nvarchar(45)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Continent = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Region = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Source = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Medium = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Campaign = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Term = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PostViews", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PostViews_Posts_PostId",
                        column: x => x.PostId,
                        principalSchema: "SchemaToken",
                        principalTable: "Posts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UnderwritingLineItems",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PropertyId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Category = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Amount = table.Column<double>(type: "float", nullable: false),
                    ExpenseType = table.Column<int>(type: "int", nullable: false),
                    Column = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnderwritingLineItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UnderwritingLineItems_UnderwritingPropertyProspects_PropertyId",
                        column: x => x.PropertyId,
                        principalSchema: "SchemaToken",
                        principalTable: "UnderwritingPropertyProspects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UnderwritingMortgages",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PropertyId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    LoanAmount = table.Column<double>(type: "float", nullable: false),
                    InterestRate = table.Column<double>(type: "float", nullable: false),
                    TermInYears = table.Column<int>(type: "int", nullable: false),
                    InterestOnly = table.Column<bool>(type: "bit", nullable: false),
                    BalloonMonths = table.Column<int>(type: "int", nullable: false),
                    Points = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnderwritingMortgages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UnderwritingMortgages_UnderwritingPropertyProspects_PropertyId",
                        column: x => x.PropertyId,
                        principalSchema: "SchemaToken",
                        principalTable: "UnderwritingPropertyProspects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UnderwritingNotes",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PropertyId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Note = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UnderwriterId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Timestamp = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnderwritingNotes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UnderwritingNotes_UnderwritingPropertyProspects_PropertyId",
                        column: x => x.PropertyId,
                        principalSchema: "SchemaToken",
                        principalTable: "UnderwritingPropertyProspects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UnderwritingNotes_Users_UnderwriterId",
                        column: x => x.UnderwriterId,
                        principalSchema: "SchemaToken",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UnderwritingPropertyUnitModels",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PropertyId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Beds = table.Column<int>(type: "int", nullable: false),
                    Baths = table.Column<double>(type: "float", nullable: false),
                    MarketRent = table.Column<double>(type: "float", nullable: false),
                    CurrentRent = table.Column<double>(type: "float", nullable: false),
                    Upgraded = table.Column<bool>(type: "bit", nullable: false),
                    SquareFeet = table.Column<int>(type: "int", nullable: true),
                    TotalUnits = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnderwritingPropertyUnitModels", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UnderwritingPropertyUnitModels_UnderwritingPropertyProspects_PropertyId",
                        column: x => x.PropertyId,
                        principalSchema: "SchemaToken",
                        principalTable: "UnderwritingPropertyProspects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UnderwritingProspectFiles",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PropertyId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UnderwriterEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Icon = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnderwritingProspectFiles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UnderwritingProspectFiles_UnderwritingPropertyProspects_PropertyId",
                        column: x => x.PropertyId,
                        principalSchema: "SchemaToken",
                        principalTable: "UnderwritingPropertyProspects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UnderwritingProspectPropertyCapitalImprovements",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Cost = table.Column<double>(type: "float", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PropertyId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnderwritingProspectPropertyCapitalImprovements", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UnderwritingProspectPropertyCapitalImprovements_UnderwritingPropertyProspects_PropertyId",
                        column: x => x.PropertyId,
                        principalSchema: "SchemaToken",
                        principalTable: "UnderwritingPropertyProspects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UnderwritingProspectPropertyDealAnalysis",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PropertyId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Summary = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ValuePlays = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConstructionType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UtilityNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CompetitionNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HowUnderwritingWasDetermined = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MarketPricePerUnit = table.Column<double>(type: "float", nullable: false),
                    MarketCapRate = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnderwritingProspectPropertyDealAnalysis", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UnderwritingProspectPropertyDealAnalysis_UnderwritingPropertyProspects_PropertyId",
                        column: x => x.PropertyId,
                        principalSchema: "SchemaToken",
                        principalTable: "UnderwritingPropertyProspects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UnderwritingProspectPropertyIncomeForecasts",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProspectId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false),
                    IncreaseType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PerUnitIncrease = table.Column<double>(type: "float", nullable: false),
                    UnitsAppliedTo = table.Column<int>(type: "int", nullable: false),
                    FixedIncreaseOnRemainingUnits = table.Column<double>(type: "float", nullable: false),
                    Vacancy = table.Column<double>(type: "float", nullable: false),
                    OtherLossesPercent = table.Column<double>(type: "float", nullable: false),
                    UtilityIncreases = table.Column<double>(type: "float", nullable: false),
                    OtherIncomePercent = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnderwritingProspectPropertyIncomeForecasts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UnderwritingProspectPropertyIncomeForecasts_UnderwritingPropertyProspects_ProspectId",
                        column: x => x.ProspectId,
                        principalSchema: "SchemaToken",
                        principalTable: "UnderwritingPropertyProspects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UnderwritingTiers",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PropertyId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Group = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Investment = table.Column<double>(type: "float", nullable: false),
                    PreferredRoR = table.Column<double>(type: "float", nullable: false),
                    RoROnSale = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnderwritingTiers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UnderwritingTiers_UnderwritingPropertyProspects_PropertyId",
                        column: x => x.PropertyId,
                        principalSchema: "SchemaToken",
                        principalTable: "UnderwritingPropertyProspects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UnderwritingPropertyUnits",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ModelId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Unit = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Renter = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LeaseStart = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LeaseEnd = table.Column<DateTime>(type: "datetime2", nullable: true),
                    AtWill = table.Column<bool>(type: "bit", nullable: false),
                    Rent = table.Column<double>(type: "float", nullable: false),
                    DepositOnHand = table.Column<double>(type: "float", nullable: false),
                    Balance = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnderwritingPropertyUnits", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UnderwritingPropertyUnits_UnderwritingPropertyUnitModels_ModelId",
                        column: x => x.ModelId,
                        principalSchema: "SchemaToken",
                        principalTable: "UnderwritingPropertyUnitModels",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UnderwritingPropertyUnitsLedger",
                schema: "SchemaToken",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UnitId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Rent = table.Column<double>(type: "float", nullable: false),
                    ChargesCredits = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnderwritingPropertyUnitsLedger", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UnderwritingPropertyUnitsLedger_UnderwritingPropertyUnits_UnitId",
                        column: x => x.UnitId,
                        principalSchema: "SchemaToken",
                        principalTable: "UnderwritingPropertyUnits",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                schema: "SchemaToken",
                table: "SocialProviders",
                columns: new[] { "Id", "Icon", "Name", "Placeholder", "UriTemplate" },
                values: new object[,]
                {
                    { 1, "fab fa-facebook", "Facebook", "Your username", "https://facebook.com/{0}" },
                    { 2, "fab fa-instagram", "Instagram", "Your username", "https://instagram.com/{0}" },
                    { 3, "fab fa-twitter", "Twitter", "Your username", "https://twitter.com/{0}" },
                    { 5, "fab fa-twitch", "Twitch", "Your username", "https://twitch.tv/{0}" },
                    { 6, "fab fa-youtube", "YouTube", "Your channel name", "https://youtube.com/{0}" },
                    { 8, "fab fa-linkedin", "LinkedIn", "Your username", "https://linkedin.com/in/{0}" },
                    { 9, "fa-duotone fa-globe", "Website", "https://amazingwebsite.com", "{0}" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_ActivityLogs_UserId",
                schema: "SchemaToken",
                table: "ActivityLogs",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AssetParners_AssetId",
                schema: "SchemaToken",
                table: "AssetParners",
                column: "AssetId");

            migrationBuilder.CreateIndex(
                name: "IX_CategoryPost_PostsId",
                schema: "SchemaToken",
                table: "CategoryPost",
                column: "PostsId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_PostId",
                schema: "SchemaToken",
                table: "Comments",
                column: "PostId");

            migrationBuilder.CreateIndex(
                name: "IX_CrmContactAddresses_ContactId",
                schema: "SchemaToken",
                table: "CrmContactAddresses",
                column: "ContactId");

            migrationBuilder.CreateIndex(
                name: "IX_CRMContactCRMContactMarket_MarketsId",
                schema: "SchemaToken",
                table: "CRMContactCRMContactMarket",
                column: "MarketsId");

            migrationBuilder.CreateIndex(
                name: "IX_CRMContactCRMContactRole_RolesId",
                schema: "SchemaToken",
                table: "CRMContactCRMContactRole",
                column: "RolesId");

            migrationBuilder.CreateIndex(
                name: "IX_CrmContactEmails_ContactId",
                schema: "SchemaToken",
                table: "CrmContactEmails",
                column: "ContactId");

            migrationBuilder.CreateIndex(
                name: "IX_CrmContactLogs_ContactId",
                schema: "SchemaToken",
                table: "CrmContactLogs",
                column: "ContactId");

            migrationBuilder.CreateIndex(
                name: "IX_CrmContactMarkets_Name",
                schema: "SchemaToken",
                table: "CrmContactMarkets",
                column: "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CrmContactPhones_ContactId",
                schema: "SchemaToken",
                table: "CrmContactPhones",
                column: "ContactId");

            migrationBuilder.CreateIndex(
                name: "IX_CrmContactReminders_ContactId",
                schema: "SchemaToken",
                table: "CrmContactReminders",
                column: "ContactId");

            migrationBuilder.CreateIndex(
                name: "IX_CrmContactRoles_Name",
                schema: "SchemaToken",
                table: "CrmContactRoles",
                column: "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CrmNotableDates_ContactId",
                schema: "SchemaToken",
                table: "CrmNotableDates",
                column: "ContactId");

            migrationBuilder.CreateIndex(
                name: "IX_EmailPreferences_UserId",
                schema: "SchemaToken",
                table: "EmailPreferences",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_HighlightedUsers_UserId",
                schema: "SchemaToken",
                table: "HighlightedUsers",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Posts_AuthorId",
                schema: "SchemaToken",
                table: "Posts",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_PostSubscriber_SubscribersId",
                schema: "SchemaToken",
                table: "PostSubscriber",
                column: "SubscribersId");

            migrationBuilder.CreateIndex(
                name: "IX_PostTag_TagsId",
                schema: "SchemaToken",
                table: "PostTag",
                column: "TagsId");

            migrationBuilder.CreateIndex(
                name: "IX_PostViews_PostId",
                schema: "SchemaToken",
                table: "PostViews",
                column: "PostId");

            migrationBuilder.CreateIndex(
                name: "IX_RoleClaims_RoleId",
                schema: "SchemaToken",
                table: "RoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                schema: "SchemaToken",
                table: "Roles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_SocialLinks_SocialProviderId",
                schema: "SchemaToken",
                table: "SocialLinks",
                column: "SocialProviderId");

            migrationBuilder.CreateIndex(
                name: "IX_SocialLinks_UserId",
                schema: "SchemaToken",
                table: "SocialLinks",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UnderwriterGoals_UnderwriterId",
                schema: "SchemaToken",
                table: "UnderwriterGoals",
                column: "UnderwriterId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UnderwritingLineItems_PropertyId",
                schema: "SchemaToken",
                table: "UnderwritingLineItems",
                column: "PropertyId");

            migrationBuilder.CreateIndex(
                name: "IX_UnderwritingMortgages_PropertyId",
                schema: "SchemaToken",
                table: "UnderwritingMortgages",
                column: "PropertyId");

            migrationBuilder.CreateIndex(
                name: "IX_UnderwritingNotes_PropertyId",
                schema: "SchemaToken",
                table: "UnderwritingNotes",
                column: "PropertyId");

            migrationBuilder.CreateIndex(
                name: "IX_UnderwritingNotes_UnderwriterId",
                schema: "SchemaToken",
                table: "UnderwritingNotes",
                column: "UnderwriterId");

            migrationBuilder.CreateIndex(
                name: "IX_UnderwritingPropertyProspects_UnderwriterId",
                schema: "SchemaToken",
                table: "UnderwritingPropertyProspects",
                column: "UnderwriterId");

            migrationBuilder.CreateIndex(
                name: "IX_UnderwritingPropertyUnitModels_PropertyId",
                schema: "SchemaToken",
                table: "UnderwritingPropertyUnitModels",
                column: "PropertyId");

            migrationBuilder.CreateIndex(
                name: "IX_UnderwritingPropertyUnits_ModelId",
                schema: "SchemaToken",
                table: "UnderwritingPropertyUnits",
                column: "ModelId");

            migrationBuilder.CreateIndex(
                name: "IX_UnderwritingPropertyUnitsLedger_UnitId",
                schema: "SchemaToken",
                table: "UnderwritingPropertyUnitsLedger",
                column: "UnitId");

            migrationBuilder.CreateIndex(
                name: "IX_UnderwritingProspectFiles_PropertyId",
                schema: "SchemaToken",
                table: "UnderwritingProspectFiles",
                column: "PropertyId");

            migrationBuilder.CreateIndex(
                name: "IX_UnderwritingProspectPropertyCapitalImprovements_PropertyId",
                schema: "SchemaToken",
                table: "UnderwritingProspectPropertyCapitalImprovements",
                column: "PropertyId");

            migrationBuilder.CreateIndex(
                name: "IX_UnderwritingProspectPropertyDealAnalysis_PropertyId",
                schema: "SchemaToken",
                table: "UnderwritingProspectPropertyDealAnalysis",
                column: "PropertyId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UnderwritingProspectPropertyIncomeForecasts_ProspectId",
                schema: "SchemaToken",
                table: "UnderwritingProspectPropertyIncomeForecasts",
                column: "ProspectId");

            migrationBuilder.CreateIndex(
                name: "IX_UnderwritingTiers_PropertyId",
                schema: "SchemaToken",
                table: "UnderwritingTiers",
                column: "PropertyId");

            migrationBuilder.CreateIndex(
                name: "IX_UserClaims_UserId",
                schema: "SchemaToken",
                table: "UserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserLogins_UserId",
                schema: "SchemaToken",
                table: "UserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRoles_RoleId",
                schema: "SchemaToken",
                table: "UserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                schema: "SchemaToken",
                table: "Users",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                schema: "SchemaToken",
                table: "Users",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ActivityLogs",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "AssetParners",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "CategoryPost",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "Comments",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "CrmContactAddresses",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "CRMContactCRMContactMarket",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "CRMContactCRMContactRole",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "CrmContactEmails",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "CrmContactLogs",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "CrmContactPhones",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "CrmContactReminders",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "CrmNotableDates",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "CustomContent",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "EmailPartialTemplates",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "EmailPreferences",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "EmailTemplates",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "HighlightedUsers",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "InvestorProspects",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "InvestorTestimonials",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "PostSubscriber",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "PostTag",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "PostViews",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "RoleClaims",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "Settings",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "SiteThemes",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "SocialLinks",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "UnderwriterGoals",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "UnderwritingGuidance",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "UnderwritingLineItems",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "UnderwritingMortgages",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "UnderwritingNotes",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "UnderwritingPropertyUnitsLedger",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "UnderwritingProspectFiles",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "UnderwritingProspectPropertyCapitalImprovements",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "UnderwritingProspectPropertyDealAnalysis",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "UnderwritingProspectPropertyIncomeForecasts",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "UnderwritingTiers",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "UserClaims",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "UserLogins",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "UserRoles",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "UserTokens",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "AssetsUnderManagement",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "Categories",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "CrmContactMarkets",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "CrmContactRoles",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "CrmContacts",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "Subscribers",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "Tags",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "Posts",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "SocialProviders",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "UnderwritingPropertyUnits",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "Roles",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "UnderwritingPropertyUnitModels",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "UnderwritingPropertyProspects",
                schema: "SchemaToken");

            migrationBuilder.DropTable(
                name: "Users",
                schema: "SchemaToken");
        }
    }
}
