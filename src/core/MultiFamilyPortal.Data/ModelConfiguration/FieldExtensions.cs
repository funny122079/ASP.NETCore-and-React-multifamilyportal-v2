using System.Linq.Expressions;
using System.Reflection;
using Humanizer;
using Microsoft.EntityFrameworkCore;

namespace MultiFamilyPortal.Data.ModelConfiguration
{
    internal static class FieldExtensions
    {
        public static void HasField<TEntity, TProperty>(this ModelBuilder modelBuilder, Expression<Func<TEntity, TProperty>> propertyExpression)
            where TEntity : class
        {
            var body = propertyExpression.Body;
            var type = body.GetType();
            var memberProp = type.GetProperty("Member") ??
                throw new ArgumentException("Could not locate the Member property of the Expression");

            var memberValue = memberProp.GetValue(body, null) as PropertyInfo ??
                throw new ArgumentException("The PropertyInfo returned by the Body.Member was null");

            var name = memberValue.Name;
            var fieldName = $"_{name.Camelize()}";

            var declaringType = memberValue.DeclaringType ??
                throw new ArgumentException($"No Declaring Type could be found for the Member {name}");

            var backingField = declaringType.GetField(fieldName, BindingFlags.Instance | BindingFlags.NonPublic);
            if(backingField == null)
            {
                throw new ArgumentException($"No backing field {fieldName} could be found for the Property {name} in {declaringType.Name}");
            }

            modelBuilder.Entity<TEntity>()
                .Property(name)
                .HasField(fieldName);
        }
    }
}
