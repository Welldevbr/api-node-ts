import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

export const signIn = (req: Request<{}, {}>, res: any) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: 'Email e senha são campos obrigatórios!'
    })
  }

  return res
    .status(StatusCodes.OK)
    .json({ success: true, message: 'Seja bem-vindo!' })
}
