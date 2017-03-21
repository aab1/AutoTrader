package cucumber.pages;

import org.openqa.selenium.WebElement;

import cucumber.helper.Helper;

public class AutotraderHomePage extends Helper 
{
	private WebElement logo;
	private WebElement postcodeElement;
	private WebElement distance;
	private WebElement carMake;
	private WebElement carModel;
	private WebElement minPrice;
	private WebElement maxPrice;
	private WebElement searchButton;
	
	public void navigateToAutoTraderHomepage() throws Exception
	{
		launchUrl("http://www.autotrader.co.uk");
	}
	
	public void isHomePageDisplayed() throws Exception
	{
		logo = getElementByCssSelector(".at-logo.tracking-header-link");
		VerifyAnElementIsDisplayed(logo);
	}
	
	public void inputPostcode(String postcode) throws Exception
	{
		postcodeElement = getElementById("postcode");
		postcodeElement.clear();
		//postcodeElement.sendKeys("M40 2EB");
		postcodeElement.sendKeys(postcode);
	}
	
	public void selectDistanceFromPostcode(String DistanceDisplayedOnPage) throws Exception
	{
		distance = getElementById("radius");
		selectByText(distance, DistanceDisplayedOnPage);
		//selectByValue(distance, "1501"); //there is a method in the helper class that can select by visible text 
	}
	
	public void selectCarFromDropdown(String car_make) throws Exception
	{//we select by value here cos the visible test changes
		carMake = getElementById("searchVehiclesMake");
		selectByValue(carMake, car_make.toUpperCase());
	}
	
	public void selectCarModel(String model) throws Exception
	{
		carModel = getElementById("searchVehiclesModel");
		selectByValue(carModel, model);
	}
	
	public void selectMinPrice(String minimumPrice) throws Exception
	{
		minPrice = getElementById("searchVehiclesPriceFrom");
		selectByValue(minPrice, minimumPrice);
	}
	public void selectMaxPrice(String maximumPrice) throws Exception
	{
		maxPrice = getElementById("searchVehiclesPriceTo");
		selectByValue(maxPrice, maximumPrice);
	}
	
	public void searchButton() throws Exception
	{
		searchButton = getElementById("search");
		searchButton.click();
	}
	
	//method that display another page when the button is clicked
	//when search is clicked result page is opened
	//this is how to move from one page to another
	//The method returns the search result page
	public AutotraderSearchResultPage searchCarButton() throws Exception
	{
		searchButton = getElementById("search");
		clickAnElement(searchButton);
		return new AutotraderSearchResultPage();
		
	}
}
