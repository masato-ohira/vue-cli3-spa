module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  globals: {
    $: true,
    ga: true,
    google: true,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multi-spaces': 0,
    'no-unused-vars': 1,
    'max-len': 1,
    // 'quotes': [1, 'single', {"avoidEscape": true}],
    'quotes': [1, 'single', {allowTemplateLiterals: true}],

    // セミコロン省略
    'semi': ['error', 'never', {'beforeStatementContinuationChars': 'never'}],
    'semi-spacing': ['error', {'after': true, 'before': false}],
    'semi-style': ['error', 'first'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error'
  },
}
