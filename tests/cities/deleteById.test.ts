import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.stup'

describe('Cities - delete', () => {
  it('Test deleting a city', async () => {
    const res = await testServer.post('/v1/cities').send({
      name: 'Icó',
      state: 'CE'
    })

    expect(res.statusCode).toEqual(StatusCodes.CREATED)

    const resDelete = await testServer.delete(`/v1/cities/${res.body.id}`).send()

    expect(resDelete.statusCode).toEqual(StatusCodes.NO_CONTENT)
  })

  it('Test deleting a city that does not exist', async () => {
    const res = await testServer.delete('/v1/cities/999').send()

    expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
    expect(res.body).toHaveProperty('errors.default')
  })
})
