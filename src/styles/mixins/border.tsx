import { css } from '@emotion/react'
import { BorderType } from 'core/domain/types'
import { borderRadius } from 'styles/tokens/borderRadius'

export const mixinBorderRadius = (border: BorderType) => css`
  border-radius: ${borderRadius[border]};
`
