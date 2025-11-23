import userData from "../fixtures/users/userData";
import LoginPage from "../Pages/loginPage";
import DashboardPage from "../Pages/dashboardPage";
import MenuPage from "../Pages/menuPage";
import MyInfoPage from "../pages/myInfoPage";
import Chance from "chance";

const chance = new Chance();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe("Orange HRM Tests", () => {
    it.only("User Info Update", () => {
        loginPage.accessLoginPage();
        loginPage.loginWithAnyUser(
            userData.userSuccess.username,
            userData.userSuccess.password
        );
        dashboardPage.verifyDashboardPage();
        menuPage.accessMyInfo();
        myInfoPage.updateEmployeeFullName(
            chance.first(),
            chance.last(),
            chance.last()
        ); // Filling ramdom first, middle and last name using Chance
        myInfoPage.updateEmployeeIds(
            chance.integer({ min: 99999, max: 999999 }),
            chance.integer({ min: 99999, max: 999999 })
        ); // Filling ramdom employee ID and other ID using Chance
        myInfoPage.updateDriverLicense(
            chance.integer({ min: 99999999, max: 999999999 }),
            chance.exp_year() +
                "-" +
                chance.integer({ min: 1, max: 28 }) +
                "-" +
                chance.exp_month()
        ); // Filling ramdom driver license number and license expiry date using Chance
        myInfoPage.updateNationality(chance.integer({ min: 1, max: 193 })); // Selecting ramdom nationality using Chance
        myInfoPage.updateMaritalStatus(chance.integer({ min: 1, max: 3 })); // Selecting ramdom marital status using Chance
        myInfoPage.updateDateOfBirth(
            chance.year({ min: 1970, max: 2005 }) +
                "-" +
                chance.integer({ min: 1, max: 28 }) +
                "-" +
                chance.month({ raw: true }).numeric
        ); // Filling date of birth using Chance
        myInfoPage.updateGender(chance.integer({ min: 0, max: 1 })); // Selecting ramdom gender using Chance
        myInfoPage.clickSubmitButton(0); // Save Personal Details
        myInfoPage.updateBloodType(
            chance.integer({ min: 1, max: 8 }),
            chance.integer({ min: 1, max: 99 })
        ); // Selecting ramdom blood type and filling Test_Field using Chance
        myInfoPage.clickSubmitButton(1); // Save Custom Fields
    });
});
