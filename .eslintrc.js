module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'react/no-array-index-key': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'react/display-name': 1,
    'react/jsx-boolean-value': 1,
    'react/jsx-curly-spacing': 1,
    'react/jsx-max-props-per-line': 1,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-undef': 1,
    'react/jsx-sort-props': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-multi-comp': 1,
    'react/no-unknown-property': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': 1,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
