/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const path = require('path')

const APP_DIR = path.resolve(__dirname, './src')

module.exports = {
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              namedExport: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        include: APP_DIR,
        loader: 'url-loader?limit=100000',
      },
    ],
  },

  plugins: [],
}
