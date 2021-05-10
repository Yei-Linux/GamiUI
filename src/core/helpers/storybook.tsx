import React from "react";
import TableStories from "../../styles/utilities/TableStories";
import { options as optionsStyle } from "../utils/constants";

export const getTemplate = (Component: React.ComponentType<any>): any => (
  args: any
) => {
  return <Component {...args} />;
};

export const getListTemplate = (Component: React.ComponentType<any>): any => ({
  items,
  field,
  ...args
}: {
  items: any[];
  field: any;
}) =>
  items.map((item, index) => (
    <TableStories key={index} item={item} field={field}>
      <Component {...args} {...item} />
    </TableStories>
  ));

export const stylesControl = {
  style: { control: "object" },
  textAlign: { control: { type: "select", options: optionsStyle.textAlign } },
  fontWeight: {
    control: { type: "select", options: optionsStyle.fontWeight },
  },
  width: { control: { type: "select", options: optionsStyle.width } },
  shadow: { control: { type: "select", options: optionsStyle.shadow } },
  border: { control: { type: "select", options: optionsStyle.border } },
  heigth: { control: { type: "select", options: optionsStyle.height } },
};