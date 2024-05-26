using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MultiFamilyPortal.SaaS.Migrations
{
    public partial class GoogleVerification : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "GoogleSiteVerification",
                table: "Tenants",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsREMentorStudent",
                table: "Tenants",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GoogleSiteVerification",
                table: "Tenants");

            migrationBuilder.DropColumn(
                name: "IsREMentorStudent",
                table: "Tenants");
        }
    }
}
