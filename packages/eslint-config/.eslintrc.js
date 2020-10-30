module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/standard',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    "react/prop-types": [2, { ignore: ['children'] }],
    'prettier/prettier': 'error',
    "camelcase": 'off',
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/indent": ["error", 2],
    '@typescript-eslint/no-unused-vars': 'off',
    "space-before-function-paren": "off"
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect'
    }
  }
}
