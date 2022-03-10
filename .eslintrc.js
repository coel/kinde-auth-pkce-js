module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    window: true,
    module: true,
    jest: true
  },
  extends: ['plugin:jest/recommended', 'eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['jest'],
  rules: {}
};
