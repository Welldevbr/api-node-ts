import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.stup'
import { prismaMock } from '../singleton'

describe('Cities - get by ID', () => {
  it('Test search a city by id', async () => {
    prismaMock.city.create.mockResolvedValue({
      id: 1,
      name: 'Icó (Teste)',
      state: 'CE'
    })

    const res = await testServer.post('/v1/cities').send({
      name: 'Icó (Teste)',
      state: 'CE'
    })

    expect(res.statusCode).toEqual(StatusCodes.CREATED)

    const resSearch = await testServer.get(`/v1/cities/${7}`).send()

    expect(resSearch.statusCode).toEqual(StatusCodes.OK)
    expect(resSearch.body).toHaveProperty('name')
    expect(resSearch.body).toHaveProperty('state')
  })
})
