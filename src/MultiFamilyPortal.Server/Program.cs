using MultiFamilyPortal;
using MultiFamilyPortal.Apis;
using MultiFamilyPortal.Data;
using MultiFamilyPortal.Data.Models;
using MultiFamilyPortal.Extensions;
using MultiFamilyPortal.Identity;
using MultiFamilyPortal.SaaS;
//using static Org.BouncyCastle.Math.EC.ECCurve;
using System.Text.Json;
using MultiFamilyPortal.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCorePortalServices(builder.Configuration)
    .AddMFContext(builder.Configuration);

builder.Services.AddAuthentication();
builder.Services.AddIdentityApiEndpoints<SiteUser>()
    .AddEntityFrameworkStores<MFPContext>();

builder.Services.AddHttpClient();

builder.Services.AddCors(builder =>
{
    builder.AddPolicy("AllowAll", options =>
    {
        options.WithOrigins("http://localhost:5173", "http://mydomain:5173", "http://yourdomain:5173")
        .AllowAnyMethod()
        .AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseMissingTenant();
app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();

app.UseCors("AllowAll");

app.MapGet("/getConfig", async (HttpContext context) =>
{
    var hostname = context.Request.Query["host"];


    // Construct the path to the JSON file
    var filePath = Path.Combine(app.Environment.ContentRootPath, "db", "config.json");

    // Read the JSON file
    using var fileStream = File.OpenRead(filePath);

    // Deserialize JSON data
    var configs = await JsonSerializer.DeserializeAsync<Config[]>(fileStream);

    var filteredConfigs = configs.Where(c => c.host == hostname).ToList();

    if (filteredConfigs.Count == 0)
    {
        context.Response.StatusCode = StatusCodes.Status404NotFound;
        await context.Response.WriteAsync($"No configuration found for clientId {hostname}");
    }

    // Return filtered configurations
    context.Response.ContentType = "application/json";
    await context.Response.WriteAsJsonAsync(filteredConfigs);

    //return configs;
})
.WithName("GetClientData")
.WithOpenApi();

//app.MapMultifamilyPortalIdentityApi();
app.MapFavIcons();

app.MapFallbackToFile("/index.html");

app.Run();

//internal record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
//{
//    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
//}
