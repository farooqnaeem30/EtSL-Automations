import { Given, When, Then, And,Before } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './steps/loginPage'

Before(() => {
  cy.viewport(1920, 1080)
});

Given('I open login page', () => {
  LoginPage.visic()
  cy.log(URL)
})

When(/^I read the file with the "([^"]*)" and "([^"]*)"$/, (fileName,key)=> {
    let keyValues={};
     LoginPage.readFileJson(fileName,key)

});
Given(/^I enter the username in the username field on the login page$/, function () {
    LoginPage.enterUserName()
});

Given(/^I enter the password in the password field on the login page$/, function () {
    LoginPage.enterPassword()
});
Given(/^I click on the signIn button$/, function () {
   LoginPage.clickSignInButton()
});
Given(/^I click on the register button$/, function () {
  LoginPage.clickRegisterButton()
});

Given(/^I enter the email address$/, function () {
 LoginPage.enterEmailAddress()
});

Given(/^I enter the password in the password field$/, function () {
    LoginPage.enterPassword()
});

Given(/^I click on the signIn button of esy site$/, function () {
    LoginPage.clickSignInButton()
});
Given(/^I enter the first name for registeration$/, function () {
    LoginPage.enterFirstName()
});
Given(/^I click on the register button of esy site$/, function () {
    LoginPage.clickRegisterFormButton()
});
Given(/^I click on the register button of esy site to verify its being disabled$/, function () {
    LoginPage.verifyDisableButton()
});
Given(/^I click on the signIn button of the form$/, function () {
  LoginPage.clickSignInButtonForm()
});

Then(/^verify user is on the landing page$/, function () {
    LoginPage.verifyLandingPage()
});
