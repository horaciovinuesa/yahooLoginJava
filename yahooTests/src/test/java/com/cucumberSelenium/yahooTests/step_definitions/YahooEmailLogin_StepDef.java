package com.cucumberSelenium.yahooTests.step_definitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class YahooEmailLogin_StepDef {
	
	WebDriver driver = null;
	
	@Before
	public void setUp() {
		driver = new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}
	
	@After
	public void tearDown() {
		driver.quit();
	}
	
	
	@Given("^User opens the email login page$")
		public void userOpensEmailLoginPage() {
		System.out.println("Open browser and navigate to email login page");
		driver.get("http://mail.yahoo.com");
	}
	
	@When("^User enters loginid")
		public void userEntersLoginID() {
		System.out.println("User enters login-id into email app login page");
		driver.findElement(By.xpath("//*[@id=\'login-username\']")).sendKeys("horaciovinuesa@yahoo.com");
	}
	
    @And("^User clicks on Next button")
    	public void userClicksOnNextButton() {
    	System.out.println("User clicks on next button");
    	driver.findElement(By.xpath("//*[@id=\'login-signin\']")).click();
    }
	
    @And("^User enters password$")
    	public void userEntersPassword() {
    	System.out.println("User enters password at email app login page");
    	driver.findElement(By.xpath("//*[@id=\'login-passwd\']")).sendKeys("nomeacuerdo1");
    }
	
    @And("^User clicks on Sign-In button$")
    	public void userClicksOnSignIn() {
    	System.out.println("User clicks on sign in button at email app login page");
    	driver.findElement(By.xpath("//*[@id=\'login-signin\']")).click();
    }
	
    @When("^I validate the email app is opened correctly$")
    	public void validateCorrectLoginToEmail() {
    	System.out.println("Validation for correct login to email app from email app login page");
    	String expectedText = "Escribir";
    	String writeEmailText = driver.findElement(By.xpath("//*[@aria-label='Escribir']")).getText();
    	Assert.assertTrue(writeEmailText.equals(expectedText));
    }
	
    @When("^User can see that the title of the page is the correct one$")
    	public void verifyEmailPageTitle() {
    		String expectedTitle = "Yahoo - login";
    		String title = driver.getTitle();
    		Assert.assertTrue(title.equals(expectedTitle));
    }
	
}
