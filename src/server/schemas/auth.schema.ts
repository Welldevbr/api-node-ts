import { z } from 'zod/v4'

export const signUpSchema = z.object({
  name: z.string().min(3).max(150).meta({ example: 'nome' }),
  email: z.string().email().min(5).meta({ example: 'teste@gmail.com' }),
  password: z.string().min(6).meta({ example: '123456' })
})

export const signInSchema = z.object({
  email: z.string().email().min(5).meta({ example: 'teste@gmail.com' }),
  password: z.string().min(6).meta({ example: '123456' })
})

export const signUpWithIdSchema = signUpSchema.extend({
  id: z.number()
})

export type ISignUp = z.infer<typeof signUpWithIdSchema>
export type ISignIn = z.infer<typeof signInSchema>
