package com.cucumberSelenium.yahooTests.step_definitions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"/Users/horace/Documents/eclipse-workspace/yahooTests/src/main/java/com/cucumberSelenium/yahooTests/yahooEmailLogin.feature"},
		format = {"pretty", "html:reports/test-reports", "json:json_output/cucumber.json" }, 
		//tags = {"@smoke"},
		dryRun = false,
		//glue = {"/Users/horace/Documents/eclipse-workspace/yahooTests/src/test/java/com/cucumberSelenium/yahooTests/step_definitions/YahooEmailLogin_StepDef.java"},
		monochrome = true,
		strict = true
		)

public class testRunner {

	
	
}


/* Cucumber options:
		format =  'pretty' displays the results with a nice format on the console, more arguments are for generating
					other reports (formats) (html, json, junit xml)
		tags = Execute by tags defined on the features files, scans and executes
		dryRun = Checks for the mapping between the feature files and step definitions
		glue = Provides the package or folder (path) for the step definitions
		monochrome = Displays the console on a readable format
		strict = Fail execution if there are pending or undefined steps
*/