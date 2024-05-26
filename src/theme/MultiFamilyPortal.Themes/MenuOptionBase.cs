using System.Security.Claims;
using Microsoft.AspNetCore.Components.Routing;

namespace MultiFamilyPortal.Themes
{
    public abstract record MenuOptionBase
    {
        public string Title { get; init; }

        public string Link { get; init; }

        public string Policy { get; init; }

        public string RequiredRole { get; init; }

        public NavLinkMatch Match { get; init; }

        public IEnumerable<string> RequiredRoles { get; init; }

        public bool IsVisible(ClaimsPrincipal user)
        {
            if (!string.IsNullOrEmpty(RequiredRole))
                return user.IsInRole(RequiredRole);
            else if (!string.IsNullOrEmpty(Policy))
                return user.IsAuthorizedInPolicy(Policy);
            else if (RequiredRoles?.Any() ?? false)
                return user.IsInAnyRole(RequiredRoles.ToArray());

            return true;
        }
    }
}
