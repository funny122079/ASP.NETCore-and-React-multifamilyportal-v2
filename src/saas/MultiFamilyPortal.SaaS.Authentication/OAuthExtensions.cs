using System.Diagnostics.CodeAnalysis;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace MultiFamilyPortal.SaaS.Authentication
{
    /// <summary>
    /// Extension methods to add OAuth authentication.
    /// </summary>
    public static class OAuthExtensions
    {
        /// <summary>
        /// Adds OAuth 2.0 based authentication to <see cref="AuthenticationBuilder"/> using the specified authentication scheme.
        /// </summary>
        /// <param name="builder">The <see cref="AuthenticationBuilder"/>.</param>
        /// <param name="authenticationScheme">The authentication scheme.</param>
        /// <param name="displayName">A display name for the authentication handler.</param>
        /// <param name="configureOptions">A delegate to configure the handler specific options.</param>
        /// <returns>A reference to <paramref name="builder"/> after the operation has completed.</returns>
        public static AuthenticationBuilder AddOAuth<TOptions, [DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)]THandler>(this AuthenticationBuilder builder, string authenticationScheme, string displayName, Action<TOptions> configureOptions)
            where TOptions : OAuthOptions, new()
            where THandler : OAuthHandler<TOptions>
        {
            builder.Services.TryAddEnumerable(ServiceDescriptor.Singleton<IPostConfigureOptions<TOptions>, OAuthPostConfigureOptions<TOptions, THandler>>());
            builder.Services.TryAddEnumerable(ServiceDescriptor.Singleton<IPostConfigureOptions<TOptions>, EnsureSignInScheme<TOptions>>());


            return AddSchemeHelper<TOptions, THandler>(builder, authenticationScheme, displayName, configureOptions);
        }

        private static AuthenticationBuilder AddSchemeHelper<TOptions, [DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)]THandler>(this AuthenticationBuilder builder, string authenticationScheme, string? displayName, Action<TOptions>? configureOptions)
            where TOptions : AuthenticationSchemeOptions, new()
            where THandler : class, IAuthenticationHandler
        {
            builder.Services.Configure<AuthenticationOptions>(o =>
            {
                o.AddScheme(authenticationScheme, scheme =>
                {
                    scheme.HandlerType = typeof(THandler);
                    scheme.DisplayName = displayName;
                });
            });
            if (configureOptions != null)
            {
                builder.Services.Configure(authenticationScheme, configureOptions);
            }
            builder.Services.AddOptions<TOptions>(authenticationScheme).Validate(o =>
            {
                o.Validate(authenticationScheme);
                return true;
            });
            builder.Services.AddTransient<THandler>();
            return builder;
        }

        // Used to ensure that there's always a default sign in scheme that's not itself
        private class EnsureSignInScheme<TOptions> : IPostConfigureOptions<TOptions> where TOptions : RemoteAuthenticationOptions
        {
            private readonly AuthenticationOptions _authOptions;

            public EnsureSignInScheme(IOptions<AuthenticationOptions> authOptions)
            {
                _authOptions = authOptions.Value;
            }

            public void PostConfigure(string name, TOptions options)
            {
                options.SignInScheme ??= _authOptions.DefaultSignInScheme ?? _authOptions.DefaultScheme;
            }
        }
    }
}
