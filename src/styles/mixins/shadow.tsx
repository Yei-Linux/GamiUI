import { css } from '@emotion/react'
import { ShadowType } from 'core/domain/types'
import { boxShadow } from 'styles/tokens/boxShadow'

export const mixinShadow = (shadowType: ShadowType) => css`
  box-shadow: ${boxShadow[shadowType]};
`
