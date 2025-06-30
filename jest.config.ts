/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['json'],
  setupFilesAfterEnv: ['./tests/jest.stup.ts'],
  testMatch: ['**/tests/**/*.test.ts', '**/?(*.)+(spec|test).?([mc])[jt]s?(x)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$']
}

export default config
