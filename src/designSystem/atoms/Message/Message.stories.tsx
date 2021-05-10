import { Meta } from "@storybook/react";
import { getTemplate, stylesControl } from "../../../core/helpers/storybook";

import Message from ".";

const Template = getTemplate(Message);

export default {
  title: "Atoms/Message",
  component: Message,
  args: { ...Message.defaultProps },
  argTypes: {
    ...stylesControl,
  },
} as Meta;

export const BasicMessageLeft = Template.bind({});
BasicMessageLeft.args = {
  width: "NORMAL",
  shadow: "",
};

export const BasicMessageRight= Template.bind({});
BasicMessageRight.args = {
  width: "NORMAL",
  direction: "right",
  shadow: "",
};