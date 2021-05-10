import React, { useContext, useEffect, useRef, useState } from "react";
import SelectProvider from "../../../context/SelectProvider";
import context from "../../../context/SelectProvider/context";
import useClickOutside from "../../../hooks/useClickOutside";
import Input from "../Input";
import { IInput } from "../Input/Input";
import {
  OptionWrapper,
  Selectinput,
  SelectOptionsWrapper,
  SelectWrapper,
} from "./Select.styles";

export interface SelectProps extends IInput {
  /**
   * Children Element
   */
  children?: React.ReactNode[];
  /**
   * Is basic select
   */
  isBasic?: boolean;
}

const SelectContent = ({ children, isBasic, ...args }: SelectProps) => {
  const selectReference: any = useRef();
  const [isToggle, setIsToggle] = useState(false);

  const { optionSelected } = useContext(context);

  useClickOutside({
    ref: selectReference,
    handleDoAction: () => setIsToggle(false),
  });

  useEffect(()=>{
    args.onChangeFormItem(optionSelected)
  },[optionSelected])

  const handleInputClick = (): void => setIsToggle(!isToggle);

  return (
    <SelectWrapper ref={selectReference}>
      <Selectinput onClick={handleInputClick}>
        <Input readOnly={isBasic} {...args} value={optionSelected?.text} />
      </Selectinput>
      <SelectOptionsWrapper isToggle={isToggle}>
        {children}
      </SelectOptionsWrapper>
    </SelectWrapper>
  );
};

const Select = ({ children, isBasic, ...args }: SelectProps) => {
  return (
    <SelectProvider>
      <SelectContent children={children} isBasic={isBasic} {...args} />
    </SelectProvider>
  );
};

Select.Option = ({ children, value }: { children: string; value: string }) => {
  const { setOptionSelected } = useContext(context);
  const handleClickOption = () => setOptionSelected({ value, text: children });
  return <OptionWrapper onClick={handleClickOption}>{children}</OptionWrapper>;
};

Select.defaultProps = {
  isBasic: true,
  width: "NORMAL",
  heigth: "SMALL",
  border: "MEDIUM",
};

export default Select;
