using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.Security.Cryptography;
using System.Text;

namespace MultiFamilyPortal.Services
{
    public static class GravatarHelper
    {
        [SuppressMessage(
            "Security",
            "CA5351:Do Not Use Broken Cryptographic Algorithms",
            Justification = "We aren't using it for encryption so we don't care.")]
        [SuppressMessage("Globalization", "CA1308:Normalize strings to uppercase", Justification = "It is an email address.")]
        public static string GetUri(string email, int size = 60, DefaultGravatar defaultGravatar = DefaultGravatar.MysteryPerson)
        {
            var sb = new StringBuilder();
            if (!string.IsNullOrEmpty(email))
            {
                using var md5 = MD5.Create();
                var inputBytes = Encoding.UTF8.GetBytes(email.Trim().ToLowerInvariant());
                var hashBytes = md5.ComputeHash(inputBytes);

                // Convert the byte array to hexadecimal string

                for (var i = 0; i < hashBytes.Length; i++)
                {
                    sb.Append(hashBytes[i].ToString("X2", CultureInfo.InvariantCulture));
                }
            }

            return $"https://www.gravatar.com/avatar/{sb.ToString().ToLowerInvariant()}?s={size}&d={DefaultGravatarName(defaultGravatar)}";
        }

        private static string DefaultGravatarName(DefaultGravatar defaultGravatar)
        {
            return defaultGravatar switch {
                DefaultGravatar.FileNotFound => "404",
                DefaultGravatar.MysteryPerson => "mp",
                _ => $"{defaultGravatar}".ToLower(),
            };
        }
    }
}
