using Domain.BaseEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Employee : BaseEntityClass
    {
        public string Emp_Addr { get; set; }
        public string Emp_Photo { get; set; }
    }
}
