Feature: Search any Car
		In order to view different cars for sale
		As an autotrader customer
		I want the ability to search for a car of my choice
#@ignore		
Scenario Outline:	Search for Audi cars on homepage search box
			Given I navigate to Autotrader homepage
			And autotrader logo is displayed
			When I enter postcode as "<postcode>"
			And a "<distance>" is selected from postcode
			And "<carMake>" is selected from make dropdown
			And "<model>" is selected from model dropdown
			And "<minPrice>" is selected from min price dropdown
			And "<maxPrice>" is selected from max price dropdown
			And I click on search button
			Then the search result for "<carMake>" is displayed
			And all the cars displayed are "<carMake>" 
Scenarios:			
			|postcode |distance 	   |carMake|model    |minPrice |maxPrice |
			|OL9 8LE  |Within 30 miles |Audi   |A3       |5500     |22500    |
			#|M40 2EB  |Within 10 miles |BMW    |1 SERIES |5500     |16000    |
			
			#This is how to comment out statements in the feature file
@sanityCheck 
Scenario:	Search for Audi cars on homepage search box
			Given I navigate to Autotrader homepage
			And autotrader logo is displayed
			When I enter postcode as "M34 5JD"
			And a "Within 40 miles" is selected from postcode
			And "Mazda" is selected from make dropdown
			And "MAZDA2" is selected from model dropdown
			And "2000" is selected from min price dropdown
			And "10000" is selected from max price dropdown
			And I click on search button
			Then the search result for "Mazda" is displayed
			And all the cars displayed are "Mazda"