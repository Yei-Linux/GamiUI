const path = require("path");
const ts = require("typescript");
const ReactDocgenTypescriptPlugin = require("react-docgen-typescript-plugin")
  .default;
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

module.exports = {
  plugins: [
    new ReactDocgenTypescriptPlugin(),
    new ReactDocgenTypescriptPlugin({ tsconfigPath: "./tsconfig.dev.json" }),
    new ReactDocgenTypescriptPlugin({
      compilerOptions: { jsx: ts.JsxEmit.Preserve },
    }),
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../"),
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
      }
    );
    config.plugins.push(new SpriteLoaderPlugin());
    return config;
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/addon-docs",
    "storybook-addon-react-docgen",
    "@storybook/addon-jest",
  ],
};
