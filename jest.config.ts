/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  preset: 'ts-jest',
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  coverageReporters: ['json'],
  coveragePathIgnorePatterns: ['/node_modules/', '/generated/'],
  setupFilesAfterEnv: ['./tests/jest.stup.ts', '<rootDir>/tests/singleton.ts'],
  testMatch: ['**/tests/**/*.test.ts', '**/?(*.)+(spec|test).?([mc])[jt]s?(x)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$']
}

export default config
