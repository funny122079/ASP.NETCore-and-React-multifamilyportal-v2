using Microsoft.AspNetCore.Authentication.OAuth.Claims;
using Microsoft.Extensions.Logging;

namespace MultiFamilyPortal.SaaS.Authentication
{
    /// <summary>
    /// Constants used in the OAuth protocol
    /// </summary>
    public static class OAuthConstants
    {
        /// <summary>
        /// code_verifier defined in https://tools.ietf.org/html/rfc7636
        /// </summary>
        public static readonly string CodeVerifierKey = "code_verifier";

        /// <summary>
        /// code_challenge defined in https://tools.ietf.org/html/rfc7636
        /// </summary>
        public static readonly string CodeChallengeKey = "code_challenge";

        /// <summary>
        /// code_challenge_method defined in https://tools.ietf.org/html/rfc7636
        /// </summary>
        public static readonly string CodeChallengeMethodKey = "code_challenge_method";

        /// <summary>
        /// S256 defined in https://tools.ietf.org/html/rfc7636
        /// </summary>
        public static readonly string CodeChallengeMethodS256 = "S256";
    }

    internal static partial class LoggingExtensions
    {
        [LoggerMessage(1, LogLevel.Debug, "HandleChallenge with Location: {Location}; and Set-Cookie: {Cookie}.", EventName = "HandleChallenge")]
        public static partial void HandleChallenge(this ILogger logger, string location, string cookie);
    }
}
