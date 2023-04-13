using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class Identity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5ce7ebdd-d254-46e4-ad27-8b7aba9ad347");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d0bdf7a0-207b-4c2c-98ca-52870fd413be");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "987f6cee-7410-429a-a6ff-8e7de7dd3e1f", "d1fa7860-1bd3-4464-8974-8347e2fde859", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "e25d10b6-ebe9-4526-ae06-fbac8059b069", "9f6ee77c-5997-42d2-8d39-2b0008f3833b", "Admin", "ADMIN" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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
                values: new object[] { "5ce7ebdd-d254-46e4-ad27-8b7aba9ad347", "54be3a6c-1695-4bef-adef-ec30882e1c0f", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "d0bdf7a0-207b-4c2c-98ca-52870fd413be", "9a58b2a8-c967-4f60-b890-77c989308e45", "Member", "MEMBER" });
        }
    }
}
