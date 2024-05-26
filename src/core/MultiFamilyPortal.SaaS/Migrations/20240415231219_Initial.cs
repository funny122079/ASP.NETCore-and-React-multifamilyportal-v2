using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace MultiFamilyPortal.SaaS.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Tenants",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Host = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Environment = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Disabled = table.Column<bool>(type: "bit", nullable: false),
                    DatabaseSchema = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsREMentorStudent = table.Column<bool>(type: "bit", nullable: false),
                    GoogleSiteVerification = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Created = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tenants", x => x.Id);
                });

#if DEBUG
            migrationBuilder.InsertData(
                table: "Tenants",
                columns: new[] { "Id", "Created", "DatabaseSchema", "Disabled", "Environment", "GoogleSiteVerification", "Host", "IsREMentorStudent" },
                values: new object[,]
                {
                    { new Guid("5946dcc3-c62e-44c0-b994-8cf2591910f5"), new DateTimeOffset(new DateTime(2024, 4, 15, 23, 12, 19, 211, DateTimeKind.Unspecified).AddTicks(5398), new TimeSpan(0, 0, 0, 0, 0)), "mfpdisabled", false, "Development", null, "mfpdisabled", false },
                    { new Guid("6c060c90-0c7e-4e36-b419-0224ba6f21da"), new DateTimeOffset(new DateTime(2024, 4, 15, 23, 12, 19, 211, DateTimeKind.Unspecified).AddTicks(5397), new TimeSpan(0, 0, 0, 0, 0)), "underwriter", false, "Development", null, "underwriter", false },
                    { new Guid("7285abc4-fd5b-4436-a9de-4a951410eefa"), new DateTimeOffset(new DateTime(2024, 4, 15, 23, 12, 19, 211, DateTimeKind.Unspecified).AddTicks(5379), new TimeSpan(0, 0, 0, 0, 0)), "local", false, "Development", null, "localhost", false },
                    { new Guid("983d007d-1f68-468a-80d9-3cf58e1c46cf"), new DateTimeOffset(new DateTime(2024, 4, 15, 23, 12, 19, 211, DateTimeKind.Unspecified).AddTicks(5396), new TimeSpan(0, 0, 0, 0, 0)), "homyre", false, "Development", null, "homyredemo", false },
                    { new Guid("c04cd58c-39bf-4567-abff-8cdf6a46e87b"), new DateTimeOffset(new DateTime(2024, 4, 15, 23, 12, 19, 211, DateTimeKind.Unspecified).AddTicks(5395), new TimeSpan(0, 0, 0, 0, 0)), "quarter", false, "Development", null, "quarterdemo", false }
                });
#endif
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tenants");
        }
    }
}
