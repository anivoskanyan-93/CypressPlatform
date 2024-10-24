describe('Test Demoqa Practice Form section', () => {

    it('---------', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#dateOfBirthInput').click()

    })
})