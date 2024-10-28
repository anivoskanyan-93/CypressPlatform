import LoginForm from "../PageObjects/loginForm";
import ProfilePage from "../PageObjects/profilePage";
import Cart from "../PageObjects/cart";
describe('Test Demoblase', () => {

    it('Homework 3', () => {
        //create instance for class
        const loginForm = new LoginForm()
        //open login form
        loginForm.open()
        //fill out login form
        loginForm.login('Anitest', 'test123')
        //assert login modal has closed
        loginForm.assertLoginModalIsClosed()

       const profilePage = new ProfilePage()

        //assert The header displays "Welcome «username»"
       profilePage.assertWelcomeHeader('Anitest')
        //Verify that "Log Out" is visible post-login
       profilePage.assertLogOutVisible()

        const cart = new Cart()

        //Add product to cart
        let product = 'Nexus 6';
        cart.add(product)
        cart.assertAlertOpens()
        //Navigate to cart
        cart.openCart()
        //Check if product is added
        cart.assertProductsInCart(product)


    });
})


