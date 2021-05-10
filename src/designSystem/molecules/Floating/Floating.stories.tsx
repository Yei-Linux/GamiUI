import { Meta } from "@storybook/react";
import { stylesControl } from "../../../core/helpers/storybook";

import Floating from ".";
import React from "react";
import GuideMessage from "../GuideMessage";

export default {
  title: "Molecules/Floating",
  component: Floating,
  args: { ...Floating.defaultProps },
  argTypes: {
    ...stylesControl,
  },
} as Meta;

export const Right = (args: any) => (
  <Floating {...args}>
    <GuideMessage
      guideType="chill"
      message="Toma un descanso!"
      direction="right"
      background="#ff75a0"
    />
  </Floating>
);

Right.args = {
  direction: "right",
};

export const Left = (args: any) => (
  <Floating {...args}>
    <GuideMessage
      guideType="chill"
      message="Toma un descanso!"
      direction="right"
      background="#ff75a0"
    />
  </Floating>
);

Left.args = {
  direction: "left",
};

export const Top = (args: any) => (
  <Floating {...args}>
    <GuideMessage
      guideType="chill"
      message="Toma un descanso!"
      direction="right"
      background="#ff75a0"
    />
  </Floating>
);

Top.args = {
  direction: "top",
};

export const Bottom = (args: any) => (
  <Floating {...args}>
    <GuideMessage
      guideType="chill"
      message="Toma un descanso!"
      direction="right"
      background="#ff75a0"
    />
  </Floating>
);

Bottom.args = {
  direction: "bottom",
};
