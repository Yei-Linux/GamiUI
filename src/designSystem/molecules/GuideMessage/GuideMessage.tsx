import React from "react";
import { IGeneralProps } from "../../../core/domain/interfaces/IGeneralProps";
import { GuidesNames } from "../../../core/domain/types";
import AnimatorGuide from "../../atoms/AnimatorGuide/AnimatorGuide";
import Message from "../../atoms/Message/Message";
import { GuideMessageWrapper } from "./GuideMessage.styles";

export interface GuideMessageProps extends IGeneralProps {
  /**
   * Guide Type
   */
  guideType: GuidesNames;
  /**
   * Message Text
   */
  message: string;
  /**
   * Message Direction
   */
  direction: "left" | "right";
  /**
   * Background
   */
  background: string;
}

const GuideMessage = ({
  guideType,
  message,
  direction,
  background,
  ...args
}: GuideMessageProps) => (
  <GuideMessageWrapper direction={direction} {...args}>
    <AnimatorGuide type={guideType} />
    <Message
      style={{ marginTop: "15px" }}
      text={message}
      direction={direction}
      background={background}
    />
  </GuideMessageWrapper>
);

GuideMessage.defaultProps = {
  direction: "left",
  guideType: "singer",
  background: "#7868e6",
};

export default GuideMessage;
