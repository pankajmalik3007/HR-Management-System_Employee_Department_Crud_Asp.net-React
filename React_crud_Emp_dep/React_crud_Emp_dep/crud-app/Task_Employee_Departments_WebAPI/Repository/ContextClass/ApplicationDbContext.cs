using Domain.Mapper;
using Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.ContextClass
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new EmployeeMapper());
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new DepartmentMapper());
            base.OnModelCreating(modelBuilder);
        }
    }
}
