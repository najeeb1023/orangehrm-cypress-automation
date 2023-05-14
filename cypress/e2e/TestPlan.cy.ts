import { LoginPage } from "./Authentication/LoginPage"
import { AdminPage } from "./Authentication/Pages/AdminPage"
import { LandingPage } from "./Authentication/Pages/LandingPage"

describe('template spec', () => {

  let loginUser = new LoginPage()
  let landingPage = new LandingPage()
  let adminPage = new AdminPage()

  beforeEach(() => {
    loginUser.visitWeb()
    loginUser.loginUser()

  })
  
  it('Go To Admin', () => {
    landingPage.goToAdmin()
    adminPage.getDataFromAdminTable()
    console.log('Test')

  })

})