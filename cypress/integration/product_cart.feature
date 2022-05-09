Feature: Login to Application

#  Scenario Outline: Adding up the product in the basket
#    And I read the file with the "<fileName>" and "<key>"
#    Given I open login page
#    And I click on the signIn button
#    And I enter the email address
#    And I enter the password in the password field
#    And I click on the signIn button of the form
#    Then  verify user is on the landing page
#    And I click on the vintage tab
#    And I select the product from the vintage tab
#    And I click on add to basket button
#    Examples:
#      |fileName|key                 |
#      |profiles|estyLoginCredentials|


  Scenario Outline: Login to the application and remove the product
    And I read the file with the "<fileName>" and "<key>"
    Given I open login page
    And I click on the signIn button
    And I enter the email address
    And I enter the password in the password field
    And I click on the signIn button of the form
    Then  verify user is on the landing page
    And I click on the basket button
    And I remove the product from the basket
    Then verify the product is being removed from the cart
    Examples:
      |fileName|key                 |
      |profiles|estyLoginCredentials|
