import z from 'zod'

export const signUpSchema = z.object({
  name: z.string().min(3).max(150),
  email: z.string().email().min(5),
  password: z.string().min(6)
})

export const signInSchema = z.object({
  email: z.string().email().min(5),
  password: z.string().min(6)
})

export const signUpWithIdSchema = signUpSchema.extend({
  id: z.number()
})

export type ISignUp = z.infer<typeof signUpWithIdSchema>
export type ISignIn = z.infer<typeof signInSchema>
