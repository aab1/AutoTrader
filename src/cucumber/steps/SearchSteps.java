package cucumber.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.helper.Helper;
import cucumber.pages.AutotraderHomePage;
import cucumber.pages.AutotraderSearchResultPage;


public class SearchSteps extends Helper
{
	
	/**
	 * To import libraries hold down control and press space bar
	 * create an object of the home page and other pages
	 * */
	
	AutotraderHomePage homepage = new AutotraderHomePage();
	//AutotraderSearchResultPage searchPage = new AutotraderSearchResultPage();
	AutotraderSearchResultPage searchResult;
	
	@Given("^I navigate to Autotrader homepage$")
	public void i_navigate_to_Autotrader_homepage() throws Throwable {
		homepage.navigateToAutoTraderHomepage();
	   
	}

	@Given("^autotrader logo is displayed$")
	public void autotrader_logo_is_displayed() throws Throwable 
	{
		homepage.isHomePageDisplayed();
	}
		

	@When("^I enter my postcode$")
	public void i_enter_my_postcode() throws Throwable {
		homepage.inputPostcode("M40 2EB");
	}

	@When("^I select a distance from my postcode$")
	public void i_select_a_distance_from_my_postcode() throws Throwable {
		homepage.selectDistanceFromPostcode("Within 200 miles");
	}

	@When("^I select Audi from make dropdown$")
	public void i_select_Audi_from_make_dropdown() throws Throwable {
		homepage.selectCarFromDropdown("AUDI");
	}
	

	@When("^I select model from model dropdown$")
	public void i_select_model_from_model_dropdown() throws Throwable {
		homepage.selectCarModel("A3");
	}

	@When("^I select minimum price from min price dropdown$")
	public void i_select_minimum_price_from_min_price_dropdown() throws Throwable {
	   homepage.selectMinPrice("5500");
	}

	@When("^I select maximum price from max price dropdown$")
	public void i_select_maximum_price_from_max_price_dropdown() throws Throwable {
	   homepage.selectMaxPrice("22500");
	}


	@When("^I click on search button$")
	public void i_click_on_search_button() throws Throwable {
		//homepage.searchButton();
		//there is an handshake below. the result page is stored in that searchResult variable
		//this concept is also is very good for C# in automation. 
		//either methods can be used.
		searchResult = homepage.searchCarButton();
	}

	@Then("^the result of the search for Audi is displayed$")
	public void the_result_of_the_search_for_Audi_is_displayed() throws Throwable {
		//using object of AutotraderSearchResultPage
		//searchPage.carSearchResult();
		searchResult.carSearchResult();
		
	}

	@Then("^all the cars displayed are Audi make$")
	public void all_the_cars_displayed_are_Audi_make() throws Throwable {
		//searchPage.isCorrectCarMakeDisplayed();
		searchResult.isCorrectCarMakeDisplayed("audi"); //this is the preferred solution.
	}

}
