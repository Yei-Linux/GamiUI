import { css } from '@emotion/react'

export const validatorProperty = (
  key: string,
  value?: string | null,
  isApply = true
) => css`
  ${value &&
  isApply &&
  css`
    ${`${key}: ${value}`}
  `}
`
