import React from 'react'
import {
  ShadowType,
  RoundedType,
  WidthType,
  HeightType,
  TextAlignType,
  FontWeightType,
} from 'core/domain/types'

export interface IGenericPropStyles {
  /**
   * Shadow Component
   */
  shadow?: ShadowType
  /**
   * Border Component
   */
  rounded?: RoundedType
  /**
   * Width Component
   */
  width?: WidthType
  /**
   * Height Component
   */
  height?: HeightType
  /**
   * Width Component
   */
  textAlign?: TextAlignType
  /**
   * Height Component
   */
  fontWeight?: FontWeightType
  /**
   * Padding Component
   */
  padding?: string
  /**
   * Margin Component
   */
  margin?: string
  /**
   * Size Component
   */
  size?: WidthType
}

export interface IStyles extends IGenericPropStyles {
  /**
   * Custom Styles
   */
  style?: React.CSSProperties

  /**
   * Height Component
   */
  className?: string
}
