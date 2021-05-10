import React from 'react';

import { addParameters, addDecorator } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import EmotionThemeProvider from "./decorators/EmotionThemeProvider";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

addDecorator(EmotionThemeProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
