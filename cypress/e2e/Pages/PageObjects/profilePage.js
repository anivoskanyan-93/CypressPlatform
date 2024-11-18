class ProfilePage {

    assertWelcomeHeader(username) {
        cy.contains('Welcome ' + username).should('be.visible')

    }

    assertLogOutVisible() {
        cy.contains('Log out').should('be.visible')
    }
}

export default ProfilePage