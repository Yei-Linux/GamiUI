import React, { useState } from "react";
import { IGeneralProps } from "../../../core/domain/interfaces/IGeneralProps";
import { SwitchBall, SwitchWrapper } from "./Switch.styles";

export interface ISwitch extends IGeneralProps {
  defaultChecked: boolean;
  /**
   * Function to detect changes
   */
  onChangeFormItem?: any;
}

const Switch = ({ onChangeFormItem, defaultChecked, ...args }: ISwitch) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const toggle = () => {
    onChangeFormItem(!isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <SwitchWrapper isChecked={isChecked} {...args} onClick={() => toggle()}>
      <SwitchBall isChecked={isChecked} />
    </SwitchWrapper>
  );
};

Switch.defaultProps = {
  defaultChecked: true,
  border: "ROUNDED",
  width: "NORMAL",
};

export default Switch;
