import { css } from '@emotion/react'
import { TextAlignType } from 'core/domain/types'

export type TDynamicTextAlignString = {
  [key in TextAlignType]: string
}

const TEXTALIGN: TDynamicTextAlignString = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
  JUSTIFY: 'justify',
}

export const mixinTextAlign = (textAlign: TextAlignType) => css`
  text-align: ${TEXTALIGN[textAlign]};
`
