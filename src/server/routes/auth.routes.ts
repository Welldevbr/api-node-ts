import { Router } from 'express'
import { AuthController } from '../controllers/auth'
import { signUpValidation } from '../controllers/auth/signUp'
import { signInValidation } from '../controllers/auth/signIn'

const router = Router()

router.post('/sign-up', signUpValidation, AuthController.signUp)
router.post('/sign-in', signInValidation, AuthController.signIn)

export { router as authRoutes }
