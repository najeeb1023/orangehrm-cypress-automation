import { LoginPage } from "./Authentication/LoginPage"
import { LandingPage } from "./LandingPage"

describe('template spec', () => {

  let loginUser = new LoginPage()
  let landingPage = new LandingPage()

  beforeEach(() => {
    loginUser.visitWeb()
    loginUser.loginUser()

  })
  
  it('Go To Admin', () => {
    landingPage.goToAdmin()
  })

})