using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using MultiFamilyPortal.Data;
using MultiFamilyPortal.SaaS.Data;
using MultiFamilyPortal.SaaS.Services;
using MultiFamilyPortal.SaaSAdmin.Components;
using MultiFamilyPortal.SaaSAdmin.Services;
using Radzen;
using System.Text.RegularExpressions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();
builder.Services.AddRadzenComponents();

builder.Services.AddDbContext<TenantContext>();
builder.Services.AddScoped<TenantDbMigrator>();

//builder.Services.AddDbContext<MFPContext>();
//builder.Services.AddSingleton(builder.Configuration);
//builder.Services.AddSingleton<ITenantAccessor>(new TenantAccessor
//{
//    Current = new MultiFamilyPortal.SaaS.Models.Tenant
//    {
//        DatabaseSchema = "SchemaToken"
//    }
//});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseAntiforgery();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();


using (var scope = app.Services.CreateScope())
using (var db = scope.ServiceProvider.GetRequiredService<TenantContext>())
using (var migrator = scope.ServiceProvider.GetRequiredService<TenantDbMigrator>())
{
    // Uncomment the following block to set up the database locally
    //await db.Database.EnsureCreatedAsync();
    //await db.Database.MigrateAsync();

    var tenants = await db.Tenants.AsNoTracking().ToArrayAsync();
    foreach (var tenant in tenants)
    {
        await migrator.CreateDatabase(tenant);
    }
}

app.Run();
