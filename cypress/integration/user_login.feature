Feature: Login to Application

   Scenario Outline: Login to the sendoso application with the valid credentials.
     And I read the file with the "<fileName>" and "<key>"
     Given I open login page
     And I click on the signIn button
     And I enter the email address
     And I enter the password in the password field
     And I click on the signIn button of the form
     Then  verify user is on the landing page
     Examples:
       |fileName|key                 |
       |profiles|estyLoginCredentials|
