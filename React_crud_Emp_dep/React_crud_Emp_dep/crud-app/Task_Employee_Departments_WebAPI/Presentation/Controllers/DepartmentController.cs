using Domain.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Service;

namespace Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly IEmployeeService<Department> _service;
        private readonly ILogger<DepartmentController> _logger;

        public DepartmentController(IEmployeeService<Department> service, ILogger<DepartmentController> logger)
        {
            _service = service;
            _logger = logger;
        }

        [HttpGet(nameof(GetAll))]
        public IActionResult GetAll()
        {
            var result = _service.GetAll();
            if (result == null)
            {
                return BadRequest("Department Not Found");
            }
            return Ok(result);
        }

        [HttpGet("GetById:{id}")]
        public IActionResult GetById(int id)
        {
            var result = _service.Get(id);
            if (result == null)
            {
                return BadRequest("Department Not Found");
            }
            return Ok(result);
        }

        [HttpGet("GetByName:{name}")]
        public IActionResult GetByName(string name)
        {
            var result = _service.GetByName(name);
            if (result == null)
            {
                return BadRequest("Department Not Found");
            }
            return Ok(result);
        }

        [HttpPost(nameof(Create))]
        public IActionResult Create(Department department)
        {
            _service.Insert(department);
            return Ok(department);
        }

        [HttpPut(nameof(Update))]
        public IActionResult Update(Department department)
        {
            _service.Update(department);
            return Ok(department);
        }

        [HttpDelete("DeleteById:{id}")]
        public IActionResult Delete(int id)
        {
            _service.Delete(id);
            return Ok(id);
        }
    }
}
