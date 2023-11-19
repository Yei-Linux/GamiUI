import {
  ShadowType,
  RoundedType,
  WidthType,
  HeightType,
  TextAlignType,
  FontWeightType,
} from 'core/domain/types'

export type TDesignTokens = {
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

export type TDesignUI = {
  /**
   * Custom Styles
   */
  style?: React.CSSProperties
  /**
   * Height Component
   */
  className?: string
}

export type TComponentEvents<T, S> = {
  onClick?: T
  onChange?: S
}
