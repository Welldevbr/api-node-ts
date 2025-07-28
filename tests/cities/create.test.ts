import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.stup'
import { prismaMock } from '../singleton'

describe('Cities - Create', () => {
  it('Test creating a new city', async () => {
    prismaMock.city.create.mockResolvedValue({
      id: 1,
      name: 'Icó',
      state: 'CE'
    })

    const response = await testServer.post('/v1/cities').send({
      name: 'Icó',
      state: 'CE'
    })

    expect(response.statusCode).toEqual(StatusCodes.CREATED)
  })
})
