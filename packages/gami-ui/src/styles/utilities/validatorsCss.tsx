import { css } from '@emotion/react'

export const validatorProperty = (key: string, value?: string | null) => css`
  ${value &&
  css`
    ${`${key}: ${value}`}
  `}
`
