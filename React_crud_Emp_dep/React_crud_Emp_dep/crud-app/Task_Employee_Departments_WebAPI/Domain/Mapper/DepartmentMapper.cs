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
    public class DepartmentMapper : IEntityTypeConfiguration<Department>
    {
        public void Configure(EntityTypeBuilder<Department> builder)
        {
            builder.HasKey(e => e.Id)
                .HasName("pk_Department_Id");

            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("Department Id")
                .HasColumnType("INT");

            builder.Property(e => e.Name)
                .HasColumnName("Department Name")
                .HasColumnType("Nvarchar(100)")
                .IsRequired();
        }
    }
}
