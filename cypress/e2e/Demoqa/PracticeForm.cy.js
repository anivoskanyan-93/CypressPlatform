import 'cypress-file-upload'

describe('Test Demoqa Practice Form section', () => {

    it('---------', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#dateOfBirthInput').click()
        cy.get('[class*="month-select"]').select('November')
        cy.get('[class*= "day--025"]').click()
//     cy.get('uploadPicture').attachFile('/testFile.jpg')
        cy.scrollTo('bottom')
    })
})