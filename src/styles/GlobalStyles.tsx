import React from 'react'
import { normalize } from 'polished'
import { typography } from './theme'
import { fonts } from './utilities/fonts'
import { css, Global } from '@emotion/react'

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={() => css`
        ${fonts()}
        ${normalize()}

        html {
          height: 100%;
        }

        * {
          box-sizing: border-box;
          margin: 0px;
          padding: 0px;
        }

        body {
          font-family: ${typography.type.main};
          min-height: 100%;
        }

        #root {
          height: 100vh;
        }
      `}
    />
  )
}

export default GlobalStyles
