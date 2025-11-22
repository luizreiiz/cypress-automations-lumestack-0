import userData from "../fixtures/users/userData";
import LoginPage from "../Pages/loginPage";
import DashboardPage from "../Pages/dashboardPage";
import MenuPage from "../Pages/menuPage";
import MyInfoPage from "../pages/myInfoPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe("Orange HRM Tests", () => {
    it.only("User Info Update - Success", () => {
        loginPage.accessLoginPage();
        loginPage.loginWithAnyUser(
            userData.userSuccess.username,
            userData.userSuccess.password
        );
        dashboardPage.verifyDashboardPage();
        menuPage.accessMyInfo();
        myInfoPage.updateEmployeeFullName("Mary", "Jane", "Watson");
        myInfoPage.updateEmployeeIds("123456", "654321");
        myInfoPage.updateDriverLicense("111222333", "2030-01-06");
        myInfoPage.updateNationality(27); // Select "English"
        myInfoPage.updateMaritalStatus(2); // Select "Married"
        myInfoPage.updateDateOfBirth("1999-03-02");
        myInfoPage.updateGender(1); // Select "Female"
        myInfoPage.clickSubmitButton(0);
        myInfoPage.updateBloodType(3, "5555"); // Select "O-" and fill Test_Field
        myInfoPage.clickSubmitButton(1);
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
