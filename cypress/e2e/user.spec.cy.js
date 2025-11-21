import userData from "../fixtures/users/userData";
import LoginPage from "../Pages/loginPage";
import DashboardPage from "../Pages/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe("Orange HRM Tests", () => {
    const selectorList = {
        // usernameInput: '[name="username"]',
        // passwordInput: '[name="password"]',
        // loginButton: "button.oxd-button",
        // indexPathname: "/web/index.php/dashboard/index",
        // topBarHeader: ".oxd-topbar-header-title",
        // dashboardGrid: ".orangehrm-dashboard-grid",
        myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        firstNameInput: 'input[name="firstName"]',
        middleNameInput: 'input[name="middleName"]',
        lastNameInput: 'input[name="lastName"]',
        // invalidCredentialsErrorAlert: "div.oxd-alert-content",
        genericInput: ".oxd-input--active",
        // dateInput: '[placeholder="yyyy-dd-mm"]',
        dateCloseButton: ".--close",
        genericDropdown: ".oxd-select-text--after",
        dropdowOption: ".oxd-select-option",
        radioInput: ".oxd-radio-input",
        checkboxInput:
            "#app div:nth-child(2) > div.oxd-checkbox-wrapper > label > input",
        submitButton: "[type='submit']",
    };

    it.only("User Info Update - Success", () => {
        loginPage.accessLoginPage();
        loginPage.loginWithAnyUser(
            userData.userSuccess.username,
            userData.userSuccess.password
        );
        dashboardPage.verifyDashboardPage();

        // ########################### ALTERNATIVE ASSERTS ###########################

        // cy.location("pathname").should("eq", selectorList.indexPathname);
        // cy.get(selectorList.topBarHeader).contains("Dashboard"); // An unreliable way of using assert
        // cy.get(selectorList.topBarHeader).should("have.text", "Dashboard"); // Another unreliable way of using assert
        // cy.get(selectorList.dashboardGrid).should("be.visible"); // A reliable way of using assert in this case

        // ########################### IN PROGRESS ###########################

        // cy.get(selectorList.myInfoButton).click();
        // cy.get(selectorList.firstNameInput).clear().type("Tommy");
        // cy.get(selectorList.middleNameInput).clear().type("Lee");
        // cy.get(selectorList.lastNameInput).clear().type("Jones");
        // cy.get(selectorList.genericInput).eq(3).clear().type("Tolee"); // Nickname
        // cy.get(selectorList.genericInput).eq(4).clear().type("123456"); // Employee Id
        // cy.get(selectorList.genericInput).eq(5).clear().type("654321"); // Other Id
        // cy.get(selectorList.genericInput).eq(6).clear().type("111222333"); // Driver's License Number
        // cy.get(selectorList.genericInput)
        //     .eq(7)
        //     .clear({ force: true })
        //     .type("2030-01-06"); // License Expiry Date
        // cy.get(selectorList.dateCloseButton).click(); // Close the date picker
        // cy.get(selectorList.genericInput).eq(8).clear().type("00000"); // SSN Number
        // cy.get(selectorList.genericInput).eq(9).clear().type("11111"); // SIN Number
        // cy.get(selectorList.genericDropdown).eq(0).click(); // Nationality
        // cy.get(selectorList.dropdowOption).eq(26).click(); // Select "Brazilian"
        // cy.get(selectorList.genericDropdown).eq(1).click(); // Marital Status
        // cy.get(selectorList.dropdowOption).eq(2).click(); // Select "Married"
        // cy.get(selectorList.genericInput).eq(11).clear().type("1981-10-08"); // Birthday
        // cy.get(selectorList.radioInput).eq(1).click(); // Select "Female"
        // cy.get(selectorList.genericInput).eq(12).clear().type("Navy"); // Military Service
        // // cy.get(selectorList.checkboxInput).eq(0); // Select "Smoker"
        // cy.get(selectorList.checkboxInput).eq(0).uncheck(); // Unselect "Smoker"
        // cy.get(selectorList.submitButton).eq(0).click(); // Save Button - Personal Details
        // cy.get("body").should("contain.text", "Successfully Updated"); // Success Alert
        // cy.get(".oxd-toast-close");
        // cy.get(selectorList.genericDropdown).eq(2).click(); // Blood Type
        // cy.get(selectorList.dropdowOption).eq(6).click(); // Select "O-"
        // cy.get(selectorList.genericInput).eq(13).clear().type("5555"); // Test_Field
        // cy.get(selectorList.submitButton).eq(0).click(); // Save Button - Custom Fields
        // cy.get("body").should("contain.text", "Successfully Updated"); // Success Alert
        // cy.get(".oxd-toast-close");
    });
    it("Login - Fail", () => {
        loginPage.accessLoginPage();
        loginPage.loginWithAnyUser(
            userData.userFail.username,
            userData.userFail.password
        );
        loginPage.checkCredentialsErrorAlert();
    });
});
