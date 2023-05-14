import { LoginPage } from "./Authentication/LoginPage"

describe('template spec', () => {

  let loginUser = new LoginPage()

  beforeEach(() => {
    loginUser.visitWeb()

  })

  it('Login User', () => {
    loginUser.loginUser()

  })

})