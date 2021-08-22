import { css } from '@emotion/react'
import { HeightType } from 'core/domain/types'
import { sizes } from 'styles/tokens/sizes'

export const mixinHeight = (height: HeightType) => css`
  height: ${sizes.height[height]};
`
