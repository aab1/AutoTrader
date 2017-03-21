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
  tags = {"~@ignore"} // the tilde sign mean NOT i.e do not run all features with ignore tag but run others
  )
public class CucumberRunner {
	
	
}
	




