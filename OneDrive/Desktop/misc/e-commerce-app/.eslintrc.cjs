module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },

  plugins: ['@typescript-eslint', 'react', 'prettier', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
      'import/no-extraneous-dependencies',
      ['error', { devDependencies: true }],
      { 'react/react-in-jsx-scope': 'off' },

      'import/extensions',
      [
        'error',
        'ignorePackages',
        {
          '': 'never',
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
    ],
  },

  overrides: [
    {
      files: ['*.json', '*.json5'], // Specify the extension or pattern you want to parse as JSON.
      parser: 'jsonc-eslint-parser', // Set this parser.
    },
  ],
};
