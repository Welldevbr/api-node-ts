import { PrismaClient } from '../generated/prisma'
import { mockDeep, DeepMockProxy, mockReset } from 'jest-mock-extended'

import prisma from '../src/prisma'

jest.mock('../src/prisma', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>()
}))

beforeEach(() => {
  mockReset(prismaMock)
})

afterEach(() => {
  mockReset(prismaMock)
})

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>
