
Feature: Login with invalid credentials

Scenario Outline: Login to the application and remove the product
And I read the file with the "<fileName>" and "<key>"
Given I open login page
And I click on the signIn button
And I enter the email address
And I enter the password in the password field
And I click on the signIn button of the form
Examples:
|fileName|key                   |
|profiles|estyInvalidCredentials|
