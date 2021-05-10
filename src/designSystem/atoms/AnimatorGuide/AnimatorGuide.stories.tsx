import { Meta } from "@storybook/react";
import { getTemplate, stylesControl } from "../../../core/helpers/storybook";
import { options as optionsGuide } from "./constants";

import AnimatorGuide from ".";

const Template = getTemplate(AnimatorGuide);

export default {
  title: "Atoms/AnimatorGuide",
  component: AnimatorGuide,
  args: { ...AnimatorGuide.defaultProps },
  argTypes: {
    type: { control: { type: "select", options: optionsGuide.type } },
    ...stylesControl,
  },
} as Meta;

export const BasicAnimatorGuide = Template.bind({});
BasicAnimatorGuide.args = {
  shadow: "",
};
