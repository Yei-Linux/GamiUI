/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const path = require('path')

const APP_DIR = path.resolve(__dirname, './src')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        include: APP_DIR,
        loader: 'url-loader?limit=100000',
      },
    ],
  },

  plugins: [],
}
