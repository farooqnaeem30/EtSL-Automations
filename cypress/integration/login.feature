@feature-tag
Feature: Login to Application

   Scenario Outline: Signup with the valid credentials
      And I read the file with the "<fileName>" and "<key>"
      Given I open login page
      And I click on the signIn button
      And I click on the register button
      And I enter the email address
      And I enter the first name for registeration
      And I enter the password in the password field
      And I click on the register button of esy site
    Examples:
        |fileName|key            |
        |profiles|estyCredentials|

  Scenario Outline: Not able to register without information.
    And I read the file with the "<fileName>" and "<key>"
    Given I open login page
    And I click on the signIn button
    And I click on the register button
    And I click on the register button of esy site to verify its being disabled
    Examples:
      |fileName|key            |
      |profiles|estyCredentials|
