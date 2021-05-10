import React, { useState } from "react";
import Icon from "../Icon";
import Input, { IInput } from "../Input/Input";

export interface IPassword extends IInput {
  iconVisible: React.ReactNode;
  iconHide: React.ReactNode;
}
const Password = ({ iconHide, iconVisible, ...args }: IPassword) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => setIsVisible(!isVisible);

  const toggleType = () => (isVisible ? "input" : "password");

  const renderIconPass = () => (
    <div onClick={() => handleToggle()}>
      {isVisible ? iconVisible : iconHide}
    </div>
  );

  return <Input type={toggleType()} prefix={renderIconPass()} {...args} />;
};

export default Password;

Password.defaultProps = {
  positionPrefix: "right",
  iconVisible: <Icon fill="red" size="30px" name="openeye" />,
  iconHide: <Icon fill="blue" size="30px" name="closeeye" />,
  width: "NORMAL",
  heigth: "SMALL",
  border: "MEDIUM",
};
