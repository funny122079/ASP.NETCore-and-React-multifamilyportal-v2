using System.ComponentModel;
using System.Reflection;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using MultiFamilyPortal.Data.Models;

namespace MultiFamilyPortal.Data.Internals;

public class DatabaseContextSeeder
{
    private const string REMentor = "RE Mentor";
    private const string TrainingSupport = "Training & Support";
    private const string SoftwareVendor = "Software Vendor";
    private const string DtoModelTemplate = "MultiFamilyPortal.Dtos.{0}, MultiFamilyPortal.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null";

    public async Task SeedAsync(MFPContext context)
    {
        await SeedSettings(context);
        await SeedUnderwritingGuidance(context);
        await SeedCrmRoles(context);
        await SeedDefaultContacts(context);
        await SeedIdentityRoles(context);
        await SeedSiteContent(context);
        await SeedEmailTemplates(context);
        await SeedSiteThemes(context);
    }

    private async Task SeedSiteThemes(MFPContext context)
    {
        var themes = new[]
        {
            new SiteTheme
            {
                Id = "Portal Theme",
                IsDefault = true,
            },
            new SiteTheme
            {
                Id = "Quarter Real Estate",
                IsDefault = false
            }
        };

        foreach(var theme in themes)
        {
            if(!await context.SiteThemes.AnyAsync(x => x.Id == theme.Id))
            {
                await context.SiteThemes.AddAsync(theme);
                await context.SaveChangesAsync();
            }
        }
    }

    private async Task SeedIdentityRoles(MFPContext db)
    {
        var type = typeof(PortalRoles);
        var props = type.GetFields(BindingFlags.Static | BindingFlags.Public);

        foreach (var prop in props)
        {
            var roleName = prop.GetValue(null)?.ToString();
            if (!string.IsNullOrEmpty(roleName) && !await db.Roles.AnyAsync(x => x.Name == roleName))
            {
                var role = new IdentityRole(roleName)
                {
                    NormalizedName = roleName.ToUpper()
                };
                await db.Roles.AddAsync(role);
                await db.SaveChangesAsync();
            }
        }
    }

    private async Task SeedDefaultContacts(ICRMContext db)
    {
        if (!await db.CrmContacts.AnyAsync())
        {
            foreach (var contact in DefaultCrmContacts)
            {
                if (!await db.CrmContacts.AnyAsync(x => x.FirstName == contact.FirstName && x.LastName == contact.LastName))
                {
                    var roleName = contact.Company == "RE Mentor" ? TrainingSupport : SoftwareVendor;
                    var role = await db.CrmContactRoles.FirstOrDefaultAsync(x => x.Name == roleName);
                    contact.Roles = [role];
                    await db.CrmContacts.AddAsync(contact);
                    await db.SaveChangesAsync();
                }
            }
        }
    }

    private async Task SeedCrmRoles(ICRMContext db)
    {
        foreach (var role in DefaultCrmRoles)
        {
            if (!await db.CrmContactRoles.AnyAsync(x => x.Name == role.Name))
            {
                await db.CrmContactRoles.AddAsync(role);
                await db.SaveChangesAsync();
            }
        }
    }

    private async Task SeedUnderwritingGuidance(MFPContext db)
    {
        foreach (var guidance in DefaultGuidance)
        {
            if (await db.UnderwritingGuidance.AnyAsync(x => string.IsNullOrEmpty(x.Market) && x.Category == guidance.Category))
                continue;

            db.UnderwritingGuidance.Add(guidance);
            await db.SaveChangesAsync();
        }
    }

    private async Task SeedSettings(MFPContext db)
    {
        var type = typeof(PortalSetting);
        var props = type.GetFields(BindingFlags.Static | BindingFlags.Public);
        foreach (var prop in props)
        {
            if (await db.Settings.AnyAsync(x => x.Key == prop.Name))
                continue;

            var defaultValueAttr = prop.GetCustomAttribute<DefaultValueAttribute>();
            db.Settings.Add(new Models.Setting
            {
                Key = prop.Name,
                Value = !string.IsNullOrEmpty(defaultValueAttr?.Value?.ToString()) ? defaultValueAttr.Value.ToString() : string.Empty,
            });
            await db.SaveChangesAsync();
        }
    }

    private async Task SeedSiteContent(MFPContext context)
    {
        var pages = new[]
        {
            new CustomContent
            {
                Id = PortalPage.Privacy,
                Title = "Privacy Policy",
                HtmlContent = GetTemplate("privacy.html")
            },
            new CustomContent
            {
                Id = PortalPage.Terms,
                Title = "Terms & Conditions",
                HtmlContent = GetTemplate("terms-conditions.html")
            },
            new CustomContent
            {
                Id = PortalPage.Strategy,
                Title = "Strategy",
                HtmlContent = GetTemplate("strategy.html")
            },
        };

        foreach (var page in pages)
        {
            if (!await context.CustomContent.AnyAsync(x => x.Title == page.Title))
            {
                await context.CustomContent.AddAsync(page);
                await context.SaveChangesAsync();
            }
        }
    }

    private async Task SeedEmailTemplates(MFPContext context)
    {
        var defaultPartials = new[]
        {
            new EmailPartialTemplate
            {
                Key = "category",
                Content = GetTemplate("category.html")
            },
            new EmailPartialTemplate
            {
                Key = "tag",
                Content = GetTemplate("tag.html")
            }
        };
        foreach (var partial in defaultPartials)
        {
            if (!await context.EmailPartialTemplates.AnyAsync(x => x.Key == partial.Key))
            {
                context.EmailPartialTemplates.Add(partial);
                await context.SaveChangesAsync();
            }
        }

        var defaultTemplates = new[]
        {
            new EmailTemplate
            {
                Key = PortalTemplate.BlogSubscriberNotification,
                Description = "Sent to subscribers when a Blog Post or Newsletter is published",
                Model = string.Format(DtoModelTemplate, "SubscriberNotification"),
                Html = GetTemplate("subscribernotification.html"),
                PlainText = GetTemplate("subscribernotification.txt"),
                LastUpdated = DateTimeOffset.Now
            },
            new EmailTemplate
            {
                Key = PortalTemplate.ContactMessage,
                Description = "This may be used when sending messages to users such as password resets, or confirmation messages",
                Model = string.Format(DtoModelTemplate, "ContactFormEmailNotification"),
                Html = GetTemplate("contact-message.html"),
                PlainText = GetTemplate("contact-message.txt"),
                LastUpdated = DateTimeOffset.Now
            },
            new EmailTemplate
            {
                Key = PortalTemplate.ContactNotification,
                Description = "This is sent to the public Email address for the website. This will contain the contents of the contact form",
                Model = string.Format(DtoModelTemplate, "ContactNotificationTemplate"),
                Html = GetTemplate("contact-notification.html"),
                PlainText = GetTemplate("contact-notification.txt"),
                LastUpdated = DateTimeOffset.Now
            },
            new EmailTemplate
            {
                Key = PortalTemplate.InvestorNotification,
                Description = "This is sent to the public Email address for the website. This will contain the contents of the investor contact form",
                Model = string.Format(DtoModelTemplate, "InvestorInquiryNotificationTemplate"),
                Html = GetTemplate("investor-notification.html"),
                PlainText = GetTemplate("investor-notification.txt"),
                LastUpdated = DateTimeOffset.Now
            },
        };

        foreach (var template in defaultTemplates)
        {
            if (!await context.EmailTemplates.AnyAsync(x => x.Key == template.Key))
            {
                context.EmailTemplates.Add(template);
                await context.SaveChangesAsync();
            }
        }
    }

    private static string GetTemplate(string name)
    {
        var assembly = typeof(DatabaseContextSeeder).Assembly;
        using var stream = assembly.GetManifestResourceStream($"MultiFamilyPortal.Data.Templates.{name}");

        if (stream is null || stream == Stream.Null)
            return string.Empty;

        using var reader = new StreamReader(stream);
        return reader.ReadToEnd();
    }

    public static readonly IEnumerable<CRMContact> DefaultCrmContacts = new[]
    {
        new CRMContact
        {
            FirstName = "Dan",
            LastName = "Siegel",
            Company = "AvantiPoint",
            Title = "CEO",
            Emails = new []
            {
                new CRMContactEmail
                {
                    Email = "dsiegel@avantipoint.com",
                    Primary = true,
                    Type = CRMContactEmailType.Work
                }
            },
            Logs = new []
            {
                new CRMContactLog
                {
                    Notes = "Welcome to the MultiFamily Business Portal. If you run into any trouble or have any questions please reach out any time."
                }
            }
        },
        new CRMContact
        {
            FirstName = "Jeannie",
            LastName = "Orlowski",
            Company = REMentor,
            Title = "Investor Relations / Coach",
            Emails = new []
            {
                new CRMContactEmail
                {
                    Email = "jeannie@rementor.com",
                    Primary = true,
                    Type = CRMContactEmailType.Work
                }
            },
            Phones = new []
            {
                new CRMContactPhone
                {
                    Number = "7819825724",
                    Primary = true,
                    Type = CRMContactPhoneType.Work
                }
            },
        },
        new CRMContact
        {
            FirstName = "Jermaine",
            LastName = "Evans",
            Company = REMentor,
            Title = "Coaching Coordinator",
            Emails = new []
            {
                new CRMContactEmail
                {
                    Email = "jevans@rementor.com",
                    Primary = true,
                    Type = CRMContactEmailType.Work
                }
            },
            Phones = new []
            {
                new CRMContactPhone
                {
                    Number = "7819825711",
                    Primary = true,
                    Type = CRMContactPhoneType.Work
                }
            }
        },
    };

    private static readonly IEnumerable<CRMContactRole> DefaultCrmRoles = new[]
    {
        new CRMContactRole
        {
            Name = "Real Estate Broker",
            CoreTeam = true,
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = "Loan Broker",
            CoreTeam = true,
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = "Direct Lender",
            CoreTeam = true,
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = "Hard Money Lender",
            CoreTeam = true,
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = "Investor",
            CoreTeam = true,
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = "Sponsor",
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = "Mentor",
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = "Insurance Agent",
            CoreTeam = true,
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = "Property Manager",
            CoreTeam = true,
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = "Attorney",
            CoreTeam = true,
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = "Property Inspector",
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = "Pool Maintenance",
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = "Lawn Maintenance",
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = "General Contractor",
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = "HVAC",
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = "Electrician",
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = "Plumber",
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = "Local Government",
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = "Economic Development",
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = TrainingSupport,
            SystemDefined = true,
        },
        new CRMContactRole
        {
            Name = SoftwareVendor,
            SystemDefined = true,
        }
    };

    private static readonly IEnumerable<UnderwritingGuidance> DefaultGuidance = new[]
    {
        new UnderwritingGuidance
        {
            Category = UnderwritingCategory.Taxes,
            Min = 0,
            Max = 0.01,
            Type = CostType.PercentOfPurchase,
            IgnoreOutOfRange = true,
        },
        new UnderwritingGuidance
        {
            Category = UnderwritingCategory.Insurance,
            Min = 250,
            Max = 250,
            Type = CostType.PerDoor
        },
        new UnderwritingGuidance
        {
            Category = UnderwritingCategory.RepairsMaintenance,
            Min = 300,
            Max = 600,
            Type = CostType.PerDoor
        },
        new UnderwritingGuidance
        {
            Category = UnderwritingCategory.GeneralAdmin,
            Min = 100,
            Max = 250,
            Type = CostType.PerDoor
        },
        new UnderwritingGuidance
        {
            Category = UnderwritingCategory.Marketing,
            Min = 100,
            Max = 100,
            Type = CostType.PerDoor
        },
        new UnderwritingGuidance
        {
            Category = UnderwritingCategory.ContractServices,
            Min = 200,
            Max = 400,
            Type = CostType.PerDoor
        },
        new UnderwritingGuidance
        {
            Category = UnderwritingCategory.Payroll,
            Min = 700,
            Max = 1000,
            Type = CostType.PerDoor
        },
    };
}
