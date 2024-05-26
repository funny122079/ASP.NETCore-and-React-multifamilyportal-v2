using MultiFamilyPortal;
using MultiFamilyPortal.Authentication;

namespace System.Security.Claims
{
    public static class UserExtensions
    {
        public static bool IsInAnyRole(this ClaimsPrincipal user, params string[] roles)
        {
            foreach (var role in roles)
                if (user.IsInRole(role))
                    return true;

            return false;
        }

        public static bool IsAuthorizedInPolicy(this ClaimsPrincipal user, string policy)
        {
            return policy switch
            {
                PortalPolicy.AdminPortalViewer => user.IsInAnyRole(PortalRoles.BlogAuthor, PortalRoles.Underwriter, PortalRoles.PortalAdministrator, PortalRoles.Mentor),
                PortalPolicy.Blogger => user.IsInAnyRole(PortalPolicy.Blogger, PortalRoles.PortalAdministrator),
                PortalPolicy.InvestorPortalViewer => user.IsInAnyRole(PortalRoles.Investor, PortalRoles.Sponsor),
                PortalPolicy.InvestorRelations => user.IsInAnyRole(PortalRoles.Underwriter, PortalRoles.PortalAdministrator),
                PortalPolicy.Underwriter => user.IsInAnyRole(PortalRoles.Underwriter, PortalRoles.PortalAdministrator),
                PortalPolicy.UnderwritingViewer => user.IsInAnyRole(PortalRoles.Underwriter, PortalRoles.PortalAdministrator, PortalRoles.Mentor),
                _ => false
            };
        }
    }
}
