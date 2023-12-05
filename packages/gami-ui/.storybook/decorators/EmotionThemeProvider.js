import React from 'react'
import { ThemeProvider } from '@storybook/theming'

import ThemeGamification from '../../src/providers/ThemeGamification'
import { useStorybookTheme } from '../../src/hooks/useStorybookTheme'
import { DEFAULT_THEME_MODES } from '../../src/core/utils/constants'

const EmotionThemeProvider = (storyFn) => {
  const themeType = useStorybookTheme()

  return (
    <ThemeProvider theme={DEFAULT_THEME_MODES[themeType]}>
      <ThemeGamification disableDefaultFonts={false}>
        {storyFn()}
      </ThemeGamification>
    </ThemeProvider>
  )
}

export default EmotionThemeProvider
