namespace MultiFamilyPortal.ComponentModel
{
    [AttributeUsage(AttributeTargets.Class, AllowMultiple = true)]
    public class PartialTemplateAttribute : Attribute
    {
        public PartialTemplateAttribute(string name)
        {
            Name = name;
        }

        public string Name { get; }
    }
}
