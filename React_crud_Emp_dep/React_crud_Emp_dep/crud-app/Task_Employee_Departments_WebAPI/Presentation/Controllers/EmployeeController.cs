using Domain.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Service;

namespace Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService<Employee> _service;
        private readonly ILogger<EmployeeController> _logger;

        public EmployeeController(IEmployeeService<Employee> service, ILogger<EmployeeController> logger)
        {
            _service = service;
            _logger = logger;
        }

        [HttpGet(nameof(GetAll))]
        public IActionResult GetAll()
        {
            var employees = _service.GetAll();
            if (employees != null)
            {
                return Ok(employees);

            }
            return BadRequest("Employee Not Found");
        }

        [HttpGet("GetById{id}")]
        public IActionResult GetById(int id)
        {
            var employees = _service.Get(id);
            if (employees != null)
            {
                return Ok(employees);
            }
            return BadRequest("Employee Not Found");
        }

        [HttpGet("GetByName:{name}")]
        public IActionResult GetByName(string name)
        {
            var employees = _service.GetByName(name);
            if (employees != null)
            {
                return Ok(employees);
            }
            return BadRequest("Employee Not Found");
        }

        [HttpPost(nameof(Create))]
        public IActionResult Create(Employee employe)
        {
            _service.Insert(employe);
            return Ok(employe);
        }

        [HttpPut(nameof(Update))]
        public IActionResult Update(Employee employee)
        {
            _service.Update(employee);
            return Ok(employee);
        }

        [HttpDelete("DeleteById:{id}")]
        public IActionResult Delete(int id)
        {
            _service.Delete(id);
            return Ok(id);
        }


    }
}
