import { Router } from 'express'
import { CitiesController } from '../controllers/cities'

const router = Router()

router.post('/cities', CitiesController.createValidation, CitiesController.create)
router.get('/cities', CitiesController.getAllValidation, CitiesController.getAll)
router.get('/cities/:id', CitiesController.getByIdValidation, CitiesController.getById)
router.put('/cities/:id', CitiesController.updateValidation, CitiesController.updateById)
router.delete('/cities/:id', CitiesController.deleteValidation, CitiesController.deleteById)

export { router as citiesRoutes }
