using System.Text;

namespace MultiFamilyPortal.Extensions
{
    public static class StringExtensions
    {
        public static string ToPhoneNumberMask(this string input)
        {
            if (string.IsNullOrEmpty(input))
                return string.Empty;

            var sb = new StringBuilder();
            for(var i = 0; i < input.Length; i++)
            {
                if(char.IsDigit(input[i]))
                    sb.Append(input[i]);
            }

            var cleaned = sb.ToString();
            if (cleaned.Length == 10 && long.TryParse(cleaned, out var number))
                return number.ToString("(000) 000-0000");

            return input;
        }
    }
}
