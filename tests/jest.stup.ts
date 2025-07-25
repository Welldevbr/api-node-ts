import supertest from 'supertest'
import { server } from '../src/server'
import { prismaMock } from './singleton'

jest.mock('../src/prisma', () => ({
  prisma: prismaMock
}))

export const testServer = supertest(server)
