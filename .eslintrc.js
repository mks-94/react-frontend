module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': [0],
    'react/prop-types': [0],
    'import/prefer-default-export': [0],
  },
};
