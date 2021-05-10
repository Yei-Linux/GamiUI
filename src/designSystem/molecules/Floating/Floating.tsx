import React, { useRef, useState } from "react";
import { IGeneralProps } from "../../../core/domain/interfaces/IGeneralProps";
import Icon from "../../atoms/Icon";
import { FloatingHeader, FloatingWrapper } from "./Floating.styles";

export interface FloatingProps extends IGeneralProps {
  children: React.ReactNode;
  direction: "left" | "top" | "right" | "bottom";
}

const Floating = ({ children, direction, ...args }: FloatingProps) => {
  const refFloating: any = useRef();
  const [position, setPosition] = useState("0px");

  return (
    <FloatingWrapper
      ref={refFloating}
      position={position}
      direction={direction}
      {...args}
    >
      <FloatingHeader>
        <Icon
          fill="#7868e6"
          name="close"
          size="15px"
          onClick={() => {
            setPosition(`-${refFloating?.current.clientWidth.toString()}px`);
          }}
        />
      </FloatingHeader>

      {children}
    </FloatingWrapper>
  );
};

Floating.defaultProps = {
  direction: "right",
  shadow: "MEDIUM",
};

export default Floating;
