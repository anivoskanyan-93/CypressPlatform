import {productLocators} from "../../fixtures/locators/productLocators";
import {constants} from "../../fixtures/locators/productLocators";

class ProductPage {
    open() {
        cy.visit(constants.url)
    }

    addCount(product) {
        cy.get(productLocators.productName).contains(product)
            .parent().find(".increment").click()
    }

    checkCount(product, count) {
        cy.get(productLocators.productName).contains(product)
            .parent().find('.quianity').should('have.value', count)
    }

    addProductToCart(product) {
        cy.get(productLocators.productName).contains(product)
            .parent().find('[type="button"').click()
    }

}

export default ProductPage