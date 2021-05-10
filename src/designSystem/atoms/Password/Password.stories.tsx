import React from "react";
import { Meta } from "@storybook/react";
import { getTemplate, stylesControl } from "../../../core/helpers/storybook";

import Password from ".";
import Icon from "../Icon";

const Template = getTemplate(Password);

export default {
  title: "Atoms/Password",
  component: Password,
  args: { ...Password.defaultProps },
  argTypes: {
    positionPrefix: {
      control: "select",
      options: ["left", "right"],
    },
    placeholder: { control: "text" },
    prefix: {
      options: ["a", "b"],
      mapping: {
        a: null,
        b: <Icon fill="#374a54" />,
      },
      control: {
        type: "select",
        labels: {
          a: "withoutIcon",
          b: "withIcon",
        },
      },
    },
    ...stylesControl,
  },
} as Meta;

export const BasicPassword = Template.bind({});
BasicPassword.args = {
  placeholder: "Type your password",
  width: "NORMAL",
  heigth: "SMALL",
  shadow: "",
  border: "MEDIUM"
};