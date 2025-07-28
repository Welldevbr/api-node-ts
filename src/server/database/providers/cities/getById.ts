import prisma from '../../../../prisma'
import { ICity } from '../../../schemas/cities.schema'

export const getById = async (id: number): Promise<ICity | Error> => {
  const city = await prisma.city?.findUnique({ where: { id } })

  return city ?? new Error('City not found')
}
