class Cart {

    elements = {
        cartLabel: '#cartur'

    }

    add(prodName) {
    cy.contains(prodName).click()
    cy.contains('Add to cart').click()
    }

    assertAlertOpens() {
    cy.on('window:alert', (text) => {
        expect(text).to.equal('Product added');
        })
    }

    openCart() {
    cy.get(this.elements.cartLabel).click({force: true})
    }

    assertProductsInCart(productName) {
    cy.contains(productName).should('exist')
    }

}

export default Cart