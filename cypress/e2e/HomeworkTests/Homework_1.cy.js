describe('Test Demoqa Practice Form', () => {

    it('Test add user functionality', () => {
        cy.visit('https://demoqa.com/automation-practice-form ')
        cy.url().should('contain', 'demoqa')
        cy.get('#firstName').type("Test first name")
        cy.get('#lastName').type("Test last name")
        cy.get('#userEmail').type("test@example.com")
        cy.contains('Female').click()
        cy.get('#userNumber').type("3749434977")
        cy.contains('Sports').click()
        cy.get('#currentAddress').type("Test Address")
        cy.get('#submit').click()
        cy.get('.modal-title').should('contain', 'Thanks for submitting the form')
        cy.get('#closeLargeModal').click({force: true})
        cy.get('.text-center').should('contain', 'Practice Form')
    })

})

