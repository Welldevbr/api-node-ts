import prisma from '../../../../prisma'
import { ISignUp } from '../../../schemas/auth.schema'

export const signIn = async (email: string): Promise<ISignUp | Error> => {
  const user = await prisma.user?.findUnique({ where: { email } })

  if (!user?.id) return Error('Email ou senha estão inválidos')

  return user
}
