using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using SharpScss;
using Compiler = SharpScss.Scss;

namespace MultiFamilyPortal.Scss
{
    public static class ScssHelper
    {
        public static void CompileScss(this IWebHostEnvironment host, string scssFile)
        {
            if (host is null)
            {
                throw new ArgumentNullException(nameof(host));
            }

            if(string.IsNullOrEmpty(scssFile))
            {
                throw new ArgumentNullException(nameof(scssFile));
            }

            var fileInfo = new FileInfo(scssFile);
            if (string.IsNullOrEmpty(fileInfo.DirectoryName) || !fileInfo.Exists)
                return;

            var outStyle = host.IsDevelopment() ? ScssOutputStyle.Expanded : ScssOutputStyle.Compressed;
            var ext = outStyle == ScssOutputStyle.Expanded ? ".css" : ".min.css";
            var outfile = Path.Combine(fileInfo.DirectoryName, $"{Path.GetFileNameWithoutExtension(scssFile)}{ext}");

            var options = new ScssOptions {
                GenerateSourceMap = true,
                OutputStyle = outStyle,
                InputFile = scssFile,
                OutputFile = outfile
            };
            var result = Compiler.ConvertToCss(File.ReadAllText(scssFile), options);

            File.WriteAllText(outfile, result.Css);
            File.WriteAllText($"{outfile}.map", result.SourceMap);
        }
    }
}
