export class AdminPage {


    adminLocators = {
        adminPageUserTable:() => cy.get('div[class="oxd-table-body"]')
    }
    
    getDataFromAdminTable() {
        this.adminLocators.adminPageUserTable().contains('David.Morris')
        this.adminLocators.adminPageUserTable().contains('Ehioze.Ebo')
    }

}

