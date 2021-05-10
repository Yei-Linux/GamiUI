import { Meta } from "@storybook/react";
import {
  getListTemplate,
  stylesControl,
} from "../../../core/helpers/storybook";

import Button from ".";
import { options as optionsButton } from "./constants";
import { options as optionsStyles } from "../../../core/utils/constants";

const ListTemplate = getListTemplate(Button);

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    type: { control: { type: "select", options: optionsButton.type } },
    ...stylesControl,
  },
} as Meta;

export const TypesButton = ListTemplate.bind({});
TypesButton.args = {
  items: optionsButton.type.map((type) => ({ type })),
  field: 'type',
  children: "Text",
  width: "MEDIUM",
  heigth: "SMALL",
  shadow: "",
  border: "ROUNDED",
};

export const WidthButton = ListTemplate.bind({});
WidthButton.args = {
  items: optionsStyles.width.map((width) => ({ width })),
  field: 'width',
  children: "Text",
  heigth: "SMALL",
  shadow: "",
  border: "ROUNDED",
};
WidthButton.storyName = "Width Sizes";
