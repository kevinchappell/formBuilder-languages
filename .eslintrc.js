module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  plugins: ['standard', 'plugin:mocha/recommended'],
  extends: ['mocha'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {},
}
