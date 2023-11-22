import {
  ShadowType,
  RoundedType,
  WidthType,
  HeightType,
  TextAlignType,
  FontWeightType,
  InheritStyleComponent,
} from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export type TWithGlobalStylesUI = {
  $shadow?: ShadowType
  $rounded?: RoundedType
  $width?: WidthType
  $height?: HeightType
  $textAlign?: TextAlignType
  $fontWeight?: FontWeightType
  $padding?: string
  $margin?: string
  theme?: ICustomTheme
}
export const withGlobalStylesUI =
  ({
    theme,
    $shadow,
    $rounded,
    $width,
    $height,
    $textAlign,
    $fontWeight,
    $margin,
    $padding,
  }: TWithGlobalStylesUI) =>
  (component?: InheritStyleComponent) =>
    theme &&
    setGenericPropStyles(
      theme,
      {
        shadow: $shadow,
        rounded: $rounded,
        width: $width,
        height: $height,
        textAlign: $textAlign,
        fontWeight: $fontWeight,
        padding: $padding,
        margin: $margin,
      },
      component
    )
