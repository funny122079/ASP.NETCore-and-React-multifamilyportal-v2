using MultiFamilyPortal.Data;
using MultiFamilyPortal.Services;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace MultiFamilyPortal.Apis;

public static class FavIcon
{
    public static WebApplication MapFavIcons(this WebApplication app)
    {
        app.MapGet("/favicon.ico", GetFavIcon);
        app.MapGet("/favicon-16x16.png", GetFavIcon16);
        app.MapGet("/favicon-32x32.png", GetFavIcon32);
        app.MapGet("/android-chrome-192x192.png", GetAndroidChrome192);
        app.MapGet("/android-chrome-512x512.png", GetAndroidChrome512);
        app.MapGet("/apple-touch-icon.png", GetAppleTouchIcon);
        app.MapGet("/site.webmanifest", GetSiteWebManifest);

        return app;
    }

    private static ValueTask<IResult> GetFavIcon(IBrandService brandService) =>
        GetImageAsync(brandService, "favicon.ico");

    private static ValueTask<IResult> GetFavIcon16(IBrandService brandService) =>
        GetImageAsync(brandService, "favicon-16x16.png");

    private static ValueTask<IResult> GetFavIcon32(IBrandService brandService) =>
        GetImageAsync(brandService, "favicon-32x32.png");

    private static ValueTask<IResult> GetAndroidChrome192(IBrandService brandService) =>
        GetImageAsync(brandService, "android-chrome-192x192.png");

    private static ValueTask<IResult> GetAndroidChrome512(IBrandService brandService) =>
        GetImageAsync(brandService, "android-chrome-512x512.png");

    private static ValueTask<IResult> GetAppleTouchIcon(IBrandService brandService) =>
        GetImageAsync(brandService, "apple-touch-icon.png");

    private static async ValueTask<IResult> GetSiteWebManifest(ITenantSettingsContext db)
    {
        var title = await db.GetSettingAsync<string>(PortalSetting.SiteTitle);
        var legalName = await db.GetSettingAsync<string>(PortalSetting.LegalBusinessName);

        if (string.IsNullOrEmpty(title) && !string.IsNullOrEmpty(legalName))
        {
            title = legalName;
        }
        else if (!string.IsNullOrEmpty(title) && string.IsNullOrEmpty(legalName))
        {
            legalName = title;
        }
        else
        {
            title = legalName = "Multi-Family Portal";
        }

        var manifest = new WebManifest(
            legalName,
            title,
            await db.GetSettingAsync(PortalSetting.ThemeColor, "#ffffff"),
            await db.GetSettingAsync(PortalSetting.BackgroundColor, "#ffffff"),
            [
                new Icon("/android-chrome-192x192.png", "192x192"),
                new Icon("/android-chrome-512x512.png", "512x512")
            ]
        );
        var json = JsonSerializer.Serialize(manifest);
        var bytes = Encoding.Default.GetBytes(json);
        return Results.File(bytes, "application/json", "site.webmanifest");
    }

    private static async ValueTask<IResult> GetImageAsync(IBrandService brand, string name)
    {
        using var stream = await brand.GetIcon(name);
        if (stream is null || stream == Stream.Null)
            return Results.NotFound();

        using var memoryStream = new MemoryStream();
        await stream.CopyToAsync(memoryStream);
        var data = memoryStream.ToArray();

        var typeInfo = FileTypeLookup.GetFileTypeInfo(name)!;
        return Results.File(data, typeInfo.MimeType, name);
    }

    private record WebManifest(
        [property: JsonPropertyName("name")] string Name,
        [property: JsonPropertyName("short_name")] string ShortName,
        [property: JsonPropertyName("theme_color")] string ThemeColor,
        [property: JsonPropertyName("background_color")] string BackgroundColor,
        [property: JsonPropertyName("icons")] IEnumerable<Icon> Icons
    )
    {
        [JsonPropertyName("display")]
        public string Display => "standalone";
    }

    private record Icon(
        [property: JsonPropertyName("src")] string Source,
        [property: JsonPropertyName("sizes")] string Sizes
    )
    {
        [JsonPropertyName("type")]
        public string Type => "image/png";
    }
}
