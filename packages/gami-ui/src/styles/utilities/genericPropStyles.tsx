import { css } from '@emotion/react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { IGenericPropStyles } from 'core/domain/interfaces/IStyles'
import { InheritStyleComponent } from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { mixinRounded } from 'styles/mixins/rounded'
import { mixinFontWeight, mixinTextAlign } from 'styles/mixins/fonts'
import { mixinHeight } from 'styles/mixins/height'
import { mixinShadow } from 'styles/mixins/shadow'
import { mixinWidth } from 'styles/mixins/width'
import { builderSpacersByDevice } from './spacersBuilderByDevice'

export const setGenericPropStyles = (
  theme: ICustomTheme,
  {
    shadow,
    rounded,
    width,
    height,
    textAlign,
    fontWeight,
    padding,
    margin,
  }: IGenericPropStyles,
  component: InheritStyleComponent = null
) => css`
  ${shadow && mixinShadow(theme, shadow)}
  ${rounded && mixinRounded(theme, rounded)}
    ${width && mixinWidth(theme, width, component)}
    ${height && mixinHeight(theme, height, component)}
    ${textAlign && mixinTextAlign(theme, textAlign)}
    ${fontWeight && mixinFontWeight(theme, fontWeight)}
    ${padding && builderSpacersByDevice(padding, 'padding')}
    ${margin && builderSpacersByDevice(margin, 'margin')}
`

interface IDynamicPropStyles {
  [key: string]:
    | string
    | React.CSSProperties
    | React.MouseEventHandler<unknown>
}

export const getGenericPropStyles = ({
  shadow,
  rounded,
  width,
  height,
  size,
  textAlign,
  fontWeight,
  padding,
  margin,
  style,
  onClick,
  onChange,
}: IGeneralProps) => {
  const propStyles: IDynamicPropStyles = {}

  if (shadow) propStyles['$shadow'] = shadow
  if (rounded) propStyles['$rounded'] = rounded
  if (width) propStyles['$width'] = width
  if (height) propStyles['$height'] = height
  if (size) propStyles['$width'] = size
  if (size) propStyles['$height'] = size
  if (textAlign) propStyles['$textAlign'] = textAlign
  if (fontWeight) propStyles['$fontWeight'] = fontWeight
  if (padding) propStyles['$padding'] = padding
  if (margin) propStyles['$margin'] = margin

  if (style) propStyles['style'] = style

  if (onClick) propStyles['onClick'] = onClick
  if (onChange) propStyles['onChange'] = onChange

  return propStyles
}
