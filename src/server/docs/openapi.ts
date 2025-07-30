import { createDocument } from 'zod-openapi'
import { authPaths } from './auth.paths'
import { citiesPaths } from './cities.paths'

export const openApiDocument = createDocument({
  openapi: '3.1.0',
  info: {
    title: 'API Rest',
    version: '1.0.0'
  },
  servers: [
    { description: 'Test URL', url: 'http://localhost:3000/v1' },
    { description: 'Production URL', url: 'https://api-node-ts-tl9t.onrender.com/v1' }
  ],
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
