namespace MultiFamilyPortal.Themes.Internals
{
    internal class ThemeStartupTask : IStartupTask
    {
        public Task StartAsync()
        {
            return Task.CompletedTask;
        }
    }
}