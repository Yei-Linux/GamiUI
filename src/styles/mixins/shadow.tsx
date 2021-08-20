import { css } from '@emotion/react'
import { ShadowType } from 'core/domain/types'

export type TDynamicShadowTypeString = {
  [key in ShadowType]: string
}

const SHADOW_TYPE: TDynamicShadowTypeString = {
    NONE: 'left',
    SMALL: 'center',
    MEDIUM: 'right',
    LARGE: 'justify',
    XLARGE: 'justify',
}

export const mixinTextAlign = (shadowType: ShadowType) => css`
  box-shadow: ${SHADOW_TYPE[shadowType]};
`
