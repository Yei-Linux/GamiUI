import { css, useTheme } from '@emotion/react'

import { normalize } from 'polished'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'

const useNormalize = () => {
  const {
    tokens: { sizes, spacing, font },
  } = useTheme() as ICustomTheme

  const normalizeGamiUI = () => css`
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

      transition-duration: 0.2s;
      transition-property: background-color, color;
    }

    #root {
      height: 100vh;
    }
  `

  const normalizeGlobal = () => normalize()

  const normalizeFonts = () => css`
    @import url('https://fonts.googleapis.com/css2?family=Mali:wght@300;400;600;700;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
  `

  return { normalizeGamiUI, normalizeGlobal, normalizeFonts }
}

export default useNormalize
