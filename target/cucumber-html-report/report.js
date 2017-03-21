$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/SearchAnyCar.feature");
formatter.feature({
  "line": 1,
  "name": "Search any Car",
  "description": "In order to view different cars for sale\r\nAs an autotrader customer\r\nI want the ability to search for a car of my choice",
  "id": "search-any-car",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "#@ignore"
    }
  ],
  "line": 6,
  "name": "Search for Audi cars on homepage search box",
  "description": "",
  "id": "search-any-car;search-for-audi-cars-on-homepage-search-box",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I navigate to Autotrader homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "autotrader logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter postcode as \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "a \"\u003cdistance\u003e\" is selected from postcode",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "\"\u003ccarMake\u003e\" is selected from make dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "\"\u003cmodel\u003e\" is selected from model dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "\"\u003cminPrice\u003e\" is selected from min price dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "\"\u003cmaxPrice\u003e\" is selected from max price dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the search result for \"\u003ccarMake\u003e\" is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "all the cars displayed are \"\u003ccarMake\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "search-any-car;search-for-audi-cars-on-homepage-search-box;",
  "rows": [
    {
      "cells": [
        "postcode",
        "distance",
        "carMake",
        "model",
        "minPrice",
        "maxPrice"
      ],
      "line": 19,
      "id": "search-any-car;search-for-audi-cars-on-homepage-search-box;;1"
    },
    {
      "cells": [
        "OL9 8LE",
        "Within 30 miles",
        "Audi",
        "A3",
        "5500",
        "22500"
      ],
      "line": 20,
      "id": "search-any-car;search-for-audi-cars-on-homepage-search-box;;2"
    },
    {
      "cells": [
        "M40 2EB",
        "Within 10 miles",
        "BMW",
        "1 SERIES",
        "5500",
        "16000"
      ],
      "line": 21,
      "id": "search-any-car;search-for-audi-cars-on-homepage-search-box;;3"
    }
  ],
  "keyword": "Scenarios"
});
formatter.before({
  "duration": 7653728195,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search for Audi cars on homepage search box",
  "description": "",
  "id": "search-any-car;search-for-audi-cars-on-homepage-search-box;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I navigate to Autotrader homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "autotrader logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter postcode as \"OL9 8LE\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "a \"Within 30 miles\" is selected from postcode",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "\"Audi\" is selected from make dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "\"A3\" is selected from model dropdown",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "\"5500\" is selected from min price dropdown",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "\"22500\" is selected from max price dropdown",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the search result for \"Audi\" is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "all the cars displayed are \"Audi\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SearchSteps.i_navigate_to_Autotrader_homepage()"
});
formatter.result({
  "duration": 4192830995,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.autotrader_logo_is_displayed()"
});
formatter.result({
  "duration": 166707595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OL9 8LE",
      "offset": 21
    }
  ],
  "location": "SearchAnyCarSteps.i_enter_postcode_as(String)"
});
formatter.result({
  "duration": 185000552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Within 30 miles",
      "offset": 3
    }
  ],
  "location": "SearchAnyCarSteps.a_is_selected_from_postcode(String)"
});
formatter.result({
  "duration": 546764463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 1
    }
  ],
  "location": "SearchAnyCarSteps.is_selected_from_make_dropdown(String)"
});
formatter.result({
  "duration": 368043016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A3",
      "offset": 1
    }
  ],
  "location": "SearchAnyCarSteps.is_selected_from_model_dropdown(String)"
});
formatter.result({
  "duration": 321941892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5500",
      "offset": 1
    }
  ],
  "location": "SearchAnyCarSteps.is_selected_from_min_price_dropdown(String)"
});
formatter.result({
  "duration": 348129535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22500",
      "offset": 1
    }
  ],
  "location": "SearchAnyCarSteps.is_selected_from_max_price_dropdown(String)"
});
formatter.result({
  "duration": 349939368,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_click_on_search_button()"
});
formatter.result({
  "duration": 91449576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "SearchAnyCarSteps.the_search_result_for_is_displayed(String)"
});
formatter.result({
  "duration": 8811769044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 28
    }
  ],
  "location": "SearchAnyCarSteps.all_the_cars_displayed_are(String)"
});
formatter.result({
  "duration": 420301600,
  "status": "passed"
});
formatter.after({
  "duration": 5934909128,
  "status": "passed"
});
formatter.before({
  "duration": 3639757016,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search for Audi cars on homepage search box",
  "description": "",
  "id": "search-any-car;search-for-audi-cars-on-homepage-search-box;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I navigate to Autotrader homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "autotrader logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter postcode as \"M40 2EB\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "a \"Within 10 miles\" is selected from postcode",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "\"BMW\" is selected from make dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "\"1 SERIES\" is selected from model dropdown",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "\"5500\" is selected from min price dropdown",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "\"16000\" is selected from max price dropdown",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the search result for \"BMW\" is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "all the cars displayed are \"BMW\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SearchSteps.i_navigate_to_Autotrader_homepage()"
});
formatter.result({
  "duration": 6240430999,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.autotrader_logo_is_displayed()"
});
formatter.result({
  "duration": 64200591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M40 2EB",
      "offset": 21
    }
  ],
  "location": "SearchAnyCarSteps.i_enter_postcode_as(String)"
});
formatter.result({
  "duration": 142186852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Within 10 miles",
      "offset": 3
    }
  ],
  "location": "SearchAnyCarSteps.a_is_selected_from_postcode(String)"
});
formatter.result({
  "duration": 595080646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 1
    }
  ],
  "location": "SearchAnyCarSteps.is_selected_from_make_dropdown(String)"
});
formatter.result({
  "duration": 362172939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 SERIES",
      "offset": 1
    }
  ],
  "location": "SearchAnyCarSteps.is_selected_from_model_dropdown(String)"
});
formatter.result({
  "duration": 323497033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5500",
      "offset": 1
    }
  ],
  "location": "SearchAnyCarSteps.is_selected_from_min_price_dropdown(String)"
});
formatter.result({
  "duration": 319056272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16000",
      "offset": 1
    }
  ],
  "location": "SearchAnyCarSteps.is_selected_from_max_price_dropdown(String)"
});
formatter.result({
  "duration": 340068349,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_click_on_search_button()"
});
formatter.result({
  "duration": 15746752679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "SearchAnyCarSteps.the_search_result_for_is_displayed(String)"
});
formatter.result({
  "duration": 31614860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 28
    }
  ],
  "location": "SearchAnyCarSteps.all_the_cars_displayed_are(String)"
});
formatter.result({
  "duration": 581618091,
  "status": "passed"
});
formatter.after({
  "duration": 5629158795,
  "status": "passed"
});
formatter.uri("features/SearchForACar.feature");
formatter.feature({
  "line": 1,
  "name": "Search Cars",
  "description": "In order to view different cars for sale\r\nAs an autotrader customer\r\nI want the ability to search for a car of my choice",
  "id": "search-cars",
  "keyword": "Feature"
});
});