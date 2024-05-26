using System.Reflection;

namespace MultiFamilyPortal
{
    public interface IApplicationPart
    {
        IEnumerable<Assembly> Assemblies { get; }
    }
}
