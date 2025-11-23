import userData from "../fixtures/users/userData";
import LoginPage from "../Pages/loginPage";
import DashboardPage from "../Pages/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe("Login Orange HRM Tests", () => {
    it("Login - Fail", () => {
        loginPage.accessLoginPage();
        loginPage.loginWithAnyUser(
            userData.userFail.username,
            userData.userFail.password
        );
        loginPage.checkCredentialsErrorAlert();
    });
    it("Login - Success", () => {
        loginPage.accessLoginPage();
        loginPage.loginWithAnyUser(
            userData.userSuccess.username,
            userData.userSuccess.password
        );
        dashboardPage.verifyDashboardPage();
    });
});
