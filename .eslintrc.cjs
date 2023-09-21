/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'import/extensions': 'off',
    'vue/multi-word-component-names': 'off',
    'import/no-extraneous-dependencies': ['off', { 'packageDir ': './src/' }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],
    'import/no-unresolved': ['error', { ignore: ['^@', '^\\*', '^#'] }],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'WithStatement',
      "BinaryExpression[operator='in']",
    ],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'vue/no-reserved-component-names': 'warn',
    'no-unused-vars': 'warn',
    'prefer-const': ['error', { ignoreReadBeforeAssign: false, destructuring: 'all' }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.ts', '.tsx', '.vue'],
      },
    },
  },
};
