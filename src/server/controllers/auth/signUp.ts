import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { validation } from '../../middleware'
import { ISignUp, signUpSchema } from '../../schemas/auth.schema'
import { AuthProvider } from '../../database/providers/auth'

export const signUpValidation = validation((getSchema) => ({
  body: getSchema(signUpSchema)
}))

export const signUp = async (req: Request<{}, {}, ISignUp>, res: Response): Promise<any> => {
  const result = await AuthProvider.signUp(req.body)

  if (result instanceof Error)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: result.message }
    })

  return res.status(StatusCodes.CREATED).json({
    success: true,
    message: 'Usuario cadastrado com sucesso!'
  })
}
