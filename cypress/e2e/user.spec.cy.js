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
    genericDropdown: ".oxd-select-text-input",
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
    cy.get(selectorList.genericInput).eq(6).clear().type("1981-10-08"); // License Expiry Date
    cy.get(selectorList.dateCloseButton).click(); // Close the date picker
    cy.get(selectorList.genericDropdown).eq(0); // Nationality // ❓I don't discovery how to pick a selector item
    cy.get(selectorList.genericDropdown).eq(1); // Marital Status // ❓I don't discovery how to pick a selector item
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
