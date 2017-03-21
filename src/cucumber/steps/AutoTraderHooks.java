package cucumber.steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.helper.Helper;

public class AutoTraderHooks extends Helper
{
	@Before
	/*This runs before and after anything runs in the code
	 * you can close db, close spreadsheet etc in after*/
	public void setUp() throws Exception
	{
		LaunchBrowser("Chrome");
	}
	
	@After
	public void tearDown() throws Exception
	{
		closeBrowser();
	}
}
