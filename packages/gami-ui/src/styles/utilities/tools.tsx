import { SerializedStyles, css } from '@emotion/react'

export const compose = (cssFuncs: Array<SerializedStyles>) => css`
  ${cssFuncs.map((func) => func)};
`
