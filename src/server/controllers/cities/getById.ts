import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { validation } from '../../middleware'
import { paramsSchema, IParams } from '../../schemas/cities.schema'
import { CitiesProvider } from '../../database/providers/cities'

export const getByIdValidation = validation((getSchema) => ({
  params: getSchema(paramsSchema)
}))

export const getById = async (req: Request<IParams>, res: Response): Promise<any> => {
  const result = await CitiesProvider.getById(Number(req.params.id))

  if (result instanceof Error)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: result.message }
    })

  return res.status(StatusCodes.CREATED).json({
    success: true,
    data: result
  })
}
