import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { validation } from '../../middleware'
import { IParams, ICity, paramsSchema, citySchema } from '../../schemas/cities.schema'
import { CitiesProvider } from '../../database/providers/cities'

export const updateValidation = validation((getSchema) => ({
  body: getSchema(citySchema),
  params: getSchema(paramsSchema)
}))

export const updateById = async (req: Request<IParams, {}, ICity>, res: Response): Promise<any> => {
  const result = await CitiesProvider.updateById({
    id: Number(req.params.id),
    city: req.body
  })

  if (result instanceof Error)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: result.message }
    })

  return res.status(StatusCodes.CREATED).json({
    success: true,
    message: 'Cidade atualizada com sucesso',
    data: result
  })
}
