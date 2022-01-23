import React from 'react'
import { ThemeProvider } from '@emotion/react'
import DefaultStyles, { IDefaultStyles } from '../../styles/DefaultStyles'
import { defaultTokens } from 'styles/tokens/tokens'
import { defaultTheme } from 'styles/tokens'
import {
  generatorComponentsTheme,
  TComponentsThemeItem,
} from 'styles/tokens/componentsTheme'

export type TThemeType = 'light' | 'dark'

export interface ThemeGamificationProps extends IDefaultStyles {
  children: React.ReactNode
  themeType?: TThemeType
  themeUI?: ITheme
}

export type TTokens = typeof defaultTokens
export type TTheme = typeof defaultTheme

export type TThemeItem = typeof defaultTheme.light

export interface IComponentsTheme {
  dark: TComponentsThemeItem
  light: TComponentsThemeItem
}

export interface ITheme {
  tokens: TTokens
  themes: TTheme
  componentsThemes?: IComponentsTheme
}

export interface ICustomTheme {
  tokens: TTokens
  theme: TThemeItem
  componentsTheme?: TComponentsThemeItem
}

const ThemeGamification = ({
  children,
  themeType = 'light',
  themeUI = {
    tokens: defaultTokens,
    themes: defaultTheme,
  },
  disableDefaultFonts = false,
  disableDefaultClasses = false,
  disableDefaultNormalize = false,
}: ThemeGamificationProps) => {
  return (
    <ThemeProvider
      theme={{
        tokens: themeUI.tokens,
        theme: themeUI.themes[themeType],
        componentsTheme: themeUI?.componentsThemes
          ? themeUI.componentsThemes[themeType]
          : generatorComponentsTheme(themeUI.tokens, themeUI.themes[themeType]),
      }}
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
