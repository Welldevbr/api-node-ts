import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.stup'
import { prismaMock } from '../singleton'

describe('Cities - Create', () => {
  const city = {
    name: 'Icó',
    state: 'CE'
  }

  it('Test creating a new city', async () => {
    prismaMock.city.create.mockResolvedValue({ ...city, id: 1 })

    await expect(testServer.post('/v1/cities').send(city)).resolves.toEqual(StatusCodes.CREATED)
  })
})
