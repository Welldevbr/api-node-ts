import supertest from 'supertest'
import { server } from '../src/server'
import prisma from '../src/prisma'

afterEach(async () => {
  await prisma.city.deleteMany({ where: { name: 'Icó (Teste)' } })
})

export const testServer = supertest(server)
