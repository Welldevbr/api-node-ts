import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import tsPlugin from '@typescript-eslint/eslint-plugin'

export default defineConfig([
  tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { '@typescript-eslint': tsPlugin },
    extends: ['js/recommended'],
    rules: {
      'no-param-reassign': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
      'max-len': ['error', { code: 120 }],
      quotes: ['error', 'single'],
      camelcase: 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-types': 'off'
    }
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.node }
  }
])
