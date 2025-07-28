import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { validation } from '../../middleware'
import { paramsSchema, IParams } from '../../schemas/cities.schema'
import { CitiesProvider } from '../../database/providers/cities'

export const deleteValidation = validation((getSchema) => ({
  params: getSchema(paramsSchema)
}))

export const deleteById = async (req: Request<IParams>, res: Response): Promise<any> => {
  const cityId = req.params.id

  if (!cityId) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmetro "id" precisa ser informado.'
      }
    })
  }

  const result = await CitiesProvider.getById(Number(req.params.id))

  if (result instanceof Error)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: result.message }
    })

  return res.status(StatusCodes.CREATED).json({
    success: true,
    message: 'Cidade excluída com sucesso'
  })
}
