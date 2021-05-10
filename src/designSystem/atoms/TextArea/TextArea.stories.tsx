import { Meta } from "@storybook/react";
import { getTemplate, stylesControl } from "../../../core/helpers/storybook";

import TextArea from ".";

const Template = getTemplate(TextArea);

export default {
  title: "Atoms/TextArea",
  component: TextArea,
  args: { ...TextArea.defaultProps },
  argTypes: {
    placeholder: { control: "text" },
    ...stylesControl,
  },
} as Meta;

export const BasicTextArea = Template.bind({});
BasicTextArea.args = {
  placeholder: "Type your text",
  width: "NORMAL",
  heigth: "SMALL",
  shadow: "",
  border: "MEDIUM"
};