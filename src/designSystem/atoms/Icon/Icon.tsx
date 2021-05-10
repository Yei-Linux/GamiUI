import React, { useEffect, useState } from "react";
import { IGeneralProps } from "../../../core/domain/interfaces/IGeneralProps";
import { IconNames } from "../../../core/domain/types";
import { IconsPack } from "./constants";
import { IconWrapper } from "./Icon.styles";

interface IIcon extends IGeneralProps {
  /**
   * Fill Icon
   */
  fill: string;
  /**
   * Name
   */
  name: IconNames;
  /**
   * Size icon
   */
  size: string;
}

const Svg = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  width: string;
  height: string;
  viewBox: string;
  fill: string;
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      {children}
    </svg>
  );
};

const Icon = ({ fill, name, size, ...args }: IIcon) => {
  const [icon, setIcon] = useState(IconsPack[name]);

  useEffect(() => {
    setIcon(IconsPack[name]);
  }, [name]);

  return (
    <IconWrapper {...args}>
      <Svg fill={fill} width={size} height={size} viewBox={icon.viewBox}>
        {icon.svg}
      </Svg>
    </IconWrapper>
  );
};

Icon.defaultProps = {
  fill: "none",
  name: "facebook",
  size: "16px",
};

export default Icon;