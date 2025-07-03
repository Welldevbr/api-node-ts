import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { validation } from '../../middleware'
import { citySchema, ICity } from '../../schemas/cities.schema'
import { CitiesProvider } from '../../database/providers/cities'

export const createValidation = validation((getSchema) => ({
  body: getSchema(citySchema)
}))

export const create = async (req: Request<{}, {}, ICity>, res: Response): Promise<any> => {
  const result = await CitiesProvider.create(req.body)

  if (result instanceof Error)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: result.message }
    })

  return res.status(StatusCodes.CREATED).json({
    success: true,
    message: 'Cidade cadastrada com sucesso!',
    data: result
  })
}
