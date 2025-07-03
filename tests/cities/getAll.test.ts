import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.stup'

describe('Cities - Get all', () => {
  it('Test search all cities', async () => {
    /* const res = await testServer.post('/v1/cities').send({
      name: 'Icó',
      state: 'CE'
    })

    expect(res.statusCode).toEqual(StatusCodes.CREATED) */

    const resSearch = await testServer.get('/v1/cities').send()

    expect(resSearch.statusCode).toEqual(StatusCodes.OK)
    expect(resSearch.body.length).toBeGreaterThan(0)
  })
})
