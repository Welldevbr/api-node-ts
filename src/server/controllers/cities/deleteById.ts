import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { validation } from '../../middleware'
import { paramsSchema, IParams } from '../../schemas/cities.schema'

export const deleteValidation = validation((getSchema) => ({
  params: getSchema(paramsSchema)
}))

export const deleteById = async (
  req: Request<IParams>,
  res: Response
): Promise<any> => {
  console.log(req.params)

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: 'Não implementado'
  })
}
