module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:i18next/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jsx-a11y',
    'i18next',
    'react-hooks'
  ],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-trailing-spaces': ['error'],
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/no-unknown-property': ['error', { ignore: ['styleName'] }],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': ['error', 'unix'],
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['data-testid', 'to', 'theme', 'align', 'size', 'target'],
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-undef': 'off',
    'object-curly-spacing': ['error', 'always'],
    'react/no-array-index-key': 'off',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      'files': ['**/*test.ts', '**/*test.tsx'], // ??? почему не работает регулярка то?
      'rules': {
        'i18next/no-literal-string': 'off'
      }
    }
  ]
};
