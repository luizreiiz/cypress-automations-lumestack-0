class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameInput: 'input[name="firstName"]',
            middleNameInput: 'input[name="middleName"]',
            lastNameInput: 'input[name="lastName"]',
            genericInput: ".oxd-input--active",
            dateCloseButton: ".--close",
            genericDropdown: ".oxd-select-text--after",
            dropdownOption: ".oxd-select-option",
            radioInput: ".oxd-radio-input",
            submitButton: "[type='submit']",
        };

        return selectors;
    }

    updateEmployeeFullName(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameInput).clear().type(firstName);
        cy.get(this.selectorsList().middleNameInput).clear().type(middleName);
        cy.get(this.selectorsList().lastNameInput).clear().type(lastName);
    }
    updateEmployeeIds(employeeId, otherId) {
        cy.get(this.selectorsList().genericInput)
            .eq(3)
            .clear()
            .type(employeeId);
        cy.get(this.selectorsList().genericInput).eq(4).clear().type(otherId);
    }
    updateDriverLicense(driverLicenseNumber, licenseExpiryDate) {
        cy.get(this.selectorsList().genericInput)
            .eq(5)
            .clear()
            .type(driverLicenseNumber);
        cy.get(this.selectorsList().genericInput)
            .eq(6)
            .clear({ force: true })
            .type(licenseExpiryDate);
        cy.get(this.selectorsList().dateCloseButton).click();
    }
    updateNationality(nationality) {
        cy.get(this.selectorsList().genericDropdown).eq(0).click();
        cy.get(this.selectorsList().dropdownOption).eq(nationality).click();
    }
    updateMaritalStatus(maritalStatus) {
        cy.get(this.selectorsList().genericDropdown).eq(1).click();
        cy.get(this.selectorsList().dropdownOption).eq(maritalStatus).click();
    }
    updateDateOfBirth(dateOfBirth) {
        cy.get(this.selectorsList().genericInput)
            .eq(8)
            .clear({ force: true })
            .type(dateOfBirth);
        cy.get(this.selectorsList().dateCloseButton).click();
    }
    updateGender(gender) {
        cy.get(this.selectorsList().radioInput).eq(gender).click();
    }
    updateBloodType(bloodType, Test_Field) {
        cy.get(this.selectorsList().genericDropdown).eq(2).click();
        cy.get(this.selectorsList().dropdownOption).eq(bloodType).click();
        cy.get(this.selectorsList().genericInput)
            .eq(9)
            .clear({ force: true })
            .type(Test_Field);
    }
    clickSubmitButton(index) {
        cy.get(this.selectorsList().submitButton).eq(index).click();
    }
}
export default MyInfoPage;
