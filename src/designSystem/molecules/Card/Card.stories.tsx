import React from "react";
import { Meta } from "@storybook/react";
import { stylesControl } from "../../../core/helpers/storybook";

import Card from ".";
import Button from "../../atoms/Button";

export default {
  title: "Molecules/Card",
  component: Card,
  args: { ...Card.defaultProps },
  argTypes: {
    ...stylesControl,
  },
} as Meta;

export const Basic = (args: any) => (
  <Card {...args}>
    <p style={{ padding: "1rem" }}>Hola como estas</p>
  </Card>
);

Basic.args = {};

export const Content = (args: any) => (
  <Card {...args}>
    <Card.Content
      title="Hi this is title"
      description="Hi this is description"
    />
  </Card>
);

Content.args = {};

export const Cover = (args: any) => (
  <Card {...args}>
    <Card.Cover>
      <img
        width="100%"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    </Card.Cover>
    <Card.Content
      title="Hi this is title"
      description="Hi this is description"
    />
  </Card>
);

Cover.args = {};

export const Footer = (args: any) => (
  <Card {...args}>
    <Card.Cover>
      <img
        width="100%"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    </Card.Cover>
    <Card.Content
      title="Hi this is title"
      description="Hi this is description"
    />
    <Card.Footer>
      <Button
        border="MEDIUM"
        heigth="SMALL"
        type="secondary"
        width="SMALL"
      >
        Text
      </Button>
    </Card.Footer>
  </Card>
);

Footer.args = {};
