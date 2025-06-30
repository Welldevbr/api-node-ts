import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { validation } from '../../middleware'
import { paramsSchema, IParams } from '../../schemas/cities.schema'

export const deleteValidation = validation((getSchema) => ({
  params: getSchema(paramsSchema)
}))

export const deleteById = async (req: Request<IParams>, res: Response): Promise<any> => {
  if (!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmetro "id" precisa ser informado.'
      }
    })
  }

  if (Number(req.params.id) === 999) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: 'Registro não encontrado'
      }
    })
  }

  return res.status(StatusCodes.NO_CONTENT).send()
}
