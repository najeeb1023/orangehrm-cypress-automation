export class LandingPage {
    

    landingPageLocators = {
        adminBtn:() => cy.get('body').contains('admin')
    }

    goToAdmin() {
        this.landingPageLocators.adminBtn().click()
    }

}