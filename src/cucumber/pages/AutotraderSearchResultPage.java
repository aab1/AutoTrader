package cucumber.pages;


import java.util.List;

import org.openqa.selenium.WebElement;

import cucumber.helper.Helper;

public class AutotraderSearchResultPage extends Helper 
{
	//we use list here cos we know that the element is more than one
	private List<WebElement> searchResult;
	//private WebElement carMake;
	
	
	//verify that the result page is displayed.
	
	
	
	public void carSearchResult() throws Exception
	{
		searchResult = getElementsByClassName("gui-test-search-result-link");
		VerifyListOfElementsAreDisplayed(searchResult, 0);
	}
	
	public void isCorrectCarMakeDisplayed(String carMake) throws Exception
	{
		for(WebElement checkResultForExpectedCarMake: searchResult)
		{
			if(checkResultForExpectedCarMake.getText().toLowerCase().contains(carMake.toLowerCase()))
			{
				VerifyAnElementIsDisplayed(checkResultForExpectedCarMake);
			}
		}		 
	}
}
