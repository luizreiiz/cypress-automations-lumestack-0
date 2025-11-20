class DashboardPage {
    selectorList() {
        const selectors = {
            indexPathname: "/web/index.php/dashboard/index",
            dashboardGrid: ".orangehrm-dashboard-grid",
        };

        return selectors;
    }

    verifyDashboardPage() {
        cy.location("pathname").should("eq", this.selectorList().indexPathname);
        cy.get(this.selectorList().dashboardGrid).should("be.visible");
    }
}

export default DashboardPage;
