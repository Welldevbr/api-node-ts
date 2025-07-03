import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { validation } from '../../middleware'
import { paramsSchema, IParams } from '../../schemas/cities.schema'
import prisma from '../../../prisma'

export const deleteValidation = validation((getSchema) => ({
  params: getSchema(paramsSchema)
}))

export const deleteById = async (req: Request<IParams>, res: Response): Promise<any> => {
  const cityId = req.params.id
  const citiesIds = await prisma.city.findMany()

  if (!cityId) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmetro "id" precisa ser informado.'
      }
    })
  }

  if (!citiesIds.map((item) => item.id).includes(Number(cityId))) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: 'Cidade não encontrado'
      }
    })
  }

  await prisma.city.delete({ where: { id: Number(cityId) } })

  return res.status(StatusCodes.OK).json({ succes: true, message: 'Cidade excluida com sucesso!' })
}
