import prisma from '../../../../prisma'
import { ICity } from '../../../schemas/cities.schema'

interface IGetAllCitiesPayload {
  page?: number
  per_page?: number
}

interface IGetAllCitiesResponse {
  cities: ICity[] | Error
  total?: number
  page?: number
  per_page?: number
}

export const getAll = async (payload: IGetAllCitiesPayload): Promise<IGetAllCitiesResponse> => {
  const total = await prisma.city?.count()

  if (total === 0) {
    return { cities: [], total, page: payload.page, per_page: payload.per_page }
  }

  if (payload?.page! > Math.ceil(total / payload?.per_page!)) {
    return { cities: new Error('Página não encontrada ou inexistente') }
  }

  const cities = await prisma.city?.findMany({
    skip: (payload?.page! - 1) * payload?.per_page!,
    take: payload?.per_page,
    orderBy: { name: 'asc' }
  })

  return { cities, page: payload?.page, per_page: payload?.per_page, total }
}
