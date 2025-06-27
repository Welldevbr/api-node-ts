import { Request } from 'express'
import { StatusCodes } from 'http-status-codes'
import { z } from 'zod'
import { validation } from '../../middleware'

interface ICity {
  name: string
  state: string
}

const bodySchema = z.object({
  name: z.string().min(3),
  state: z.string().min(2).max(2)
})

export const createValidation = validation((getSchema) => ({
  body: getSchema(bodySchema)
}))

export const create = async (req: Request<{}, {}, ICity>, res: any) => {
  const { name, state } = req.body

  console.log({ nome: name, estado: state })

  return res.status(StatusCodes.CREATED).json({
    success: true,
    message: 'Cidade cadastrada com sucesso!'
  })
}
