import 'dotenv/config.js'
import './services/zodErrorTranslator'

import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { openApiDocument } from './docs/openapi'
import { router } from './routes'

const server = express()

server.use(express.json())
server.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiDocument))
server.use('/v1', router)

export { server }
