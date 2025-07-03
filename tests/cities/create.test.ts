import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.stup'

describe('Cities - Create', () => {
  it('Test creating a new city', async () => {
    const city = {
      id: 1,
      name: 'Icó',
      state: 'CE'
    }

    const res = await testServer.post('/v1/cities').send()

    expect(res.statusCode).toEqual(StatusCodes.CREATED)
    expect(typeof res.body).toEqual('object')
  })

  it('Testing the creation of a new city with a very short name', async () => {
    const res = await testServer.post('/v1/cities').send({
      name: 'Ic',
      state: 'CE'
    })

    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST)
    expect(res.body).toHaveProperty('errors.body.name')
  })

  it('Testing the creation of a new city with a very short state', async () => {
    const res = await testServer.post('/v1/cities').send({
      name: 'Icó',
      state: 'C'
    })

    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST)
    expect(res.body).toHaveProperty('errors.body.state')
  })
})
