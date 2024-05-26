using AvantiPoint.FileStorage;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using MultiFamilyPortal.Drawing;
using SkiaSharp;

namespace MultiFamilyPortal.Services;

public class BrandService(ILogger<BrandService> logger, IStorageService storageService, IWebHostEnvironment hostEnvironment) : IBrandService
{
    private const string Icons = nameof(Icons);
    private const string Brand = nameof(Brand);

    private readonly Dictionary<string, int> _favicons = new ()
    {
        // { "favicon.ico", 16 },
         { "favicon-16x16.png", 16 },
         { "favicon-32x32.png", 32 },
         { "favicon-96x96.png", 96 },
         { "android-chrome-192x192.png", 128 },
         { "android-chrome-288x288.png", 288 },
         { "android-chrome-512x512.png", 512 },
         { "apple-touch-icon.png", 180 },
    };

    private ILogger<BrandService> _logger { get; } = logger;
    private IStorageService _storage { get; } = storageService;
    private IWebHostEnvironment _hostEnvironment { get; } = hostEnvironment;

    public async Task CreateDefaultIcons()
    {
        if (await _storage.ExistsAsync(Path.Combine(Icons, "favicon.ico")))
            return;

        var defaultFile = Path.Combine(_hostEnvironment.WebRootPath, "default-resources", "favicon", "default.png");
        await using var defaultFileStream = File.OpenRead(defaultFile);
        await CreateIcons(defaultFileStream, defaultFile);
    }

    public async Task CreateIcons(Stream stream, string name)
    {
        if (stream is null || stream == Stream.Null)
            throw new ArgumentNullException(nameof(stream));

        await using var memoryStream = new MemoryStream();
        await stream.CopyToAsync(memoryStream);
        var data = memoryStream.ToArray();
        var isSvg = Path.GetExtension(name).Equals(".svg", StringComparison.CurrentCultureIgnoreCase);

        foreach (var icon in _favicons)
        {
            try
            {
                using var output = isSvg ?
                    ResizeSvgImage(data, icon.Value) :
                    ResizePngImage(data, icon.Value);
                string filePath = Path.Combine(Icons, icon.Key);

                using var bitmap = SKBitmap.FromImage(output);
                var skData = bitmap.Encode(SKEncodedImageFormat.Png, 100);

                if (skData is not null)
                {
                    await using var skStream = skData.AsStream();
                    var fileTypeInfo = FileTypeLookup.GetFileTypeInfo(icon.Key)!;
                    await _storage.PutAsync(filePath, skStream, fileTypeInfo.MimeType, true);
                    skData.Dispose();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
            }
        }

        var converted = false;
        var tempFilePath = Path.Combine(Path.GetTempPath(), $"{Guid.NewGuid()}.ico");
        using (var pngStream = await _storage.GetAsync(Path.Combine(Icons, "android-chrome-512x512.png")))
        using (var outputStream = File.Create(tempFilePath))
        {
            converted = ImagingHelper.ConvertToIcon(pngStream, outputStream);
        }

        if (converted)
        {
            var iconTypeInfo = FileTypeLookup.GetFileTypeInfo("favicon.ico")!;
            using var favIconStream = File.OpenRead(tempFilePath);
            await _storage.PutAsync(Path.Combine(Icons, "favicon.ico"), favIconStream, iconTypeInfo.MimeType, overwrite: true);
        }

        File.Delete(tempFilePath);
    }

    private static SKImage ResizePngImage(byte[] data, int size)
    {
        using var src = SKImage.FromEncodedData(data);

        var info = new SKImageInfo(size, size, SKColorType.Rgba8888);
        var output = SKImage.Create(info);
        src.ScalePixels(output.PeekPixels(), SKFilterQuality.High);

        return output;
    }

    private static SKImage ResizeSvgImage(byte[] data, int size)
    {
        using var stream = new MemoryStream(data);

        var svg = new SkiaSharp.Extended.Svg.SKSvg
        {
            PixelsPerInch = 0,
            ThrowOnUnsupportedElement = false
        };
        var pict = svg.Load(stream);
        var canvasMax = new SKSizeI(size, size);

        var matrix = SKMatrix.CreateScale(1, 1);
        return SKImage.FromPicture(pict, canvasMax, matrix);
    }

    public async Task CreateBrandImage(IFormFile file, string name)
    {
        try
        {
            var fileExt = Path.GetExtension(file.FileName);
            if (fileExt == ".jpeg")
                fileExt = ".jpg";
            else if (!(fileExt is ".svg" or ".png"))
                fileExt = ".png";

            var fileName = name + fileExt;
            var filePath = Path.Combine(Brand, fileName);

            switch (fileExt.ToLower())
            {
                case ".svg":
                    await using (var stream = file.OpenReadStream())
                        await _storage.PutAsync(filePath, stream, FileTypeLookup.GetFileTypeInfo(fileName)!.MimeType, true);
                    break;

                default:
                    var format = fileExt == ".jpg" ? SKEncodedImageFormat.Jpeg : SKEncodedImageFormat.Png;
                    using (var src = SKImage.FromEncodedData(file.OpenReadStream()))
                    {
                        var max = Math.Max(src.Height, src.Width);
                        var scale = max > 1024 ? 1024 / max : 1;
                       
                        int width = src.Width * scale;
                        int height = src.Height * scale;
                        if (width == 0 || height == 0)
                            throw new Exception("Invalid image size");

                        var info = new SKImageInfo(width, height, SKColorType.Rgba8888);
                        using var output = SKImage.Create(info);
                        src.ScalePixels(output.PeekPixels(), SKFilterQuality.High);

                        using var bitmap = SKBitmap.FromImage(output);
                        var skData = bitmap.Encode(format, 100);

                        if (skData is not null)
                        {
                            await using var skStream = skData.AsStream();
                            var fileTypeInfo = FileTypeLookup.GetFileTypeInfo(fileName)!;
                            await _storage.PutAsync(filePath, skStream, fileTypeInfo.MimeType, true);
                            skData.Dispose();
                        }
                    }
                    break;
            }
        }
        catch (Exception ex)
        {
            _logger.LogError(ex.Message);
        }
    }

    public async Task<Stream> GetIcon(string fileName)
    {
        try
        {
            var stream = await _storage.GetAsync(Path.Combine(Icons, fileName));
            if (!(stream is null || stream == Stream.Null))
            {
                return stream;
            }
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, $"Error getting Brand Icon: '{fileName}'.");
        }

        return Stream.Null;
    }

    public async Task<(Stream Stream, string MimeType, string FileName)> GetBrandImage(string name)
    {
        try
        {
            var png = $"{name}.png";
            var svg = $"{name}.svg";
            var jpg = $"{name}.jpg";

            var savedPng = Path.Combine(Brand, png);
            var savedSvg = Path.Combine(Brand, svg);
            var savedJpg = Path.Combine(Brand, jpg);

            var jpgInfo = FileTypeLookup.GetFileTypeInfo(jpg);
            var pngInfo = FileTypeLookup.GetFileTypeInfo(png);
            var svgInfo = FileTypeLookup.GetFileTypeInfo(svg);

            if (await _storage.ExistsAsync(savedPng))
                return (await _storage.GetAsync(savedPng), pngInfo.MimeType, png);

            else if (await _storage.ExistsAsync(savedSvg))
                return (await _storage.GetAsync(savedSvg), svgInfo.MimeType, svg);

            else if (await _storage.ExistsAsync(savedJpg))
                return (await _storage.GetAsync(savedJpg), jpgInfo.MimeType, jpg);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, $"Error getting Brand Image: '{name}'.");
        }

        return (Stream.Null, string.Empty, string.Empty);
    }
}
