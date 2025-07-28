import { PrismaClient } from '@prisma/client'
import { mockDeep, DeepMockProxy } from 'jest-mock-extended'

const prisma = new PrismaClient()

jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => prismaMock)
}))

export const prismaMock = mockDeep<PrismaClient>() as unknown as DeepMockProxy<PrismaClient>
