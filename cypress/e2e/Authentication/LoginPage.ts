export class LoginPage {

    username = 'Admin'
    password = 'admin123'

    loginLocators = {
        usernameField:(username: string) => cy.get("input[name='username']").type(username),
        passwordField:(password: string) => cy.get("input[name='password']").type(password),
        loginButton:() => cy.get("button[type='submit']")
    }

    visitWeb() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    loginUser() {
        this.loginLocators.usernameField(this.username)
        this.loginLocators.passwordField(this.password)
        this.loginLocators.loginButton().click()

    }


}