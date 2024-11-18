import LoginPage from './LoginPage';

describe('Test', () => {

    it('Test login with valid credentials', () => {
                //create instance for class
        const loginPage = new LoginPage()
        loginPage.open();
        //login
        loginPage.login('Admin', 'admin123');
        //assert successful login
        //loginPage.assertSuccessfulLogin();
        //assert invalid login
        loginPage.assertErrorMessage();

})
})