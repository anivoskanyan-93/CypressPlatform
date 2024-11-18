import {productLocators} from "../Locators/productLocators";
import {constants} from "../Locators/productLocators";

class ProductPage{

    open(){
        cy.visit(constants.url)
    }

    addCount(product) {
        cy.get(productLocators.productName).contains(product)
            .parent().find("increment")
    }

    checkCount(product, count) {
        cy.get(productLocators.productName).contains(product)
            .parent().find("quantity").should('have.value', count)

    }

    addProductToCart(product) {
        cy.get(productLocators.productName).contains(product)
            .parent().find("[type='button']").click()

    }

    clickOn(button) {
        cy.get(button).click()
    }








}

export default ProductPage;