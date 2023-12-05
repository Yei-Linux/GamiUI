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

export interface IDynamicPropStyles {
  [key: string]: string | React.CSSProperties | React.MouseEventHandler<unknown>
}

export const setDesignCss = (
  theme: ICustomTheme,
  design: IGenericPropStyles,
  component: InheritStyleComponent = null
) => css`
  ${design.shadow && mixinShadow(theme, design.shadow)}
  ${design.rounded && mixinRounded(theme, design.rounded)}
    ${design.width && mixinWidth(theme, design.width, component)}
    ${design.height && mixinHeight(theme, design.height, component)}
    ${design.textAlign && mixinTextAlign(theme, design.textAlign)}
    ${design.fontWeight && mixinFontWeight(theme, design.fontWeight)}
    ${design.padding && builderSpacersByDevice(design.padding, 'padding')}
    ${design.margin && builderSpacersByDevice(design.margin, 'margin')}
`

export const getDesignProps = ({
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
  onMouseEnter,
  onMouseLeave,
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
  if (onMouseEnter) propStyles['onMouseEnter'] = onMouseEnter
  if (onMouseLeave) propStyles['onMouseLeave'] = onMouseLeave

  return propStyles
}
