import { css } from '@emotion/react'
import { WidthType } from 'core/domain/types'
import { sizes } from 'styles/tokens/sizes'

export const mixinWidth = (width: WidthType) => css`
  width: ${sizes.width[width]};
`
