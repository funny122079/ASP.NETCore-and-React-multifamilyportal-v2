Project Interview

To be considered for this job you should have Visual Studio installed and complete the following tasks. 
When done please reply with a link to the GitHub Repo with the completed project and the amount of time it took you to complete.

General Guidelines

The purpose of this is to both evaluate that you are capable of the given tasks that will be required for the job and ensure that you have an adequate understanding of how to operate at a professional development level.

1.You should evaluate the tasks below and create issues on your GitHub repo
2.You should keep things broken up into smaller blocks of work
3.You should work on branches and submit PRs to the repo for features. 
Commit messages and PR's should be meaningful and descriptive of what was done. 
You can use notation like chore: {message} or fix: {bug}. PRs should use links to automatically close associated issues.

Tasks

1.Create a GitHub Repository for the code
2.Create a new project using Visual Studio and the React and ASP.NET template. 
Commit this starting point and push to the master branch
3.For the sake of simplicity here, you can create a hard coded TenantService with a list of tenants. 
NOTE: When developing locally you should add one or more aliases to your hosts file so that you can have a domain like foo or bar that points to 127.0.0.1 thus allowing you to test multi-tenancy. 
Remember that the Tenant MUST be determined by the Host Name from the active HttpRequest by the AspNetCore backend.

	public record Tenant(int Id, string Host, bool IsActive, string ThemeName)

4.Add at least 2 React Themes. 
You can download some free themes for any website. 
NOTE: Remember that Themes should NOT know about each other. 
This means that for any file that may be common which would need to provide information on which resources to load. 
This should be resolved by the API. 
You will need to create a minimal API similar to the WeatherAPI created by the template.
5.Create any services and APIs that may be required to ensure that each tenant can return different assets such as the favicon even when using the same theme.
6.Each tenant should have the following:
	-Be able to upload an image for the favicon
	-Be able to upload an image to display for a home banner
	-Use the Weather API that is part of the template
	-Display either a default image asset or the user uploaded image for the Home Banner / Favicon that is unique to the tenant. 
	If TenantA uploads an asset it should not be available for TenantB. 
	NOTE The assets must be resolvable at the same url regardless of which tenant is resolving it. 
	For instance the favicon should be resolvable at http://{host}/favicon.png