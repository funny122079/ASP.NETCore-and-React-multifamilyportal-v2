namespace MultiFamilyPortal.Data.ComponentModel
{
    internal class KnownRecurranceAttribute : Attribute
    {
        public KnownRecurranceAttribute(bool recurring)
        {
            Recurring = recurring;
        }

        public bool Recurring { get; }
    }
}
