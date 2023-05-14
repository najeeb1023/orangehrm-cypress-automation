export class LandingPage {
    

    landingPageLocators = {
        adminBtn:() => cy.get('body').contains('Admin')
    }

    goToAdmin() {
        this.landingPageLocators.adminBtn().click()
    }

}