import { z } from 'zod/v4'

export const signUpDocsSchema = z.object({
  name: z.string().min(3).max(150).meta({ example: 'nome' }),
  email: z.string().email().min(5).meta({ example: 'teste@gmail.com' }),
  password: z.string().min(6).meta({ example: '123456' })
})

export const signInDocsSchema = z.object({
  email: z.string().email().min(5).meta({ example: 'teste@gmail.com' }),
  password: z.string().min(6).meta({ example: '123456' })
})
