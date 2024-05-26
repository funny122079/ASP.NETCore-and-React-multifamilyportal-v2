namespace MultiFamilyPortal
{
    public interface ISiteInfo
    {
        string Title { get; }

        string PublicEmail { get; }

        string SenderEmail { get; }

        string SenderEmailName { get; }

        string LegalBusinessName { get; }

        string ContactPhone { get; }

        string Address { get; }

        string City { get; }

        string State { get; }

        string PostalCode { get; }

        string Facebook { get; }

        string Twitter { get; }

        string LinkedIn { get; }

        string Instagram { get; }

        string YouTube { get; }
    }
}
