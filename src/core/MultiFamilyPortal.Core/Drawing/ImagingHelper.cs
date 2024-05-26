using System.Diagnostics.CodeAnalysis;
using System.Drawing;
using System.Drawing.Imaging;

// https://gist.github.com/darkfall/1656050
namespace MultiFamilyPortal.Drawing
{
    /// <summary>
    /// Provides helper methods for imaging
    /// </summary>
    public static class ImagingHelper
    {
        /// <summary>
        /// Converts a PNG image to a icon (ico)
        /// </summary>
        /// <param name="input">The input stream</param>
        /// <param name="output">The output stream</param>
        /// <param name="size">The size (16x16 px by default)</param>
        /// <param name="preserveAspectRatio">Preserve the aspect ratio</param>
        /// <returns>Wether or not the icon was successfully generated</returns>
        [SuppressMessage("Interoperability", "CA1416:Validate platform compatibility", Justification = "Supported for development with Environment Platform Check")]
        public static bool ConvertToIcon(Stream input, Stream output, int size = 16, bool preserveAspectRatio = false)
        {
            if (Environment.OSVersion.Platform != PlatformID.Win32NT)
                return false;

            var inputBitmap = (Bitmap)Image.FromStream(input);
            if (inputBitmap != null)
            {
                var width = size;
                var height = preserveAspectRatio ? inputBitmap.Height / inputBitmap.Width * size : size;

                var newBitmap = new Bitmap(inputBitmap, new Size(width, height));
                if (newBitmap != null)
                {
                    // save the resized png into a memory stream for future use
                    using var memoryStream = new MemoryStream();
                    newBitmap.Save(memoryStream, ImageFormat.Png);

                    var iconWriter = new BinaryWriter(output);
                    if (output != null && iconWriter != null)
                    {
                        // 0-1 reserved, 0
                        iconWriter.Write((byte)0);
                        iconWriter.Write((byte)0);

                        // 2-3 image type, 1 = icon, 2 = cursor
                        iconWriter.Write((short)1);

                        // 4-5 number of images
                        iconWriter.Write((short)1);

                        // image entry 1
                        // 0 image width
                        iconWriter.Write((byte)width);
                        // 1 image height
                        iconWriter.Write((byte)height);

                        // 2 number of colors
                        iconWriter.Write((byte)0);

                        // 3 reserved
                        iconWriter.Write((byte)0);

                        // 4-5 color planes
                        iconWriter.Write((short)0);

                        // 6-7 bits per pixel
                        iconWriter.Write((short)32);

                        // 8-11 size of image data
                        iconWriter.Write((int)memoryStream.Length);

                        // 12-15 offset of image data
                        iconWriter.Write((int)(6 + 16));

                        // write image data
                        // png data must contain the whole png data file
                        iconWriter.Write(memoryStream.ToArray());

                        iconWriter.Flush();

                        return true;
                    }
                }
                return false;
            }
            return false;
        }
    }
}
