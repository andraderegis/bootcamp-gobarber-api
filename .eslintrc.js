module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-user-this': 'off',
    'no-params-reassing': 'off',
    'no-param-reassign': ['error', { props: false }],
    'import/no-named-as-default': 0,
    'class-methods-use-this': 'off',
    camelcase: 'off'
  }
};
