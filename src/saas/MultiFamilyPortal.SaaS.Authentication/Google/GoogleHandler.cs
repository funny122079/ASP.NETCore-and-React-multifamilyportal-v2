﻿using System.Globalization;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text.Encodings.Web;
using System.Text.Json;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MultiFamilyPortal.Data;

namespace MultiFamilyPortal.SaaS.Authentication.Google
{
    /// <summary>
    /// Authentication handler for Google's OAuth based authentication.
    /// </summary>
    public class GoogleHandler : OAuthHandler<GoogleOptions>
    {
        /// <summary>
        /// Initializes a new instance of <see cref="GoogleHandler"/>.
        /// </summary>
        /// <inheritdoc />
        public GoogleHandler(ITenantSettingsContext context, IOptionsMonitor<GoogleOptions> options, ILoggerFactory logger, UrlEncoder encoder, ISystemClock clock)
            : base(context, options, logger, encoder, clock)
        {
        }

        protected override string ClientIdKey => PortalSetting.GoogleClientId;

        protected override string ClientSecretKey => PortalSetting.GoogleClientSecret;

        /// <inheritdoc />
        protected override async Task<AuthenticationTicket> CreateTicketAsync(
            ClaimsIdentity identity,
            AuthenticationProperties properties,
            OAuthTokenResponse tokens)
        {
            // Get the Google user
            var request = new HttpRequestMessage(HttpMethod.Get, Options.UserInformationEndpoint);
            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", tokens.AccessToken);

            var response = await Backchannel.SendAsync(request, Context.RequestAborted);
            if (!response.IsSuccessStatusCode)
            {
                throw new HttpRequestException($"An error occurred when retrieving Google user information ({response.StatusCode}). Please check if the authentication information is correct.");
            }

            using (var payload = JsonDocument.Parse(await response.Content.ReadAsStringAsync(Context.RequestAborted)))
            {
                var context = new OAuthCreatingTicketContext(new ClaimsPrincipal(identity), properties, Context, Scheme, Options, Backchannel, tokens, payload.RootElement);
                context.RunClaimActions();
                await Events.CreatingTicket(context);
                return new AuthenticationTicket(context.Principal!, context.Properties, Scheme.Name);
            }
        }

        /// <inheritdoc />
        protected override async Task<string> BuildChallengeUrl(AuthenticationProperties properties, string redirectUri)
        {
            // Google Identity Platform Manual:
            // https://developers.google.com/identity/protocols/OAuth2WebServer

            var queryStrings = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            queryStrings.Add("response_type", "code");
            queryStrings.Add("client_id", await _context.GetSettingAsync<string>(ClientIdKey));
            queryStrings.Add("redirect_uri", redirectUri);

            AddQueryString(queryStrings, properties, GoogleChallengeProperties.ScopeKey, FormatScope, Options.Scope);
            AddQueryString(queryStrings, properties, GoogleChallengeProperties.AccessTypeKey, Options.AccessType);
            AddQueryString(queryStrings, properties, GoogleChallengeProperties.ApprovalPromptKey);
            AddQueryString(queryStrings, properties, GoogleChallengeProperties.PromptParameterKey);
            AddQueryString(queryStrings, properties, GoogleChallengeProperties.LoginHintKey);
            AddQueryString(queryStrings, properties, GoogleChallengeProperties.IncludeGrantedScopesKey, v => v?.ToString(CultureInfo.InvariantCulture).ToLowerInvariant(), (bool?)null);

            var state = Options.StateDataFormat.Protect(properties);
            queryStrings.Add("state", state);

            var authorizationEndpoint = QueryHelpers.AddQueryString(Options.AuthorizationEndpoint, queryStrings!);
            return authorizationEndpoint;
        }

        private static void AddQueryString<T>(
            IDictionary<string, string> queryStrings,
            AuthenticationProperties properties,
            string name,
            Func<T, string?> formatter,
            T defaultValue)
        {
            string? value;
            var parameterValue = properties.GetParameter<T>(name);
            if (parameterValue != null)
            {
                value = formatter(parameterValue);
            }
            else if (!properties.Items.TryGetValue(name, out value))
            {
                value = formatter(defaultValue);
            }

            // Remove the parameter from AuthenticationProperties so it won't be serialized into the state
            properties.Items.Remove(name);

            if (value != null)
            {
                queryStrings[name] = value;
            }
        }

        private static void AddQueryString(
            IDictionary<string, string> queryStrings,
            AuthenticationProperties properties,
            string name,
            string? defaultValue = null)
            => AddQueryString(queryStrings, properties, name, x => x, defaultValue);
    }
}
