#Author: Horacio Vinuesa
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

@sanity
Feature: Yahoo register and login from email app
  I want to be able to register and login to the email service through the email app login page

  @smoke
  Scenario: Login to email app with regular account
    Given User opens the email login page
    When User enters loginid
    And User clicks on Next button
    And User enters password
    And User clicks on Sign-In button
    Then I validate the email app is opened correctly
    
  @smoke
  Scenario: Verify the login page title from the email app
    Given User opens the email login page
    Then User can see that the title of the page is the correct one 
