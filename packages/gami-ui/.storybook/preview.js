import React from 'react'

import { addDecorator } from '@storybook/react'
import EmotionThemeProvider from './decorators/EmotionThemeProvider'

import {
  DEFAULT_THEME_LIGHT_UI,
  DEFAULT_THEME_DARK_UI,
} from '../src/core/utils/constants'

addDecorator(EmotionThemeProvider)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  exportedParameter: 'exportedParameter',
  darkMode: {
    stylePreview: true,
    current: 'light',
    light: DEFAULT_THEME_LIGHT_UI,
    dark: DEFAULT_THEME_DARK_UI,
  },
}
