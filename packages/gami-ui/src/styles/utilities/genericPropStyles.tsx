import { css } from '@emotion/react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { IGenericPropStyles } from 'core/domain/interfaces/IStyles'
import { InheritStyleComponent } from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { mixinBorderRadius } from 'styles/mixins/border'
import { mixinFontWeight, mixinTextAlign } from 'styles/mixins/fonts'
import { mixinHeight } from 'styles/mixins/height'
import { mixinShadow } from 'styles/mixins/shadow'
import { mixinWidth } from 'styles/mixins/width'
import { builderSpacersByDevice } from './spacersBuilderByDevice'

export const setGenericPropStyles = (
  theme: ICustomTheme,
  {
    shadow,
    border,
    width,
    heigth,
    textAlign,
    fontWeight,
    padding,
    margin,
  }: IGenericPropStyles,
  component: InheritStyleComponent = null
) => css`
  ${shadow && mixinShadow(theme, shadow)}
  ${border && mixinBorderRadius(theme, border)}
    ${width && mixinWidth(theme, width, component)}
    ${heigth && mixinHeight(theme, heigth, component)}
    ${textAlign && mixinTextAlign(theme, textAlign)}
    ${fontWeight && mixinFontWeight(theme, fontWeight)}
    ${padding && builderSpacersByDevice(padding, 'padding')}
    ${margin && builderSpacersByDevice(margin, 'margin')}
`

interface IDynamicPropStyles {
  [key: string]: string | React.CSSProperties | React.MouseEventHandler<unknown>
}

export const getGenericPropStyles = ({
  shadow,
  border,
  width,
  heigth,
  size,
  textAlign,
  fontWeight,
  padding,
  margin,
  style,
  className,
  onClick,
  onChange,
}: IGeneralProps) => {
  const propStyles: IDynamicPropStyles = {}

  if (shadow) propStyles['$shadow'] = shadow
  if (border) propStyles['$border'] = border
  if (width) propStyles['$width'] = width
  if (heigth) propStyles['$heigth'] = heigth
  if (size) propStyles['$width'] = size
  if (size) propStyles['$heigth'] = size
  if (textAlign) propStyles['$textAlign'] = textAlign
  if (fontWeight) propStyles['$fontWeight'] = fontWeight
  if (padding) propStyles['$padding'] = padding
  if (margin) propStyles['$margin'] = margin

  if (style) propStyles['style'] = style
  if (className) propStyles['className'] = className

  if (onClick) propStyles['onClick'] = onClick
  if (onChange) propStyles['onChange'] = onChange

  return propStyles
}
