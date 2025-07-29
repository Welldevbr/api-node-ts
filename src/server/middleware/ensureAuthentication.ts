import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import { JWTService } from '../services/JWTService'

enum AuthErrors {
  UNAUTHORIZED = 'Não autenticado',
  TOKEN_ERROR = 'Erro ao verificar o token'
}

export const ensureAuthentication: RequestHandler = (req, res, next): any => {
  const { authorization } = req.headers

  if (!authorization)
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: { default: AuthErrors.UNAUTHORIZED }
    })

  const [type, token] = authorization.split(' ')

  if (type !== 'Bearer')
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: { default: AuthErrors.UNAUTHORIZED }
    })

  const jwtData = JWTService.verify(token)

  if (jwtData === JWTService.JWTErrors.SecretNotFound)
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: { default: AuthErrors.TOKEN_ERROR }
    })

  if (jwtData === JWTService.JWTErrors.InvalidToken)
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: { default: AuthErrors.UNAUTHORIZED }
    })

  req.headers.userId = jwtData.uid.toString()

  return next()
}
