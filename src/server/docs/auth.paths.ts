import z from 'zod/v4'
import { signInDocsSchema, signUpDocsSchema } from '../schemas/auth.docs.schema'

const success = z.object({
  success: z.boolean().meta({ example: true })
})

export const authPaths = {
  '/sign-up': {
    post: {
      description: 'Criação de um novo usuário',
      tags: ['Auth'],
      requestBody: {
        content: {
          'application/json': {
            schema: signUpDocsSchema
          }
        }
      },
      responses: {
        201: {
          description: 'Usuário criado',
          content: {
            'application/json': {
              schema: success.extend({ message: z.string().meta({ example: 'Usuario cadastrado com sucesso!' }) })
            }
          }
        }
      }
    }
  },
  '/sign-in': {
    post: {
      description: 'Realizar login e criação de um token de acesso',
      tags: ['Auth'],
      requestBody: {
        content: {
          'application/json': {
            schema: signInDocsSchema
          }
        }
      },
      responses: {
        200: {
          description: 'Login e criação do token',
          content: {
            'application/json': {
              schema: success.extend({
                message: z.string().meta({ example: 'Seja bem-vindo!' }),
                accessToken: z.string().meta({ example: 'access_token' })
              })
            }
          }
        }
      }
    }
  }
}
