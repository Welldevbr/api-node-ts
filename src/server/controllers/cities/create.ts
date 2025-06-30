import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { validation } from '../../middleware'
import { citySchema, ICity } from '../../schemas/cities.schema'

export const createValidation = validation((getSchema) => ({
  body: getSchema(citySchema)
}))

export const create = async (req: Request<{}, {}, ICity>, res: Response): Promise<any> => {
  const { name, state } = req.body

  console.log({ nome: name, estado: state })

  return res.status(StatusCodes.CREATED).json({
    success: true,
    message: 'Cidade cadastrada com sucesso!',
    id: 1
  })
}
