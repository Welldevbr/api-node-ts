import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { validation } from '../../middleware'
import { paramsSchema, IParams } from '../../schemas/cities.schema'

export const getByIdValidation = validation((getSchema) => ({
  params: getSchema(paramsSchema)
}))

export const getById = async (req: Request<IParams>, res: Response): Promise<any> => {
  if (Number(req.params.id) === 999) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: 'Registro não encontrado'
      }
    })
  }

  return res.status(StatusCodes.OK).json({
    id: 1,
    name: 'Icó',
    state: 'CE'
  })
}
