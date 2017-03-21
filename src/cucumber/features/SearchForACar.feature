Feature: Search Cars
		In order to view different cars for sale
		As an autotrader customer
		I want the ability to search for a car of my choice
@ignore	@sanityCheck	
Scenario:	Search for Audi cars on homepage search box
			Given I navigate to Autotrader homepage
			And autotrader logo is displayed
			When I enter my postcode
			And I select a distance from my postcode
			And I select Audi from make dropdown
			And I select model from model dropdown
			And I select minimum price from min price dropdown
			And I select maximum price from max price dropdown
			And I click on search button
			Then the result of the search for Audi is displayed
			And all the cars displayed are Audi make