$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/horace/Documents/eclipse-workspace/yahooTests/src/main/java/com/cucumberSelenium/yahooTests/yahooEmailLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Horacio Vinuesa"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "Yahoo register and login from email app",
  "description": "I want to be able to register and login to the email service through the email app login page",
  "id": "yahoo-register-and-login-from-email-app",
  "keyword": "Feature",
  "tags": [
    {
      "line": 20,
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "duration": 5686594689,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Login to email app with regular account",
  "description": "",
  "id": "yahoo-register-and-login-from-email-app;login-to-email-app-with-regular-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User opens the email login page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User enters loginid",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User enters password",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User clicks on Sign-In button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I validate the email app is opened correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "YahooEmailLogin_StepDef.userOpensEmailLoginPage()"
});
formatter.result({
  "duration": 7395399140,
  "status": "passed"
});
formatter.match({
  "location": "YahooEmailLogin_StepDef.userEntersLoginID()"
});
formatter.result({
  "duration": 103857290,
  "status": "passed"
});
formatter.match({
  "location": "YahooEmailLogin_StepDef.userClicksOnNextButton()"
});
formatter.result({
  "duration": 243788107,
  "status": "passed"
});
formatter.match({
  "location": "YahooEmailLogin_StepDef.userEntersPassword()"
});
formatter.result({
  "duration": 1915642881,
  "status": "passed"
});
formatter.match({
  "location": "YahooEmailLogin_StepDef.userClicksOnSignIn()"
});
formatter.result({
  "duration": 14540614586,
  "status": "passed"
});
formatter.match({
  "location": "YahooEmailLogin_StepDef.validateCorrectLoginToEmail()"
});
formatter.result({
  "duration": 77108651,
  "status": "passed"
});
formatter.after({
  "duration": 814000458,
  "status": "passed"
});
formatter.before({
  "duration": 2446467820,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify the login page title from the email app",
  "description": "",
  "id": "yahoo-register-and-login-from-email-app;verify-the-login-page-title-from-the-email-app",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User opens the email login page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User can see that the title of the page is the correct one",
  "keyword": "Then "
});
formatter.match({
  "location": "YahooEmailLogin_StepDef.userOpensEmailLoginPage()"
});
formatter.result({
  "duration": 6984982746,
  "status": "passed"
});
formatter.match({
  "location": "YahooEmailLogin_StepDef.verifyEmailPageTitle()"
});
formatter.result({
  "duration": 4103346,
  "status": "passed"
});
formatter.after({
  "duration": 571671411,
  "status": "passed"
});
});