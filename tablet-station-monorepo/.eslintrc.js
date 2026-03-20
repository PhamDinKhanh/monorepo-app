module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    jest: true,
    'react-native/react-native': true,
  },
  ignorePatterns: [
    '!.*', 
    'node_modules/',
    'dist/',
    '.expo/',
    '.next/',
    'android/',
    'ios/',
    '*.config.js',
    'coverage/',
    '.turbo/'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'react-native',
    'import',
    'sonarjs',
    'no-barrel-files',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: true,
      node: true
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: true, 
        tsconfigRootDir: __dirname,
      },
      rules: {
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        '@typescript-eslint/no-non-null-assertion': 'off',
        'react-native/no-inline-styles': 'warn',
        'react-native/no-unused-styles': 'error',
        'import/no-duplicates': 'error'
      },
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      },
    },
    {
      files: ['*.json'],
      extends: ['plugin:jsonc/recommended-with-json'],
      parser: 'jsonc-eslint-parser'
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react']
    },
  ]
}