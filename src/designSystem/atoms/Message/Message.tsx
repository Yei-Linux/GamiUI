import React from "react";
import { IGeneralProps } from "../../../core/domain/interfaces/IGeneralProps";
import { MessageWrapper } from "./Message.styles";

export interface MessageProps extends IGeneralProps {
  /**
   * Message Text
   */
  text: string;
  /**
   * Message Direction
   */
  direction: "left" | "right";
  /**
   * Background
   */
  background: string;
}

const Message = ({ text, direction, background, ...args }: MessageProps) => (
  <MessageWrapper background={background} direction={direction} {...args}>
    {text}
  </MessageWrapper>
);

Message.defaultProps = {
  text: "Hola Bienvenido a nuestra app!",
  direction: "left",
  background: "#7868e6",
};

export default Message;
