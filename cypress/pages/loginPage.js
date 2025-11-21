class LoginPage {
    selectorsList() {
        const selectors = {
            usernameInput: '[name="username"]',
            passwordInput: '[name="password"]',
            loginButton: '[type="submit"]',
            invalidCredentialsErrorAlert: "div.oxd-alert-content",
        };

        return selectors;
    }

    accessLoginPage() {
        cy.visit("/auth/login");
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameInput).type(username);
        cy.get(this.selectorsList().passwordInput).type(password);
        cy.get(this.selectorsList().loginButton).click();
    }

    checkCredentialsErrorAlert() {
        cy.get(this.selectorsList().invalidCredentialsErrorAlert).should(
            "have.class",
            "oxd-alert-content--error"
        );
    }
}

export default LoginPage;
