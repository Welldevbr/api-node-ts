import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { validation } from '../../middleware'
import { querySchema, IQuery } from '../../schemas/cities.schema'
import { CitiesProvider } from '../../database/providers/cities'

export const getAllValidation = validation((getSchema) => ({
  query: getSchema(querySchema)
}))

export const getAll = async (req: Request<{}, {}, {}, IQuery>, res: Response): Promise<any> => {
  const data = await CitiesProvider.getAll({
    page: Number(req.query.page) || 1,
    per_page: Number(req.query.per_page) || 10
  })

  if (data?.cities instanceof Error)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: data?.cities?.message }
    })

  return res.status(StatusCodes.CREATED).json({
    success: true,
    data
  })
}
