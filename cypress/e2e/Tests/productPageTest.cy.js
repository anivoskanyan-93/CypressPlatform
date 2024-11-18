import ProductPage from './ProductPage';
import CartPage from "../Pages/cartPage";
import {constants, productLocators} from "../Locators/productLocators";

describe('Test ', () => {

    it('---', () => {
        const productPage = new ProductPage();
        const cartPage = new CartPage();

        productPage.open()
        productPage.addCount(constants.brocolli)
        productPage.addCount(constants.carrot)
        productPage.checkCount(constants.brocolli, '2')
        productPage.checkCount(constants.carrot, '2')
        productPage.addProductToCart(constants.brocolli)
        productPage.clickOn(productLocators.cartIcon)
        cartPage.assertCartIsOpned()
        cartPage.assertProductInCart(constants.brocolli)


    });
})