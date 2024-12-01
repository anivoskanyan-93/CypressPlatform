import {constants, orangehrmLocators} from "../../Locators/orangehrmLocators";
import OrangeHrm from "../../Pages/PageObjects/orangehrmActions";


describe('My Info tab test', () => {

    it('My Info tab edit functionality test', () => {
        const orangeHrm = new OrangeHrm()

        orangeHrm.open()
        orangeHrm.login(constants.username, constants.password)
        orangeHrm.assertLoginIsSuccessful()
        orangeHrm.navigateToTab(constants.tabName)
        orangeHrm.changeText(orangehrmLocators.firstNameOnMyInfo, constants.newName)
        orangeHrm.clickOn(orangehrmLocators.saveButton)
        orangeHrm.assertSuccessAlertOpens()
        orangeHrm.assertFieldContains(orangehrmLocators.firstNameOnMyInfo, constants.newName)
    });
})

