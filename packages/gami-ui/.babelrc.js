module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-flow',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-syntax-jsx',
    'preval',
    'emotion',
    'tsconfig-paths-module-resolver',
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
        autoLabel: 'never',
        labelFormat: '',
        sourceMap: true,
        cssPropOptimization: true,
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
}
