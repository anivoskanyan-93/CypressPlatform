import {constants} from "../../Locators/orangehrmLocators";
import {orangehrmLocators} from "../../Locators/orangehrmLocators";

class OrangeHrm {

    open(){
        cy.visit(constants.url)
    }

   changeText(selector, text) {
        cy.get(selector).clear().type(text)
    }

   clickOn(selector) {
        cy.get(selector).click()
    }

    login(username, password) {
        cy.get(orangehrmLocators.username).type(username)
        cy.get(orangehrmLocators.password).type(password)
        this.clickOn(orangehrmLocators.loginButton)
    }

    navigateToTab(tabName) {
        cy.contains(tabName).click()
    }

    assertLoginIsSuccessful() {
        cy.get(orangehrmLocators.userProfileImage).should("exist").and("be.visible")
    }

    assertSuccessAlertOpens() {
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Success')
        })
    }

    assertFieldContains(selector, text) {
        cy.get(selector).should("have.value", text)
    }

}

export default OrangeHrm