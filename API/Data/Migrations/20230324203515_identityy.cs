using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class identityy : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "987f6cee-7410-429a-a6ff-8e7de7dd3e1f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e25d10b6-ebe9-4526-ae06-fbac8059b069");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "209427f4-6b02-4050-a24d-07d657569886", "95508757-0717-49a0-8b37-4338b2ca28c1", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "4683f2e5-c328-477a-80e9-2f8e515d9ca4", "164c61d2-6d1b-4b2d-8c14-3a3277a5e3cb", "Member", "MEMBER" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "209427f4-6b02-4050-a24d-07d657569886");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4683f2e5-c328-477a-80e9-2f8e515d9ca4");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "987f6cee-7410-429a-a6ff-8e7de7dd3e1f", "d1fa7860-1bd3-4464-8974-8347e2fde859", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "e25d10b6-ebe9-4526-ae06-fbac8059b069", "9f6ee77c-5997-42d2-8d39-2b0008f3833b", "Admin", "ADMIN" });
        }
    }
}
