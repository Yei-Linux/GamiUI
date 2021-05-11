export default {
  rootDir: 'src',
  modulePaths: [
    '<rootDir>'
  ],
  transform: {
    "^.+\\.mdx?$": "@storybook/addon-docs/jest-transform-mdx",
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!react-syntax-highlighter|@storybook)",
  ],
};
