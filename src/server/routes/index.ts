import { Router } from 'express'

import { authRoutes } from './auth.routes'
import { citiesRoutes } from './cities.routes'
import { ensureAuthentication } from '../middleware/ensureAuthentication'

const router = Router()

router.use(authRoutes)

router.use(ensureAuthentication)
router.use(citiesRoutes)

export { router }
