const path = require('path')
const ts = require('typescript')
const ReactDocgenTypescriptPlugin =
  require('react-docgen-typescript-plugin').default

module.exports = {
  plugins: [
    new ReactDocgenTypescriptPlugin(),
    new ReactDocgenTypescriptPlugin({ tsconfigPath: './tsconfig.dev.json' }),
    new ReactDocgenTypescriptPlugin({
      compilerOptions: { jsx: ts.JsxEmit.Preserve },
    }),
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    })
    return config
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    'storybook-addon-react-docgen',
    '@storybook/addon-jest',
  ],
}
