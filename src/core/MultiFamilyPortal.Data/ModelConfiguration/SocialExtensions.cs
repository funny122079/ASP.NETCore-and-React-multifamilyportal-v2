using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MultiFamilyPortal.Data.Models;

namespace MultiFamilyPortal.Data.ModelConfiguration
{
    internal static class SocialExtensions
    {
        public static void ConfigureSocialProviders(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SocialProvider>()
                .HasData(DefaultProviders);
        }

        private static readonly SocialProvider[] DefaultProviders = new[]
        {
            new SocialProvider
            {
                Id = 1,
                Name = "Facebook",
                Icon = "fab fa-facebook",
                UriTemplate = "https://facebook.com/{0}",
                Placeholder = "Your username"
            },
            new SocialProvider
            {
                Id = 2,
                Name = "Instagram",
                Icon = "fab fa-instagram",
                UriTemplate = "https://instagram.com/{0}",
                Placeholder = "Your username"
            },
            new SocialProvider
            {
                Id = 3,
                Name = "Twitter",
                Icon = "fab fa-twitter",
                UriTemplate = "https://twitter.com/{0}",
                Placeholder = "Your username"
            },
            new SocialProvider
            {
                Id = 5,
                Name = "Twitch",
                Icon = "fab fa-twitch",
                UriTemplate = "https://twitch.tv/{0}",
                Placeholder = "Your username"
            },
            new SocialProvider
            {
                Id = 6,
                Name = "YouTube",
                Icon = "fab fa-youtube",
                UriTemplate = "https://youtube.com/{0}",
                Placeholder = "Your channel name"
            },
            new SocialProvider
            {
                Id = 8,
                Name = "LinkedIn",
                Icon = "fab fa-linkedin",
                UriTemplate = "https://linkedin.com/in/{0}",
                Placeholder = "Your username"
            },
            new SocialProvider
            {
                Id = 9,
                Name = "Website",
                Icon = "fa-duotone fa-globe",
                UriTemplate = "{0}",
                Placeholder = "https://amazingwebsite.com"
            }
        };
    }
}
