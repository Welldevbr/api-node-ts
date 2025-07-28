import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.stup'
import { prismaMock } from '../singleton'

describe('Cities - Update', () => {
  it('Test update a city by id', async () => {
    prismaMock.city.create.mockResolvedValue({
      id: 1,
      name: 'Icó',
      state: 'CE'
    })

    const res = await testServer.post('/v1/cities').send({
      name: 'Icó',
      state: 'CE'
    })

    expect(res.statusCode).toEqual(StatusCodes.CREATED)

    const resSearch = await testServer.put(`/v1/cities/${76}`).send({
      name: 'São Miguel',
      state: 'RN'
    })

    expect(resSearch.statusCode).toEqual(StatusCodes.OK)
  })
})
