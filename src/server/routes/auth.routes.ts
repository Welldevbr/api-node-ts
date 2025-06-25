import { Router } from 'express'
import { AuthController } from '../controllers/auth'

const router = Router()

router.post('/sign-in', AuthController.signIn)

router.post('/sign-up', (req, res) => {
  res.send('sign up')
})

export { router as authRoutes }
