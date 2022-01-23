import React from 'react'
import { css, Global } from '@emotion/react'
import useNormalize from './utilities/useNormalize'
import useClasses from './commons/useClasses'

export interface IDefaultStyles {
  disableDefaultFonts?: boolean
  disableDefaultClasses?: boolean
  disableDefaultNormalize?: boolean
}

const DefaultStyles = ({
  disableDefaultFonts = false,
  disableDefaultClasses = false,
  disableDefaultNormalize = false,
}: IDefaultStyles) => {
  const { generateClasses } = useClasses()
  const { normalizeGamiUI, normalizeGlobal, normalizeFonts } = useNormalize()

  return (
    <Global
      styles={() => css`
        ${!disableDefaultFonts && normalizeFonts()}
        ${!disableDefaultNormalize && normalizeGlobal()}
        ${!disableDefaultNormalize && normalizeGamiUI()}

        ${!disableDefaultClasses && generateClasses()}
      `}
    />
  )
}

export default DefaultStyles
