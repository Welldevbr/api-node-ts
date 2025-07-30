import { createDocument } from 'zod-openapi'
import { authPaths } from './auth.paths'
import { citiesPaths } from './cities.paths'

export const openApiDocument = createDocument({
  openapi: '3.1.0',
  info: {
    title: 'API Rest',
    version: '1.0.0'
  },
  servers: [{ url: 'http://localhost:3000/v1' }],
  paths: { ...authPaths, ...citiesPaths },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  }
})
