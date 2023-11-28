using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using Microsoft.OpenApi.Models;
using Repository.ContextClass;
using Repository.Repository;
using Services.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("Database")));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

/* ---------------- Add Swagger -----------------------*/

builder.Services.AddSwaggerGen(c => c.SwaggerDoc("v1", new OpenApiInfo { Title = "WebAPI", Version = "v1" }));

/* ---------------- Add Cors -----------------------*/

builder.Services.AddCors(c =>
{
    c.AddPolicy("AlloWOrigin", options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});


/* ---------------- Employee -----------------------*/

builder.Services.AddScoped(typeof(IEmployeeRepository<>), typeof(EmployeeRepository<>));
builder.Services.AddTransient(typeof(IEmployeeService<>), typeof(EmployeeService<>));

/* ---------------- Department -----------------------*/

/*builder.Services.AddScoped(typeof(IDepartmentRepository<>), typeof(DepartmentRepository<>));
builder.Services.AddTransient(typeof(IDepartmentService<>), typeof(DepartmentService<>));*/

var app = builder.Build();

// Configure the HTTP request pipeline.

/* ---------------- Swagger Path-----------------------*/

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "WebAPI v1"));
}

/* ---------------- Use Cors -----------------------*/

app.UseCors(builder =>
{
    builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
});

/* ---------------- Static Files Path -----------------------*/

app.UseFileServer(new FileServerOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "EmployeeImages")
        ),
        RequestPath = "/EmployeeImages"
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
