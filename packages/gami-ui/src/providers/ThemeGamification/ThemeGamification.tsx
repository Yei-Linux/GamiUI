import React from 'react'
import { ThemeProvider } from '@emotion/react'
import DefaultStyles, { IDefaultStyles } from '../../styles/DefaultStyles'
import { tokens } from 'styles/tokens/tokens'
import { theme } from 'styles/tokens'

export type TThemeType = 'light' | 'dark'

export interface ThemeGamificationProps extends IDefaultStyles {
  children: React.ReactNode
  themeType?: TThemeType
  themeUI?: ITheme
}

type TTokens = typeof tokens
type TTheme = typeof theme

type TThemeItem = typeof theme.light

export interface ITheme {
  tokens: TTokens
  themes: TTheme
}

export interface ICustomTheme {
  tokens: TTokens
  theme: TThemeItem
}

const ThemeGamification = ({
  children,
  themeType = 'light',
  themeUI = {
    tokens: tokens,
    themes: theme,
  },
  disableDefaultFonts = false,
  disableDefaultClasses = false,
  disableDefaultNormalize = false,
}: ThemeGamificationProps) => {
  return (
    <ThemeProvider
      theme={{ tokens: themeUI.tokens, theme: themeUI.themes[themeType] }}
    >
      <DefaultStyles
        disableDefaultFonts={disableDefaultFonts}
        disableDefaultClasses={disableDefaultClasses}
        disableDefaultNormalize={disableDefaultNormalize}
      />
      {children}
    </ThemeProvider>
  )
}

export default ThemeGamification
