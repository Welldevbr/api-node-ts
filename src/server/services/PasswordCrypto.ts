import { compare, genSalt, hash } from 'bcryptjs'

const SALT_RANDOMS = 8

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await genSalt(SALT_RANDOMS)
  return hash(password, salt)
}

export const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
  return await compare(password, hash)
}
