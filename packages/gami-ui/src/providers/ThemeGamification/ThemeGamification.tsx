import React from 'react'
import { ThemeProvider, CacheProvider } from '@emotion/react'
import { prefixer } from 'stylis'
import createCache from '@emotion/cache'
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

export type TTokensSizeComponents = typeof defaultTokens.sizes.components

export type TTokensKeySizeComponents = keyof TTokensSizeComponents

export interface IComponentSize {
  width: string
  height: string
}

export type TTokens = typeof defaultTokens
export type TTheme = typeof defaultTheme

export type TThemeItem = typeof defaultTheme.light

export interface IComponentsTheme {
  dark: TComponentsThemeItem
  light: TComponentsThemeItem
}

export interface ICustomTheme {
  tokens: TTokens
  theme: TThemeItem
  componentsTheme?: TComponentsThemeItem
}

export interface ITheme {
  tokens: TTokens
  themes: TTheme
  componentsThemes?: IComponentsTheme
}

const myCache = createCache({
  key: 'gamiui',
  stylisPlugins: [
    // has to be included manually when customizing `stylisPlugins` if you want
    // to have vendor prefixes added automatically
    prefixer,
  ],
})

const ThemeGamification = ({
  children,
  themeType = 'light',
  themeUI = {
    tokens: defaultTokens,
    themes: defaultTheme,
  },
  disableDefaultFonts = true,
  disableDefaultClasses = false,
  disableDefaultNormalize = false,
}: ThemeGamificationProps) => {
  return (
    <CacheProvider value={myCache}>
      <ThemeProvider
        theme={{
          tokens: themeUI.tokens,
          theme: themeUI.themes[themeType],
          componentsTheme: themeUI?.componentsThemes
            ? themeUI.componentsThemes[themeType]
            : generatorComponentsTheme(
                themeUI.tokens,
                themeUI.themes[themeType]
              ),
        }}
      >
        <DefaultStyles
          disableDefaultFonts={disableDefaultFonts}
          disableDefaultClasses={disableDefaultClasses}
          disableDefaultNormalize={disableDefaultNormalize}
        />
        {children}
      </ThemeProvider>
    </CacheProvider>
  )
}

export default ThemeGamification
