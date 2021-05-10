import { Meta } from "@storybook/react";
import { getTemplate, stylesControl } from "../../../core/helpers/storybook";

import TrafficLight from ".";

const Template = getTemplate(TrafficLight);

export default {
  title: "Molecules/TrafficLight",
  component: TrafficLight,
  args: { ...TrafficLight.defaultProps },
  argTypes: {
    ...stylesControl,
  },
} as Meta;

export const Basic = Template.bind({});
Basic.args = {};
