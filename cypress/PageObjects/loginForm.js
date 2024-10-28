class LoginForm {
    elements = {
        loginLabel: '#login',
        usernameField: '#loginusername',
        passwordField: '#loginpassword',
        loginButton: '[onclick="logIn()"]',
        loginModal: '#logInModal'
    }

    open() {
        cy.visit('https://demoblaze.com/index.html')
        cy.contains('Log in').click({force: true})
    }

    typeText(selector, text) {
        cy.get(selector).type(text, {force: true})
    }

    clickButton(selector) {
        cy.get(selector).click({force: true})
    }

    login(username, password) {
        this.typeText(this.elements.usernameField, username)
        this.typeText(this.elements.passwordField, password)
        this.clickButton(this.elements.loginButton)
    }

    assertLoginModalIsClosed() {
        cy.get(this.elements.loginModal).should('have.attr', 'aria-hidden', 'true');
    }
}

export default LoginForm
