import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.stup'

describe('Cities - get by ID', () => {
  it('Test search a city by id', async () => {
    /* const res = await testServer.post('/v1/cities').send({
      name: 'Icó',
      state: 'CE'
    })

    expect(res.statusCode).toEqual(StatusCodes.CREATED) */

    const resSearch = await testServer.get(`/v1/cities/${7}`).send()

    expect(resSearch.statusCode).toEqual(StatusCodes.OK)
    expect(resSearch.body).toHaveProperty('name')
    expect(resSearch.body).toHaveProperty('state')
  })
})
