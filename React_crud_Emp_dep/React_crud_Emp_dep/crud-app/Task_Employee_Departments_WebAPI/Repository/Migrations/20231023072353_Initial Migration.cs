using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Repository.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Department",
                columns: table => new
                {
                    DepartmentId = table.Column<int>(name: "Department Id", type: "INT", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DepartmentName = table.Column<string>(name: "Department Name", type: "Nvarchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_Department_Id", x => x.DepartmentId);
                });

            migrationBuilder.CreateTable(
                name: "Employee",
                columns: table => new
                {
                    EmployeeId = table.Column<int>(name: "Employee Id", type: "INT", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmployeeAddress = table.Column<string>(name: "Employee Address", type: "NVarchar(500)", nullable: false),
                    EmployeePhoto = table.Column<string>(name: "Employee Photo", type: "NVarchar(500)", nullable: false),
                    EmployeeName = table.Column<string>(name: "Employee Name", type: "Nvarchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_Employee_Id", x => x.EmployeeId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Department");

            migrationBuilder.DropTable(
                name: "Employee");
        }
    }
}
