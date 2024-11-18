describe('Test Alerts section', () => {

    it('Test alerts functionality', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.get('#alertButton').click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Text');
        })


    })
})