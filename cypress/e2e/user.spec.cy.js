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
    invalidCredentialsErrorAlert: "div.oxd-alert-content",
  };

  it.only("User Info Update - Success", () => {
    cy.visit("/auth/login");
    cy.get(selectorList.usernameInput).type(userData.userSuccess.username);
    cy.get(selectorList.passwordInput).type(userData.userSuccess.password);
    cy.get(selectorList.loginButton).click();
    cy.location("pathname").should("eq", selectorList.indexPathname);
    // cy.get(selectorList.topBarHeader).contains("Dashboard"); // An unreliable way of using assert
    // cy.get(selectorList.topBarHeader).should("have.text", "Dashboard"); // Another unreliable way of using assert
    cy.get(selectorList.dashboardGrid).should("be.visible");
    cy.get(selectorList.myInfoButton).click();
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
