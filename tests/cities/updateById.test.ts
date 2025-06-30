import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.stup'

describe('Cities - delete', () => {
  it('Test update a city by id', async () => {
    const res = await testServer.post('/v1/cities').send({
      name: 'Icó',
      state: 'CE'
    })

    expect(res.statusCode).toEqual(StatusCodes.CREATED)

    const resSearch = await testServer.put(`/v1/cities/${res.body.id}`).send({
      name: 'São Miguel',
      state: 'RN'
    })

    expect(resSearch.statusCode).toEqual(StatusCodes.NO_CONTENT)
  })

  it('Test city a city that does not exist', async () => {
    const res = await testServer.put('/v1/cities/999').send({ name: 'São Miguel', state: 'RN' })

    expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
    expect(res.body).toHaveProperty('errors.default')
  })
})
