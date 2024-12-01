const orangehrmLocators = {
    username: '[name="username"]',
    password: '[name="password"]',
    loginButton: '[type="submit"]',
    userProfileImage: 'img[alt="profile picture"]',
    firstNameOnMyInfo: '[name="firstName"]',
    saveButton: '.oxd-form-actions > [type="submit"]:nth-child(1)'
}

const constants = {
    url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    username: "Admin",
    password: "admin123",
    tabName: "My Info",
    newName: "Ani"
}

export {orangehrmLocators, constants}