import React from "react";
import { IGeneralProps } from "../../../core/domain/interfaces/IGeneralProps";
import { GuidesNames } from "../../../core/domain/types";
import { AnimatorGuideImg } from "./AnimatorGuide.styles";
import { Guiders } from "./constants";

export interface AnimatorGuideProps extends IGeneralProps {
  /**
   * Guide Type
   */
  type: GuidesNames;
}

const AnimatorGuide = ({ type, ...args }: AnimatorGuideProps) => {
  return <AnimatorGuideImg imageProps={Guiders[type]} {...args} />;
};

AnimatorGuide.defaultProps = {
  type: "singer",
};

export default AnimatorGuide;
