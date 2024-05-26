using System.Text.Json;
using MultiFamilyPortal.Tests.Mocks;
using Xunit;

namespace MultiFamilyPortal.Tests.Fixtures
{
    public class ReactiveObjectConverterTests
    {
        [Fact]
        public void SerializesEnumAsString()
        {
            var expected = @"{""someEnum"":""Value2""}";
            var obj = new ReactiveObjectWithEnum { SomeEnum = AnEnum.Value2 };
            var json = JsonSerializer.Serialize(obj);
            Assert.Equal(expected, json);
        }

        [Fact]
        public void DeserializesEnumFromString()
        {
            var json = @"{""someEnum"":""Value2""}";
            var obj = JsonSerializer.Deserialize<ReactiveObjectWithEnum>(json);
            Assert.Equal(AnEnum.Value2, obj.SomeEnum);
        }

        [Fact]
        public void SerializesWithCustomPropertyName()
        {
            var expected = @"{""custom-name"":""Hello World""}";
            var obj = new ReactiveObjectWithJsonPropertyName { SomeString = "Hello World" };
            var json = JsonSerializer.Serialize(obj);
            Assert.Equal(expected, json);
        }

        [Fact]
        public void DeserializesWithCustomPropertyName()
        {
            var json = @"{""custom-name"":""Hello World""}";
            var obj = JsonSerializer.Deserialize<ReactiveObjectWithJsonPropertyName>(json);
            Assert.Equal("Hello World", obj.SomeString);
        }

        [Fact]
        public void SerializesStandardObject()
        {
            var expected = @"{""someGuid"":""a3bd0845-7c8f-4923-8332-4531f567534a"",""someBool"":true,""someString"":""Hello World"",""someDateTimeOffset"":""6/13/2021 2:30:22 PM -07:00"",""someDateTime"":""5/4/1977 8:30:00 AM""}";
            var obj = new BasicReactiveObject
            {
                SomeGuid = Guid.Parse("a3bd0845-7c8f-4923-8332-4531f567534a"),
                SomeBool = true,
                SomeString = "Hello World",
                SomeDateTime = new DateTime(1977, 5, 4, 8, 30, 0),
                SomeDateTimeOffset = new DateTimeOffset(2021, 6, 13, 14, 30, 22, TimeSpan.FromHours(-7))
            };
            var json = JsonSerializer.Serialize(obj);
            Assert.Equal(expected, json);
        }

        [Fact]
        public void DeserializesStandardObject()
        {
            var json = @"{""someGuid"":""a3bd0845-7c8f-4923-8332-4531f567534a"",""someBool"":true,""someString"":""Hello World"",""someDateTimeOffset"":""6/13/2021 2:30:22 PM -07:00"",""someDateTime"":""5/4/1977 8:30:00 AM""}";
            var obj = JsonSerializer.Deserialize<BasicReactiveObject>(json);
            Assert.Equal("Hello World", obj.SomeString);
            Assert.True(obj.SomeBool);
            Assert.Equal(Guid.Parse("a3bd0845-7c8f-4923-8332-4531f567534a"), obj.SomeGuid);
            Assert.Equal(new DateTime(1977, 5, 4, 8, 30, 0), obj.SomeDateTime);
            Assert.Equal(new DateTimeOffset(2021, 6, 13, 14, 30, 22, TimeSpan.FromHours(-7)), obj.SomeDateTimeOffset);
        }

        [Fact]
        public void SerializesObjectWithList()
        {
            var expected = @"{""myItems"":[{""someEnum"":""Value1""},{""someEnum"":""Value2""},{""someEnum"":""Value1""},{""someEnum"":""Value2""}]}";
            var obj = new ReactiveObjectWithList
            {
                MyItems = new List<ReactiveObjectWithEnum>
                {
                    new ReactiveObjectWithEnum { SomeEnum = AnEnum.Value1 },
                    new ReactiveObjectWithEnum { SomeEnum = AnEnum.Value2 },
                    new ReactiveObjectWithEnum { SomeEnum = AnEnum.Value1 },
                    new ReactiveObjectWithEnum { SomeEnum = AnEnum.Value2 }
                }
            };
            var json = JsonSerializer.Serialize(obj);
            Assert.Equal(expected, json);
        }

        [Fact]
        public void DeserializeObjectWithList()
        {
            var json = @"{""myItems"":[{""someEnum"":""Value1""},{""someEnum"":""Value2""},{""someEnum"":""Value1""},{""someEnum"":""Value2""}]}";
            var obj = JsonSerializer.Deserialize<ReactiveObjectWithList>(json);
            Assert.NotNull(obj?.MyItems);
            Assert.NotEmpty(obj.MyItems);
            Assert.Equal(4, obj.MyItems.Count);
            Assert.Equal(2, obj.MyItems.Count(x => x.SomeEnum == AnEnum.Value2));
        }

        [Fact]
        public void SerializesNullNumerics()
        {
            var model = new NullableNumeric();
            var json = JsonSerializer.Serialize(model);
            Assert.Equal("{}", json);
        }

        [Fact]
        public void SerializesNonNullNumerics()
        {
            var model = new NullableNumeric
            {
                SomeInt = 5,
                SomeDouble = 6.5
            };
            var json = JsonSerializer.Serialize(model);
            Assert.Equal(@"{""someInt"":5,""someDouble"":6.5}", json);
        }

        [Theory]
        [InlineData("{}")]
        [InlineData(@"{""someInt"":null,""someDouble"":null}")]
        public void DeserializesNullNumerics(string json)
        {
            var model = JsonSerializer.Deserialize<NullableNumeric>(json);

            Assert.Null(model.SomeDouble);
            Assert.Null(model.SomeInt);
        }

        [Fact]
        public void DeserializesNonNullNumerics()
        {
            var json = @"{""someInt"":5,""someDouble"":6.5}";
            var model = JsonSerializer.Deserialize<NullableNumeric>(json);

            Assert.Equal(6.5, model.SomeDouble);
            Assert.Equal(5, model.SomeInt);
        }

        [Theory]
        [InlineData("{}")]
        [InlineData(@"{""id"":null}")]
        public void DeserializesNullGuid(string json)
        {
            var model = JsonSerializer.Deserialize<NullableGuid>(json);

            Assert.Null(model.Id);
        }

        [Fact]
        public void DeserializesNullableGuid()
        {
            var json = @"{""id"":""964b344f-18ea-4e6d-8dcf-76d720b9e280""}";
            var model = JsonSerializer.Deserialize<NullableGuid>(json);

            Assert.NotNull(model.Id);
            Assert.Equal(Guid.Parse("964b344f-18ea-4e6d-8dcf-76d720b9e280"), model.Id);
        }

        [Fact]
        public void SerializesNullableGuid()
        {
            var model = new NullableGuid { Id = Guid.Parse("964b344f-18ea-4e6d-8dcf-76d720b9e280") };
            var json = JsonSerializer.Serialize(model);

            Assert.Equal(@"{""id"":""964b344f-18ea-4e6d-8dcf-76d720b9e280""}", json);
        }

        [Fact]
        public void SerializesNullGuid()
        {
            var model = new NullableGuid();
            var json = JsonSerializer.Serialize(model);

            Assert.Equal("{}", json);
        }
    }
}
