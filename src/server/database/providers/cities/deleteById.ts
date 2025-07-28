import prisma from '../../../../prisma'
import { ICity } from '../../../schemas/cities.schema'

export const deleteById = async (id: number): Promise<ICity | Error> => {
  const city = await prisma.city?.delete({ where: { id } })

  return city ?? new Error('City not found')
}
