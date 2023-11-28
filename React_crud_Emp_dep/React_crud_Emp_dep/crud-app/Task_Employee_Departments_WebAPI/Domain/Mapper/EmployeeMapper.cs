using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Mapper
{
    public class EmployeeMapper : IEntityTypeConfiguration<Employee>
    {
        public void Configure(EntityTypeBuilder<Employee> builder)
        {
            builder.HasKey(e => e.Id)
                .HasName("pk_Employee_Id");

            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("Employee Id")
                .HasColumnType("INT");

            builder.Property(e => e.Name)
                .HasColumnName("Employee Name")
                .HasColumnType("Nvarchar(100)")
                .IsRequired();

            builder.Property(e => e.Emp_Addr)
                .HasColumnName("Employee Address")
                .HasColumnType("NVarchar(500)")
                .IsRequired();

            builder.Property(e => e.Emp_Photo)
                .HasColumnName("Employee Photo")
                .HasColumnType("NVarchar(500)")
                .IsRequired();
        }
    }
}
