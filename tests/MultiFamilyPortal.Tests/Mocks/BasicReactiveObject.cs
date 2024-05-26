using System;
using System.Text.Json.Serialization;
using MultiFamilyPortal.Converters;
using ReactiveUI;

namespace MultiFamilyPortal.Tests.Mocks
{
    [JsonConverter(typeof(ReactiveObjectConverter<BasicReactiveObject>))]
    internal class BasicReactiveObject : ReactiveObject
    {
        private bool _someBool;
        private string _someString;
        private DateTime _someDateTime;
        private DateTimeOffset _someDateTimeOffset;
        private Guid _someGuid;

        public Guid SomeGuid
        {
            get => _someGuid;
            set => this.RaiseAndSetIfChanged(ref _someGuid, value);
        }

        public bool SomeBool
        {
            get => _someBool;
            set => this.RaiseAndSetIfChanged(ref _someBool, value);
        }

        public string SomeString
        {
            get => _someString;
            set => this.RaiseAndSetIfChanged(ref _someString, value);
        }

        public DateTimeOffset SomeDateTimeOffset
        {
            get => _someDateTimeOffset;
            set => this.RaiseAndSetIfChanged(ref _someDateTimeOffset, value);
        }

        public DateTime SomeDateTime
        {
            get => _someDateTime;
            set => this.RaiseAndSetIfChanged(ref _someDateTime, value);
        }
    }
}
