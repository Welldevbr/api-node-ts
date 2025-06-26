import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { z } from 'zod'

interface ICity {
  name: string
  state: string
}

const bodyValidation = z.object({
  name: z.string().min(3),
  state: z.string()
})

const create = async (req: Request<{}, {}, ICity>, res: any) => {
  try {
    const { name, state } = await bodyValidation.parse(req.body)

    if (!name || !state) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: 'Nome e estado são obrigatórios'
      })
    }

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Cidade criada com sucesso!',
      city: { name, state }
    })
  } catch (error) {
    const zodError = error as z.ZodError
    const errors: Record<string, string> = {}

    zodError.issues.map((issue) => {
      if (!issue.path.join('.')) return

      errors[issue.path.join('.')] = issue.message
    })

    if (!zodError || !zodError.issues) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'Erro interno do servidor'
      })
    }

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors
    })
  }
}

export { create }
