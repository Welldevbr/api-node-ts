import jwt from 'jsonwebtoken'

interface IJWTData {
  uid: number
}

export enum JWTErrors {
  SecretNotFound = 'JWT_SECRET_NOT_FOUND',
  InvalidToken = 'INVALID_TOKEN'
}

const JWT_SECRET = process.env.JWT_SECRET

const sign = (data: IJWTData): string | JWTErrors => {
  if (!JWT_SECRET) return JWTErrors.SecretNotFound

  try {
    return jwt.sign(data, JWT_SECRET, { expiresIn: '24h' })
  } catch {
    return JWTErrors.InvalidToken
  }
}

const verify = (token: string): IJWTData | JWTErrors => {
  if (!JWT_SECRET) return JWTErrors.SecretNotFound

  try {
    const decoded = jwt.verify(token, JWT_SECRET)

    if (typeof decoded !== 'object' || !('uid' in decoded)) return JWTErrors.InvalidToken

    return decoded as IJWTData
  } catch {
    return JWTErrors.InvalidToken
  }
}

export const JWTService = {
  sign,
  verify,
  JWTErrors
}
