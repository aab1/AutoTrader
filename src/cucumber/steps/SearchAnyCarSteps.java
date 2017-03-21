package cucumber.steps;



import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.helper.Helper;
import cucumber.pages.AutotraderHomePage;
import cucumber.pages.AutotraderSearchResultPage;

public class SearchAnyCarSteps extends Helper{

	
	AutotraderHomePage homepage = new AutotraderHomePage();
	AutotraderSearchResultPage searchPage = new AutotraderSearchResultPage();

	@When("^I enter postcode as \"([^\"]*)\"$")
	public void i_enter_postcode_as(String postcode) throws Throwable {
	    homepage.inputPostcode(postcode);
	}
	
	@When("^a \"([^\"]*)\" is selected from postcode$")
	public void a_is_selected_from_postcode(String distance) throws Throwable {
	    homepage.selectDistanceFromPostcode(distance);
	}
	
	@When("^\"([^\"]*)\" is selected from make dropdown$")
	public void is_selected_from_make_dropdown(String car_make) throws Throwable {
	    homepage.selectCarFromDropdown(car_make);
	}
	
	@When("^\"([^\"]*)\" is selected from model dropdown$")
	public void is_selected_from_model_dropdown(String carModel) throws Throwable {
	    homepage.selectCarModel(carModel);
	}
	
	@When("^\"([^\"]*)\" is selected from min price dropdown$")
	public void is_selected_from_min_price_dropdown(String minPrice) throws Throwable {
		 homepage.selectMinPrice(minPrice);
	}
	
	@When("^\"([^\"]*)\" is selected from max price dropdown$")
	public void is_selected_from_max_price_dropdown(String maxPrice) throws Throwable {
		homepage.selectMaxPrice(maxPrice);
	}
	
	@Then("^the search result for \"([^\"]*)\" is displayed$")
	public void the_search_result_for_is_displayed(String carMake) throws Throwable {
		searchPage.carSearchResult();
	}
	
	@Then("^all the cars displayed are \"([^\"]*)\"$")
	public void all_the_cars_displayed_are(String carMake) throws Throwable {
	    searchPage.isCorrectCarMakeDisplayed(carMake);
	    
	}

}
