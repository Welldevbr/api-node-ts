import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.stup'
import { prismaMock } from '../singleton'

describe('Cities - Get all', () => {
  it('Test search all cities', async () => {
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

    const resSearch = await testServer.get('/v1/cities').send()

    expect(resSearch.statusCode).toEqual(StatusCodes.OK)
    expect(resSearch.body.length).toBeGreaterThan(0)
  })
})
