import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { validation } from '../../middleware'
import { querySchema, IQuery } from '../../schemas/cities.schema'

export const getAllValidation = validation((getSchema) => ({
  query: getSchema(querySchema)
}))

export const getAll = async (
  req: Request<{}, {}, {}, IQuery>,
  res: Response
): Promise<any> => {
  console.log(req.query)

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: 'Não implementado'
  })
}
