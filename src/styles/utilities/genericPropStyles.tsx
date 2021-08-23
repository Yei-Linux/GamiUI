import { css } from '@emotion/react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { IGenericPropStyles } from 'core/domain/interfaces/IStyles'
import { mixinBorderRadius } from 'styles/mixins/border'
import { mixinFontWeight, mixinTextAlign } from 'styles/mixins/fonts'
import { mixinHeight } from 'styles/mixins/height'
import { mixinShadow } from 'styles/mixins/shadow'
import { mixinWidth } from 'styles/mixins/width'

export const setGenericPropStyles = ({
  shadow,
  border,
  width,
  heigth,
  textAlign,
  fontWeight,
}: IGenericPropStyles) => css`
  ${shadow && mixinShadow(shadow)}
  ${border && mixinBorderRadius(border)}
    ${width && mixinWidth(width)}
    ${heigth && mixinHeight(heigth)}
    ${textAlign && mixinTextAlign(textAlign)}
    ${fontWeight && mixinFontWeight(fontWeight)}
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
  style,
  className,
  onClick,
  onChange,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
}: IGeneralProps) => {
  const propStyles: IDynamicPropStyles = {}

  if (shadow) propStyles['$shadow'] = shadow
  if (border) propStyles['$border'] = border
  if (width) propStyles['$width'] = width
  if (heigth) propStyles['$heigth'] = heigth
  if (textAlign) propStyles['$textAlign'] = textAlign
  if (fontWeight) propStyles['$fontWeight'] = fontWeight

  if (style) propStyles['style'] = style
  if (className) propStyles['className'] = className

  if (onClick) propStyles['onClick'] = onClick
  if (onChange) propStyles['onChange'] = onChange
  if (onMouseEnter) propStyles['onMouseEnter'] = onMouseEnter
  if (onMouseLeave) propStyles['onMouseLeave'] = onMouseLeave
  if (onMouseMove) propStyles['onMouseMove'] = onMouseMove

  return propStyles
}
