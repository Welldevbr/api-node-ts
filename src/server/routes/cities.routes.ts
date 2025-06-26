import { Router } from 'express'
import { CitiesController } from '../controllers/cities'

const router = Router()

router.post('/cities', CitiesController.create)

export { router as citiesRoutes }
