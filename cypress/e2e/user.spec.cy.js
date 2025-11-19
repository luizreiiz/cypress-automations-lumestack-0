import userData from "../fixtures/users/userData.json";

describe("Orange HRM Tests", () => {
  const selectorList = {
    usernameInput: '[name="username"]',
    passwordInput: '[name="password"]',
    loginButton: "button.oxd-button",
    indexPathname: "/web/index.php/dashboard/index",
    // topBarHeader: ".oxd-topbar-header-title",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameInput: 'input[name="firstName"]',
    middleNameInput: 'input[name="middleName"]',
    lastNameInput: 'input[name="lastName"]',
    invalidCredentialsErrorAlert: "div.oxd-alert-content",
    genericInput: ".oxd-input--active",
    // dateInput: '[placeholder="yyyy-dd-mm"]',
    dateCloseButton: ".--close",
    genericDropdown: ".oxd-select-text--after",
    submitButton: "[type='submit']",
  };

  it.only("User Info Update - Success", () => {
    cy.visit("/auth/login");
    cy.get(selectorList.usernameInput).type(userData.userSuccess.username);
    cy.get(selectorList.passwordInput).type(userData.userSuccess.password);
    cy.get(selectorList.loginButton).click();
    cy.location("pathname").should("eq", selectorList.indexPathname);
    // cy.get(selectorList.topBarHeader).contains("Dashboard"); // An unreliable way of using assert
    // cy.get(selectorList.topBarHeader).should("have.text", "Dashboard"); // Another unreliable way of using assert
    cy.get(selectorList.dashboardGrid).should("be.visible"); // A reliable way of using assert in this case
    cy.get(selectorList.myInfoButton).click();
    cy.get(selectorList.firstNameInput).clear().type("Stanley");
    cy.get(selectorList.middleNameInput).clear().type("Michael");
    cy.get(selectorList.lastNameInput).clear().type("Moore");
    cy.get(selectorList.genericInput).eq(3).clear().type("123456"); // Employee Id
    cy.get(selectorList.genericInput).eq(4).clear().type("654321"); // Other Id
    cy.get(selectorList.genericInput).eq(5).clear().type("111222333"); // Driver's License Number
    cy.get(selectorList.genericInput).eq(6).clear().type("2030-06-01"); // License Expiry Date
    cy.get(selectorList.dateCloseButton).click(); // Close the date picker
    cy.get(selectorList.genericDropdown).eq(0).click(); // Nationality
    cy.get(".oxd-select-option").eq(26).click(); // Select "Brazilian"
    cy.get(selectorList.genericDropdown).eq(1).click(); // Marital Status
    cy.get(".oxd-select-option").eq(2).click(); // Select "Married"
    cy.get(selectorList.genericInput).eq(8).clear().type("1981-08-10"); // Birthday
    cy.get(".oxd-radio-input").eq(1).click(); // Select "Female"
    cy.get(selectorList.submitButton).eq(0).click(); // Save Button - Personal Details
    cy.get("body").should("contain.text", "Successfully Updated"); // Success Alert
    cy.get(".oxd-toast-close");
    cy.get(selectorList.genericDropdown).eq(2).click(); // Blood Type
    cy.get(".oxd-select-option").eq(6).click(); // Select "O-"
    cy.get(selectorList.genericInput).eq(9).clear().type("5555"); // Test_Field
    cy.get(selectorList.submitButton).eq(0).click(); // Save Button - Custom Fields
    cy.get("body").should("contain.text", "Successfully Updated"); // Success Alert
    cy.get(".oxd-toast-close");
  });
  it("Login - Fail", () => {
    cy.visit("/auth/login");
    cy.get(selectorList.usernameInput).type(userData.userFail.username);
    cy.get(selectorList.passwordInput).type(userData.userFail.password);
    cy.get(selectorList.loginButton).click();
    cy.get(selectorList.invalidCredentialsErrorAlert).should(
      "have.class",
      "oxd-alert-content--error"
    );
  });
});
