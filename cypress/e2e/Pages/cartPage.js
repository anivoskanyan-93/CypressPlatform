import {cartLocators} from "../Locators/cartLocators";


class CartPage {
    assertCartIsOpned(){
        cy.get(cartLocators.cart).should("exist")
            .and("should.be.visible")
    }

    assertProductInCart(product){
        cy.contains(product).should("exist")
            .and("be.visible")
    }

}


export default CartPage