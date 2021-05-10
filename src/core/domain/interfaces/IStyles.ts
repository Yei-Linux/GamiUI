import React from "react";
import { ShadowType, BorderType, WidthType, HeightType, TextAlignType, FontWeightType } from "../types";

export interface IStyles {
  /**
   * Custom Styles
   */
  style?: React.CSSProperties;
  /**
   * Shadow Component
   */
  shadow?: ShadowType;
  /**
   * Border Component
   */
  border?: BorderType;
  /**
   * Width Component
   */
  width?: WidthType;
  /**
   * Height Component
   */
  heigth?: HeightType
  /**
   * Width Component
   */;
  textAlign?: TextAlignType;
  /**
   * Height Component
   */
  fontWeight?: FontWeightType;
}
