﻿using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.DataProtection;

namespace MultiFamilyPortal.SaaS.Authentication
{
    /// <summary>
    /// Used to setup defaults for the OAuthOptions.
    /// </summary>
    public class OAuthPostConfigureOptions<TOptions, THandler> : IPostConfigureOptions<TOptions>
        where TOptions : OAuthOptions, new()
        where THandler : OAuthHandler<TOptions>
    {
        private readonly IDataProtectionProvider _dp;

        /// <summary>
        /// Initializes the <see cref="OAuthPostConfigureOptions{TOptions, THandler}"/>.
        /// </summary>
        /// <param name="dataProtection">The <see cref="IDataProtectionProvider"/>.</param>
        public OAuthPostConfigureOptions(IDataProtectionProvider dataProtection)
        {
            _dp = dataProtection;
        }

        /// <inheritdoc />
        public void PostConfigure(string name, TOptions options)
        {
            options.DataProtectionProvider = options.DataProtectionProvider ?? _dp;
            if (options.Backchannel == null)
            {
                options.Backchannel = new HttpClient(options.BackchannelHttpHandler ?? new HttpClientHandler());
                options.Backchannel.DefaultRequestHeaders.UserAgent.ParseAdd("Microsoft ASP.NET Core OAuth handler");
                options.Backchannel.Timeout = options.BackchannelTimeout;
                options.Backchannel.MaxResponseContentBufferSize = 1024 * 1024 * 10; // 10 MB
            }

            if (options.StateDataFormat == null)
            {
                var dataProtector = options.DataProtectionProvider.CreateProtector(
                    typeof(THandler).FullName!, name, "v1");
                options.StateDataFormat = new PropertiesDataFormat(dataProtector);
            }
        }
    }
}
