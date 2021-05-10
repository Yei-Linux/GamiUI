"use strict";

const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=100000",
      },
      {
        test: /\.svg$/,
        include: /.*iconpack\.svg/,
        use: [
          {
            loader: "svg-sprite-loader",
            options: {
              publicPath: "",
            },
          },
        ],
      },
    ],
  },

  plugins: [new SpriteLoaderPlugin()],
};
