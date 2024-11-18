import loginPage from "../../Pages/PageObjects/loginPage";
describe('Test', () => {

    it('Test login with valid cred', () => {

        //create instance for class
        const loginPage = new LoginPage()

        loginPage.open()
        loginPage.login('Admin', 'admin123')
        cy.contains('Dashboard')

        //assert successful login
        loginPage.assertSuccessfulLogin()

        //assert failed login
        //loginPage.assertErrorMessage()
    });
})


