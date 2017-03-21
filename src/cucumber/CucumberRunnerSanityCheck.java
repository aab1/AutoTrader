package cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class) 
@CucumberOptions(
  features = {"src/cucumber"},
  plugin = {"html:target/cucumber-html-report","json:target/cucumber.json",
    "pretty:target/cucumber-pretty.txt", "usage:target/cucumber-usage.json",
    "junit:target/cucumber-results.xml"},
  glue = {"cucumber.steps"},
  tags = {"@sanityCheck"}//this will only run the sanity check tagged scenario
  )
public class CucumberRunnerSanityCheck {
	
	
}
	

// the tags can run scenarios from different feature files
//The tags help you to group and help you run what you really need to run at a given time

