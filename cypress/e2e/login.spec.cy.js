describe("Orange HRM Tests", () => {
  it("Login - Success", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get("button.oxd-button").click();
    cy.location("pathname").should("eq", "/web/index.php/dashboard/index");
    cy.get(".oxd-text--h6").contains("Dashboard"); // A way to assert
    cy.get(".oxd-text--h6").should("have.text", "Dashboard"); // Another way to assert
  });
  it("Login - Fail", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("Fail");
    cy.get('[name="password"]').type("Fail");
    cy.get("button.oxd-button").click();
    cy.get("div.oxd-alert-content").should(
      "have.class",
      "oxd-alert-content--error"
    );
  });
});
