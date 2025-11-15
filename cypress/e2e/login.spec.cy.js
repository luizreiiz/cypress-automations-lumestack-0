describe("Orange HRM Tests", () => {
  const selectorList = {
    usernameInput: '[name="username"]',
    passwordInput: '[name="password"]',
    loginButton: "button.oxd-button",
    topBarHeader: ".oxd-text--h6",
    invalidCredentialsErrorAlert: "div.oxd-alert-content",
    indexPathname: "/web/index.php/dashboard/index",
  };

  it("Login - Success", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(selectorList.usernameInput).type("Admin");
    cy.get(selectorList.passwordInput).type("admin123");
    cy.get(selectorList.loginButton).click();
    cy.location("pathname").should("eq", selectorList.indexPathname);
    cy.get(selectorList.topBarHeader).contains("Dashboard"); // A way to assert
    cy.get(selectorList.topBarHeader).should("have.text", "Dashboard"); // Another way to assert
  });
  it("Login - Fail", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(selectorList.usernameInput).type("Fail");
    cy.get(selectorList.passwordInput).type("Fail");
    cy.get(selectorList.loginButton).click();
    cy.get(selectorList.invalidCredentialsErrorAlert).should(
      "have.class",
      "oxd-alert-content--error"
    );
  });
});
