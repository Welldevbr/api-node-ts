import 'dotenv/config.js'
import './services/zodErrorTranslator'

import express from 'express'
import { router } from './routes'

const server = express()

server.use(express.json())
server.use('/v1', router)

export { server }
