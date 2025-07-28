import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.stup'
import { prismaMock } from '../singleton'

describe('Cities - Delete', () => {
  it('Test deleting a city', async () => {
    prismaMock.city.create.mockResolvedValue({
      id: 1,
      name: 'São Miguel',
      state: 'RN'
    })

    const res = await testServer.post('/v1/cities').send({
      name: 'São Miguel',
      state: 'RN'
    })

    expect(res.statusCode).toEqual(StatusCodes.CREATED)

    const resDelete = await testServer.delete(`/v1/cities/${res.body.data.id}`).send()

    expect(resDelete.statusCode).toEqual(StatusCodes.OK)
  })

  it('Test deleting a city that does not exist', async () => {
    const res = await testServer.delete('/v1/cities/999').send()

    expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
    expect(res.body).toHaveProperty('errors.default')
  })
})
