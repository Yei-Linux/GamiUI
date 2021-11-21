import React from 'react'
import { normalize } from 'polished'
import { css, Global } from '@emotion/react'
import { font, sizes, spacing } from './tokens'
import { allCommonsClasses } from './commons'

const fonts = () => css`
  @import url('https://fonts.googleapis.com/css2?family=Mali:wght@300;400;600;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
`

const GlobalStyles = () => {
  return (
    <Global
      styles={() => css`
        ${fonts()}
        ${normalize()}
        ${allCommonsClasses()}

        html {
          height: ${sizes.height.full};
        }

        * {
          box-sizing: border-box;
          margin: ${spacing.margin.none};
          padding: ${spacing.padding.none};
        }

        body {
          font-family: ${font.family.mali};
          min-height: ${sizes.height.full};
        }

        #root {
          height: 100vh;
        }
      `}
    />
  )
}

export default GlobalStyles
