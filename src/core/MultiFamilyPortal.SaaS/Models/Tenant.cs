using System.ComponentModel.DataAnnotations.Schema;

namespace MultiFamilyPortal.SaaS.Models;

public class Tenant
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }

    public string Host { get; set; } = null!;
    public string Environment { get; set; } = "Development";
    public bool Disabled { get; set; }
    public string DatabaseSchema { get; set; } = null!;
    public bool IsREMentorStudent { get; set; }
    public string? GoogleSiteVerification { get; set; }
    public DateTimeOffset Created { get; set; } = DateTimeOffset.UtcNow;
}
