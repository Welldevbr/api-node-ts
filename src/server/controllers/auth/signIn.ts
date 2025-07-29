import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { validation } from '../../middleware'
import { ISignIn, signInSchema } from '../../schemas/auth.schema'
import { AuthProvider } from '../../database/providers/auth'
import { verifyPassword } from '../../services/PasswordCrypto'
import { JWTService } from '../../services/JWTService'

export const signInValidation = validation((getSchema) => ({
  body: getSchema(signInSchema)
}))

export const signIn = async (req: Request<{}, {}, ISignIn>, res: Response): Promise<any> => {
  const { email, password } = req.body

  const user = await AuthProvider.signIn(email)
  if (user instanceof Error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: { default: user.message }
    })
  }

  const passwordMatch = await verifyPassword(password, user.password)
  if (!passwordMatch) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: { default: 'Email ou senha estão inválidos' }
    })
  }

  const accessToken = JWTService.sign({ uid: user.id })
  if (accessToken === JWTService.JWTErrors.SecretNotFound) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: 'Erro ao gerar o token de acesso'
      }
    })
  }

  return res.status(StatusCodes.OK).json({
    success: true,
    message: 'Seja bem-vindo!',
    accessToken
  })
}
