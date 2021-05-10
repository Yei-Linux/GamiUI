import React from "react";
import Input from "../Input";
import { IInput } from "../Input/Input";

const REGEX__NUMBER = /^[0-9]+$/;

export interface INumber extends IInput {}

const Number = ({ onChangeFormItem, ...args }: INumber) => {
  const handleTypying = (value: any) => {
    if (REGEX__NUMBER.test(value)) {
      onChangeFormItem(value);
    }
  };

  return <Input onChangeFormItem={handleTypying} {...args} />;
};

Number.defaultProps = {
  width: "NORMAL",
  heigth: "SMALL",
  border: "MEDIUM",
};

export default Number;
