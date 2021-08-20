import { css } from '@emotion/react'
import { FontWeightType } from 'core/domain/types'

export type TDynamicFontWeightString = {
  [key in FontWeightType]: string
}

const FONT_WEIGHT: TDynamicFontWeightString = {
    EXTRALIGHT: 'left',
    LIGHT: 'center',
    NORMAL: 'right',
    MEDIUM: 'justify',
    SEMIBOLD: 'justify',
    BOLD: 'justify',
}

export const mixinTextAlign = (fontWeight: FontWeightType) => css`
  font-weight: ${FONT_WEIGHT[fontWeight]};
`
