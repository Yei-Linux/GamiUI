import React from 'react'
import { Global, css } from '@emotion/core'
import { normalize } from 'polished'
import { typography } from './theme'
import { fonts } from './utilities/fonts'

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={() => css`
        ${normalize()}
        ${fonts()}

        body {
          font-family: ${typography.type.primary};
          box-sizing: border-box;
          margin: 0px;
          padding: 0px;
        }
      `}
    />
  )
}

export default GlobalStyles
