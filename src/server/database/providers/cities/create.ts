import prisma from '../../../../prisma'
import { ICity } from '../../../schemas/cities.schema'

export const create = async (city: Omit<ICity, 'id'>): Promise<ICity | Error> => {
  const newCity = await prisma.city?.create({
    data: city
  })

  if (!newCity) return Error('Erro ao cadastrar nova cidade')

  return newCity
}
