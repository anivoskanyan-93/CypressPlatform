class LoginPage {
    elements = {
        loginButton: 'dsdsds',
        usernameField: '[name="username"]',
        passwordField: '[name="password"]',
        loginButon: '[type="submit"]',
        errorMessage: '.oxd-alert.oxd-alert--error'
    }

    open(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    typeText(selector, text) {
        cy.get(selector).type(text)
    }

    clickButton(selector) {
        cy.get(selector).click()
    }

    login(username, password){
        //cy.get(this.elements.usernameField).type(username)
        // cy.get(this.elements.passwordField).type(password)
        this.typeText(this.elements.usernameField, username)
        this.typeText(this.elements.passwordField, password)
        //cy.get(this.elements.loginButton).click()
        this.clickButton(this.elements.loginButton)
    }

    assertSuccessfulLogin(){
        cy.contains('Dashboard').should('be.visible');
    }

    assertErrorMessage(){
    cy.get(this.elements.errorMessage).should('be.visible');
    }
}

export default LoginPage
