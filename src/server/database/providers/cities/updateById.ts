import prisma from '../../../../prisma'
import { ICity } from '../../../schemas/cities.schema'

interface IUpdateCityPayload {
  id: number
  city: { name?: string; state?: string }
}

export const updateById = async (payload: IUpdateCityPayload): Promise<ICity | Error> => {
  const city = await prisma.city?.update({
    where: {
      id: payload?.id
    },
    data: {
      ...payload?.city
    }
  })

  return city ?? new Error('City not found')
}
