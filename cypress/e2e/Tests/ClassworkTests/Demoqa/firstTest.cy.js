describe('Test Demoqa Webtables section', () => {

    it('Test add user functionality', () => {
        cy.visit('https://demoqa.com/webtables')
        cy.get('#addNewRecordButton').click()
        cy.url().should('contain', 'demoqa')
        cy.get('.text-center').should('contain', 'Web Tables')
        //cy.contains('Add').click()
        cy.get('#firstName').type("Test first name")
        cy.get('#lastName').type("Test last name")
        cy.get('#userEmail').type("test@example.com")
        cy.get('#age').type("23")
        cy.get('#salary').type("1111111")
        cy.get('#department').type("sdfsds")
        cy.get('#submit').click()
        cy.get('.rt-table .rt-tbody .rt-tr-group:nth-child(4)').should('exist')

    })


    it('Test add user functionality', () => {
        cy.visit('https://demoqa.com/checkbox')
        cy.get('#three-node-home').check({force: true})


    })

    it('Delete first existing user', () => {
        cy.visit('https://demoqa.com/autimation-practice-form')
        cy.get('#gender-radio-1').click({force: true})


    })

    it.only('Check scroll to command', () => {
        cy.visit('https://demoqa.com/autimation-practice-form')
        cy.get('.-pageInfo').siblings('span').
            find('select').select('100').should('have.value', '100')
        cy.wait(3000)
        cy.scrollTo('bottom')

    })


});