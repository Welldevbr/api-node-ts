import prisma from '../../../../prisma'
import { ICity } from '../../../schemas/cities.schema'

export const getAll = async (): Promise<ICity[] | Error> => {
  const cities = await prisma.city?.findMany()

  return cities
}
