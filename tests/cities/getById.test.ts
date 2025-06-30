import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.stup'

describe('Cities - delete', () => {
  it('Test search a city by id', async () => {
    const res = await testServer.post('/v1/cities').send({
      name: 'Icó',
      state: 'CE'
    })

    expect(res.statusCode).toEqual(StatusCodes.CREATED)

    const resSearch = await testServer.get(`/v1/cities/${res.body.id}`).send()

    expect(resSearch.statusCode).toEqual(StatusCodes.OK)
    expect(resSearch.body).toHaveProperty('name')
    expect(resSearch.body).toHaveProperty('state')
  })

  it('Test search a city that does not exist', async () => {
    const res = await testServer.get('/v1/cities/999').send()

    expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
    expect(res.body).toHaveProperty('errors.default')
  })
})
