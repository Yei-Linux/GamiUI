import React from "react";
import { Meta } from "@storybook/react";
import { stylesControl } from "../../../core/helpers/storybook";

import List from ".";

export default {
  title: "Molecules/List",
  component: List,
  args: { ...List.defaultProps },
  argTypes: {
    ...stylesControl,
  },
} as Meta;

export const Basic = (args: any) => (
  <List {...args}>
    <p style={{ padding: "1rem" }}>Hola como estas</p>
  </List>
);

Basic.args = {};

export const Common = (args: any) => (
  <List {...args}>
    <List.Item
      avatar={
        <img
          width="25px"
          height="25px"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      }
      title="Main title"
      description="Description"
    />
  </List>
);

Common.args = {};

export const CustomContent = (args: any) => (
  <List {...args}>
    <List.Item
      avatar={
        <img
          width="25px"
          height="25px"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      }
      title="Main title"
      description="Description"
    >
      <p>Ir</p>
    </List.Item>
    <List.Item
      avatar={
        <img
          width="25px"
          height="25px"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      }
      title="Main title"
      description="Description"
    >
      <p>Ir</p>
    </List.Item>
  </List>
);

CustomContent.args = {};
