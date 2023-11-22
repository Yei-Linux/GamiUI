import { css } from '@emotion/react'

export const validProp = (
  key: string,
  value?: string | null,
  isApply = true
) => css`
  ${value &&
  value !== undefined &&
  value !== '' &&
  isApply &&
  css`
    ${`${key}: ${value}`}
  `}
`
