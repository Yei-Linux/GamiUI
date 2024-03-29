import {
  defaultTheme,
  defaultTokens,
  generatorComponentsTheme,
} from '../../styles/tokens'

export const DYNAMIC_DESIGN_TYPES = ['padding', 'margin'] as const

export const DESIGN_TYPES = {
  size: ['xs', 'sm', 'md', 'lg', 'full', 'fit', 'auto'] as const,
  width: ['xs', 'sm', 'md', 'lg', 'full', 'fit', 'auto'] as const,
  height: ['xs', 'sm', 'md', 'lg', 'full', 'auto'] as const,
  rounded: ['none', 'xs', 'sm', 'md', 'lg', 'full'] as const,
  shadow: [
    'none',
    'xs',
    'sm',
    'md',
    'lg',
    'full',
    'primary',
    'secondary',
    'tertiary',
    'cuaternary',
    'success',
    'warning',
    'danger',
    'info',
  ] as const,
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
} as const

export const REGEX_RULES = {
  CATCH_TWO_FIRST_CHARACTERS: /^[\s\S]{0,2}/i,
  CATCH_THREE_FIRST_CHARACTERS: /^[\s\S]{0,3}/g,
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
