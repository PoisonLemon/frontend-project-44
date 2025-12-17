import js from '@eslint/js'
import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}',],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/semi': ['error', 'never',],
      '@stylistic/quotes': ['error', 'single',],
      '@stylistic/indent': ['error', 2,],
      '@stylistic/comma-dangle': ['error', 'always',],
      '@stylistic/object-curly-spacing': ['error', 'always',],
      '@stylistic/eol-last': ['error', 'always',],
      '@stylistic/arrow-parens': ['error', 'always',],
      '@stylistic/no-multi-spaces': ['error',],
    },
  },
]
