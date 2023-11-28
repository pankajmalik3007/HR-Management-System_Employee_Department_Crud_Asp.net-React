using Domain.BaseEntity;
using Repository.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Service
{
    public class EmployeeService<T> : IEmployeeService<T> where T : BaseEntityClass
    {
        private readonly IEmployeeRepository<T> _repository;
        public EmployeeService(IEmployeeRepository<T> repository)
        {
            _repository = repository;
        }
        public void Delete(int id)
        {
            T entity = Get(id);
            _repository.Remove(entity);
            _repository.Delete(entity);
        }

        public T Get(int id)
        {
            return _repository.Get(id);
        }

        public T GetByName(string name)
        {
            return _repository.GetByName(name);
        }

        public IEnumerable<T> GetAll()
        {
            return _repository.GetAll();
        }

        public void Insert(T entity)
        {
            _repository.Insert(entity);
        }

        public void Update(T entity)
        {
            _repository.Update(entity);
        }
    }
}
