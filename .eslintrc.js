// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'google',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'react', 'simple-import-sort'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'max-len': [1, 120, 2, {
      'ignorePattern': '^import\\s.+\\sfrom\\s.+;$',
      'ignoreUrls': true,
    }],
    'require-jsdoc': [
      'off',
    ],
    'no-multiple-empty-lines': [
      'error', {'max': 1},
    ],
    // Use simple import instead of others
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
    'valid-jsdoc': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },

};
