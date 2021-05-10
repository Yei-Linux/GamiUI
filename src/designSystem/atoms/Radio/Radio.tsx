import React, { useContext, useEffect } from "react";
import RadioProvider from "../../../context/RadioProvider";
import context from "../../../context/RadioProvider/context";
import { IGeneralProps } from "../../../core/domain/interfaces/IGeneralProps";
import {
  RadioCheck,
  RadioContainer,
  RadioGroupWrapper,
  RadioInner,
  RadioInput,
  RadioText,
} from "./Radio.styles";

interface IRadioItem {
  children: string;
  value: string;
  isChecked?: boolean;
}

export interface IRadio extends IGeneralProps {
  /**
   * Function to detect changes
   */
  onChangeFormItem?: any;
  /**
   * Children Element
   */
  children: React.ReactNode[];
  /**
   * Function to detect changes
   */
  name?: any;
  /**
   * Function to detect changes
   */
  value?: any;
}

const RadioContent = ({ children, onChangeFormItem, ...args }: IRadio) => {
  const { radioSelected } = useContext(context);

  useEffect(() => {
    onChangeFormItem(radioSelected);
  }, [radioSelected]);

  return <RadioGroupWrapper {...args}>{children}</RadioGroupWrapper>;
};

const Radio = ({ children, ...args }: IRadio) => {
  return (
    <RadioProvider>
      <RadioContent {...args}>{children}</RadioContent>
    </RadioProvider>
  );
};

Radio.Item = ({ children, value, isChecked = false }: IRadioItem) => {
  const { radioSelected, setRadioSelected } = useContext(context);

  useEffect(() => {
    isChecked && handleRadioChange();
  }, []);

  const handleRadioChange = () => setRadioSelected({ text: children, value });

  return (
    <RadioContainer>
      <RadioCheck>
        <RadioInput onClick={handleRadioChange} />
        <RadioInner isChecked={radioSelected?.value == value} />
      </RadioCheck>
      <RadioText>{children}</RadioText>
    </RadioContainer>
  );
};

Radio.defaultProps = {
  width: "NORMAL",
  heigth: "SMALL",
  border: "MEDIUM",
};

export default Radio;
