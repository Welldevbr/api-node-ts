import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { validation } from '../../middleware'
import { IParams, ICity, paramsSchema, citySchema } from '../../schemas/cities.schema'

export const updateValidation = validation((getSchema) => ({
  body: getSchema(citySchema),
  params: getSchema(paramsSchema)
}))

export const updateById = async (req: Request<IParams, {}, ICity>, res: Response): Promise<any> => {
  if (Number(req.params.id) === 999) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: 'Registro não encontrado'
      }
    })
  }

  return res.status(StatusCodes.OK).send()
}
