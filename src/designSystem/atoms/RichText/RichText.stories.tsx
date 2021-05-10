import { Meta } from "@storybook/react";

import RichText from "./RichText";
import { getTemplate, stylesControl } from "../../../core/helpers/storybook";

const Template = getTemplate(RichText);

export default {
  title: "Atoms/RichText",
  component: RichText,
  argTypes: {
    text: { control: "text" },
    ...stylesControl,
  },
} as Meta;

export const BasicRichText = Template.bind({});
BasicRichText.args = {
  text: "This is a basic text",
  width: "NONE",
  heigth: "NORMAL",
  shadow: "",
  border: "NONE",
};

BasicRichText.storyName = "Basic";

export const RichTextLink = Template.bind({});
RichTextLink.args = {
  text: "This is a link [help](https://google.com).",
  width: "NONE",
  heigth: "NORMAL",
  shadow: "",
  border: "NONE",
};

RichTextLink.storyName = "Link";

export const RichTextItalic = Template.bind({});
RichTextItalic.args = {
  text: "*Be italic*.",
  width: "NONE",
  heigth: "NORMAL",
  shadow: "",
  border: "NONE",
};

RichTextItalic.storyName = "Italic";

export const RichTextBold = Template.bind({});
RichTextBold.args = {
  text: "**Im bold**",
  width: "NONE",
  heigth: "NORMAL",
  shadow: "",
  border: "NONE",
};

RichTextBold.storyName = "Bold";