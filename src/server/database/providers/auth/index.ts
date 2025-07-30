import * as signIn from './signIn'
import * as signUp from './signUp'

export const AuthProvider = {
  ...signUp,
  ...signIn
}
