namespace MultiFamilyPortal.Converters
{
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = false)]
    internal class AddMethodAttribute : Attribute
    {
        public AddMethodAttribute(string methodName)
        {
            Name = methodName;
        }

        public string Name { get; set; }
    }
}
