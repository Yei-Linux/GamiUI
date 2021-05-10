import { Meta } from "@storybook/react";
import { getTemplate, stylesControl } from "../../../core/helpers/storybook";
import { options as optionsGuide } from "./constants";

import GuideMessage from ".";

const Template = getTemplate(GuideMessage);

export default {
  title: "Molecules/GuideMessage",
  component: GuideMessage,
  args: { ...GuideMessage.defaultProps },
  argTypes: {
    message: { control: { type: "text" } },
    guideType: { control: { type: "select", options: optionsGuide.type } },
    ...stylesControl,
  },
} as Meta;

export const Left = Template.bind({});
Left.args = {
  guideType: "run",
  message: "Left Direction",
};

export const Right = Template.bind({});
Right.args = {
  guideType: "skater",
  direction: "right",
  message: "Right Direction",
};
