describe('Test Demoqa Checkbox section', () => {

    it('---------', () => {
        cy.visit('https://demoqa.com/checkbox')
        cy.get('[class*="icon-uncheck"]').should('exist').and('be.visible')
        cy.get('#tree-node-home').check({force: true}).should('be.checked')
        cy.get('#result span').first().should('have.text', 'You have selected :')
        cy.get('#tree-node-home').uncheck({force: true}).should('not.be.checked')

    })


        it.only('----------', () => {
         cy.visit('https://demoqa.com/checkbox')
         cy.get('[title="Expand all]').click()
         cy.get('#three-node ol li')
             .invoke('attr', 'class')
             .should('include', 'collapsed')
         cy.get('#three-node ol li')
             .invoke('attr', 'class')
             .should('include', 'expanded')
         cy.reload()
        })
})