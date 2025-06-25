import * as signIn from './sign-in'
import * as signUp from './sign-up'

export const AuthController = {
  ...signIn,
  ...signUp
}
