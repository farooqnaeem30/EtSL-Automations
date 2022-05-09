const sign_button='.select-signin'
const register_button='.select-register'
const heading='h1[id="join-neu-overlay-title"]'
const email_address='#join_neu_email_field'
const first_name='input[name="first_name"]'
const password_field='#join_neu_password_field'
const sign_in='button[name="submit_attempt"]'
const register_button_userform='button[value="register"]'
const sign_in_form='button[value="sign-in"]'
const landing_page_url='a[href*="hp_name_link"]'

class LoginPage {
 constructor() {
   this.dataSet = null
 }

  static visic() {
    cy.clearLocalStorage()
    cy.clearCookies()
    cy.visit(this.data.url)
  }

  static submit() {
    cy.get(sign_in).click()
  }

   static readFileJson(fileName, key) {
    cy.readFile("cypress/fixtures/profiles.json").then(jsonObj => {
      this.data = jsonObj[key]
    });
  }

  static clickSignInButton(){
     cy.get(sign_button).click()
  }

  static clickRegisterButton(){
     cy.get(register_button).click()
  }

    static enterPassword(){
        cy.get(password_field).type(this.data.password)
    }

    static enterEmailAddress() {
        cy.get(heading, { timeout: 20000 }).should('be.visible')
        cy.get(email_address).type(this.data.email,{delay:50})
    }


    static enterFirstName() {
     cy.get(first_name).type(this.data.firstName)
    }

    static clickRegisterFormButton(){
     cy.get(register_button_userform).click()
    }

    static verifyDisableButton() {
        cy.get(register_button_userform).should('be.disabled')
    }

    static clickSignInButtonForm() {
        cy.get(sign_in_form).click()
    }

    static verifyLandingPage(){
        cy.get(landing_page_url).should('have.length',2)
    }
}

export default LoginPage
