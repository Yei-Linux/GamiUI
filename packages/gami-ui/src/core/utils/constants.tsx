import {
  defaultTheme,
  defaultTokens,
  generatorComponentsTheme,
} from '../../styles/tokens'

export const DESIGN_TYPES = {
  width: ['fit', 'auto', 'xs', 'sm', 'md', 'lg', 'full'] as const,
  height: ['auto', 'xs', 'sm', 'md', 'lg', 'full'] as const,
  border: ['none', 'xs', 'sm', 'md', 'lg', 'full'] as const,
  shadow: ['none', 'xs', 'sm', 'md', 'lg', 'full'] as const,
  textAlign: ['left', 'center', 'right', 'justify'] as const,
  fontWeight: [
    'light',
    'normal',
    'medium',
    'semibold',
    'bold',
    'extrabold',
    'black',
  ] as const,
}

export const REGEX_RULES = {
  CATCH_FIRST_LETTERS: /\b(\w)/g,
  FIND_CAPITAL_LETTERS: /(?=[A-Z])/,
  ONLY_NUMBERS: /^[0-9]+$/,
}

const lightThemeComponents = generatorComponentsTheme(
  defaultTokens,
  defaultTheme.light
)

const darkThemeComponents = generatorComponentsTheme(
  defaultTokens,
  defaultTheme.dark
)

export const DEFAULT_THEME_LIGHT_UI = {
  tokens: defaultTokens,
  theme: defaultTheme.light,
  componentsTheme: lightThemeComponents,
}

export const DEFAULT_THEME_DARK_UI = {
  tokens: defaultTokens,
  theme: defaultTheme.dark,
  componentsTheme: darkThemeComponents,
}

export const DEFAULT_THEME_MODES = {
  dark: DEFAULT_THEME_DARK_UI,
  light: DEFAULT_THEME_LIGHT_UI,
}

export const THEME_TOKENS_FIRST_VARIANT = {
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

export const THEME_TOKENS_SECOND_VARIANT = {
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

export const THEME_TOKENS_THIRD_VARIANT = {
  tokens: {
    ...defaultTokens,
    borderRadius: {
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
