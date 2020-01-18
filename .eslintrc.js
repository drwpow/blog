module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-unresolved': 'off', // TS handles this
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'lines-between-class-members': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/no-unknown-property': ['error', { ignore: ['class'] }],
    'sort-keys': 'error',
  },
  settings: {
    react: {
      pragma: 'h',
    },
  },
};
