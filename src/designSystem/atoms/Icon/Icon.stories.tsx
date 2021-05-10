import { Meta } from "@storybook/react";
import { getTemplate, stylesControl } from "../../../core/helpers/storybook";

import Icon from ".";
import { options as optionsIcon } from "./constants";

const Template = getTemplate(Icon);

export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    children: { control: "text" },
    name: { control: { type: "select", options: optionsIcon.names } },
    ...stylesControl,
  },
} as Meta;

export const BasicIcon = Template.bind({});
BasicIcon.args = {
  fill: "red",
  size: "25px",
  name: "facebook",
};
