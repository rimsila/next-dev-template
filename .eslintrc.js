module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    'no-underscore-dangle': 0,
    'no-useless-escape': 0,
    'react/jsx-key': ['error'],
    'no-console': 0,
    'func-names': 0,
    'lines-around-directive': 0,
    'no-path-concat': 0,
    'no-param-reassign': 0,
    'no-buffer-constructor': 0,
    'global-require': 0,
    'no-new-require': 0,

    'import/no-unresolved': [
      'error',
      {
        ignore: [
          '@config/',
          '@/',
          '@modules',
          '@wetrial',
          '@next-core',
          '@next-component',
          '@next-provider',
          '@next-hooks',
        ],
      },
    ],
  },
};
