using Domain.BaseEntity;
using Microsoft.EntityFrameworkCore;
using Repository.ContextClass;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repository
{
    public class EmployeeRepository<T> : IEmployeeRepository<T> where T : BaseEntityClass
    {
        private readonly ApplicationDbContext _context;
        private readonly DbSet<T> _entities;

        public EmployeeRepository(ApplicationDbContext context)
        {
            _context = context;
            _entities = _context.Set<T>();
        }
        public IEnumerable<T> GetAll()
        {
            return _entities.AsEnumerable();
        }

        public T Get(int id)
        {
            return _entities.SingleOrDefault(e => e.Id == id);
        }
        public T GetByName(string name)
        {
            return _entities.SingleOrDefault(e => e.Name.ToLower().Trim() == name.ToLower().Trim());
        }

        public void Save()
        {
            _context.SaveChanges();
        }
        public void Insert(T entity)
        {
            if(entity == null)
            {
                throw new ArgumentNullException(nameof(entity));
            }
            _entities.Add(entity);
            _context.SaveChanges();
        }

        public void Update(T entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException(nameof(entity));
            }
            _entities.Update(entity);
            _context.SaveChanges();
        }
        public void Remove(T entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException(nameof(entity));
            }
            _entities.Remove(entity);       
        }
        public void Delete(T entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException(nameof(entity));
            }
            _entities.Remove(entity);
            _context.SaveChanges();
        } 
    }
}
