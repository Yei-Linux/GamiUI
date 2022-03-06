export const CustomTheme = `
import * as React from 'react';
  
// 1. import GamiUIProvider component
import { ThemeGamification,defaultTokens,defaultTheme,generatorComponentsTheme } from "@gamiui/standard";

const lightThemeComponents = generatorComponentsTheme(
    defaultTokens,
    defaultTheme.light
)

const customtheme = {
    tokens: defaultTokens,
    theme: {
      ...defaultTheme.light,
      primary: {
        ...defaultTheme.light.primary,
        jordyBlue: '#D9D7F1',
      },
    },
    componentsTheme: lightThemeComponents,
}
        
const App = ({ Component }) => {
  // 2. Use at the root of your app
  return (
    <ThemeGamification themeUI={customtheme}>
      <Component />
    </ThemeGamification>
  );
}`

export const CustomTokens = `
import * as React from 'react';
  
// 1. import GamiUIProvider component
import { ThemeGamification,defaultTokens,defaultTheme,generatorComponentsTheme } from "@gamiui/standard";

const lightThemeComponents = generatorComponentsTheme(
    defaultTokens,
    defaultTheme.light
)

const customtheme = {
    tokens: {
        ...defaultTokens,
        rounded: {
          none: '0',
          xs: '14px',
          sm: '20px',
          md: '30px',
          lg: '40px',
          full: '9999px',
        },
      },
    theme: defaultTheme.light,
    componentsTheme: lightThemeComponents,
}
        
const App = ({ Component }) => {
  // 2. Use at the root of your app
  return (
    <ThemeGamification themeUI={customtheme}>
      <Component />
    </ThemeGamification>
  );
}`

export const CustomComponentsTheme =`
import * as React from 'react';
  
// 1. import GamiUIProvider component
import { ThemeGamification,defaultTokens,defaultTheme,generatorComponentsTheme } from "@gamiui/standard";

const lightThemeComponents = generatorComponentsTheme(
    defaultTokens,
    defaultTheme.light
)

const customtheme = {
    tokens: defaultTokens,
    theme: defaultTheme.light,
    componentsTheme: {
      ...lightThemeComponents,
      button: {
        ...lightThemeComponents.button,
  
        primary: {
          bg: 'red',
          color: 'yellow',
          border: '0px',
        },
      },
    },
}
        
const App = ({ Component }) => {
  // 2. Use at the root of your app
  return (
    <ThemeGamification themeUI={customtheme}>
      <Component />
    </ThemeGamification>
  );
}`