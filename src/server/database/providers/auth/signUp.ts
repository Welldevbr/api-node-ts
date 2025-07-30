import prisma from '../../../../prisma'
import { ISignUp } from '../../../schemas/auth.schema'
import { hashPassword } from '../../../services/PasswordCrypto'

export const signUp = async (data: Omit<ISignUp, 'id'>): Promise<ISignUp | Error> => {
  const existingUser = await prisma.user?.findUnique({
    where: { email: data.email }
  })

  if (existingUser?.id) return Error('O email informado já está em uso')

  const newUser = await prisma.user?.create({
    data: {
      ...data,
      password: await hashPassword(data.password)
    }
  })

  if (!newUser?.id) return Error('Erro ao cadastrar novo usuário')

  return newUser
}
