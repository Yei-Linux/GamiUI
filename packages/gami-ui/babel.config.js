/* eslint-disable no-undef */
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: [
    /* '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-syntax-jsx',
    'preval',*/
    'tsconfig-paths-module-resolver',
    '@babel/plugin-transform-parameters',
    [
      'babel-plugin-replace-imports',
      {
        test: /\/styled-base/,
        replacer: '/styled',
      },
    ],
    [
      '@emotion',
      {
        cssPropOptimization: true,
        sourceMap: true,
        autoLabel: 'never',
        labelFormat: '[local]',
        importMap: {
          '@emotion/styled-base': {
            default: {
              canonicalImport: ['@emotion/styled', 'default'],
            },
          },
        },
      },
    ],
  ],
  ignore: ['**/*.stories.ts', '**/*.test.ts'],
}
