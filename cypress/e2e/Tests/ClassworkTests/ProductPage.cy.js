import ProductPage from "../../Pages/PageObjects/productPage";
import {constants} from "../Constants";
describe('Test ', () => {


    it('---', () => {

        const productPage = new ProductPage()
        productPage.open()
        productPage.addCount(constants.brocolli)
        productPage.checkCount(constants.brocolli, '2')
        productPage.addProductToCart(constants.brocolli)
        //navigate to cart
        // assert product name is visible in cart

    });
})


