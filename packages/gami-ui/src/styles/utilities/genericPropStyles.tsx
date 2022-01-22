import { css } from '@emotion/react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { IGenericPropStyles } from 'core/domain/interfaces/IStyles'
import { mixinBorderRadius } from 'styles/mixins/border'
import { mixinFontWeight, mixinTextAlign } from 'styles/mixins/fonts'
import { mixinHeight } from 'styles/mixins/height'
import { mixinShadow } from 'styles/mixins/shadow'
import { mixinWidth } from 'styles/mixins/width'
import { builderSpacersByDevice } from './spacersBuilderByDevice'

export const setGenericPropStyles = ({
  shadow,
  border,
  width,
  heigth,
  textAlign,
  fontWeight,
  padding,
  margin,
}: IGenericPropStyles) => css`
  ${shadow && mixinShadow(shadow)}
  ${border && mixinBorderRadius(border)}
    ${width && mixinWidth(width)}
    ${heigth && mixinHeight(heigth)}
    ${textAlign && mixinTextAlign(textAlign)}
    ${fontWeight && mixinFontWeight(fontWeight)}
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
