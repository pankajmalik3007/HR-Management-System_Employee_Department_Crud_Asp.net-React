using Domain.BaseEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Service
{
    public interface IEmployeeService<T> where T : BaseEntityClass
    {
        IEnumerable<T> GetAll();
        T Get(int id);
        T GetByName(string name);
        void Insert(T entity);
        void Update(T entity);
        void Delete(int id);

    }
}
