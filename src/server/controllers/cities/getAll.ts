import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { validation } from '../../middleware'
import { querySchema, IQuery } from '../../schemas/cities.schema'
import prisma from '../../../prisma'

export const getAllValidation = validation((getSchema) => ({
  query: getSchema(querySchema)
}))

export const getAll = async (req: Request<{}, {}, {}, IQuery>, res: Response): Promise<any> => {
  res.setHeader('access-control-expose-headers', 'x-total-count')
  res.setHeader('x-total-count', 1)
  const cities = await prisma.city?.findMany()

  return res.status(StatusCodes.OK).json(cities)
}
