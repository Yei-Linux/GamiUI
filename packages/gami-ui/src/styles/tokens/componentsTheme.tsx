import { TThemeItem, TTokens } from "providers/ThemeGamification/ThemeGamification"

export const generatorComponentsTheme = (tokens: TTokens, colorsTheme: TThemeItem) => {
  return {
    card: {
      primary: {
        bg: colorsTheme.primary.jordyBlue,
        color: colorsTheme.neutral[800],
        border: tokens.spacing.border.none,
      },
      secondary: {
        bg: colorsTheme.neutral[800],
        color: colorsTheme.primary.jordyBlue,
        border: `${tokens.spacing.border.xs} solid ${colorsTheme.primary.jordyBlue}`,
      },
      tertiary: {
        bg: colorsTheme.primary.mediumPurple,
        color: colorsTheme.neutral[800],
        border: tokens.spacing.border.none,
      },
      cuaternary: {
        bg: colorsTheme.neutral[800],
        color: colorsTheme.primary.mediumPurple,
        border: `${tokens.spacing.border.xs} solid ${colorsTheme.primary.mediumPurple}`,
      },
      text: {
        bg: 'transparent',
        color: colorsTheme.neutral[100],
        border: tokens.spacing.border.none,
      },
      link: {
        bg: 'transparent',
        color: colorsTheme.neutral[100],
        border: tokens.spacing.border.none,
      },
      success: {
        bg: colorsTheme.neutral[800],
        color: colorsTheme.semantic.success,
        border: `${tokens.spacing.border.xs} solid ${colorsTheme.semantic.success}`,
      },
      warning: {
        bg: colorsTheme.neutral[800],
        color: colorsTheme.semantic.warning,
        border: `${tokens.spacing.border.xs} solid ${colorsTheme.semantic.warning}`,
      },
      danger: {
        bg: colorsTheme.neutral[800],
        color: colorsTheme.semantic.danger,
        border: `${tokens.spacing.border.xs} solid ${colorsTheme.semantic.danger}`,
      },
      info: {
        bg: colorsTheme.neutral[800],
        color: colorsTheme.semantic.info,
        border: `${tokens.spacing.border.xs} solid ${colorsTheme.semantic.info}`,
      },
      sky: {
        bg: colorsTheme.semantic.sky,
        color: colorsTheme.neutral[800],
        border: tokens.spacing.border.none,
      },
      skin: {
        bg: colorsTheme.semantic.skin,
        color: colorsTheme.neutral[800],
        border: tokens.spacing.border.none,
      },
      earth: {
        bg: colorsTheme.semantic.earth,
        color: colorsTheme.neutral[800],
        border: tokens.spacing.border.none,
      },
      spring: {
        bg: colorsTheme.semantic.spring,
        color: colorsTheme.neutral[800],
        border: tokens.spacing.border.none,
      },
      warm: {
        bg: colorsTheme.semantic.warm,
        color: colorsTheme.neutral[0],
        border: tokens.spacing.border.none,
      },
    },
    link: {
      sky: {
        bg: colorsTheme.semantic.sky,
        color: colorsTheme.neutral[800],
        border: tokens.spacing.border.none,
      },
      skin: {
        bg: colorsTheme.semantic.skin,
        color: colorsTheme.neutral[800],
        border: tokens.spacing.border.none,
      },
      earth: {
        bg: colorsTheme.semantic.earth,
        color: colorsTheme.neutral[800],
        border: tokens.spacing.border.none,
      },
      spring: {
        bg: colorsTheme.semantic.spring,
        color: colorsTheme.neutral[800],
        border: tokens.spacing.border.none,
      },
      primary: {
        bg: colorsTheme.primary.jordyBlue,
        color: colorsTheme.neutral[800],
        border: tokens.spacing.border.none,
      },
      secondary: {
        bg: 'transparent',
        color: colorsTheme.primary.jordyBlue,
        border: tokens.spacing.border.none,
      },
      tertiary: {
        bg: colorsTheme.secondary.nepal,
        color: colorsTheme.neutral[800],
        border: tokens.spacing.border.none,
      },
      cuaternary: {
        bg: colorsTheme.neutral[800],
        color: colorsTheme.secondary.nepal,
        border: tokens.spacing.border.none,
      },
      text: {
        bg: 'transparent',
        color: colorsTheme.neutral[100],
        border: tokens.spacing.border.none,
      },
      link: {
        bg: 'transparent',
        color: colorsTheme.neutral[100],
        border: tokens.spacing.border.none,
      },
      success: {
        bg: colorsTheme.neutral[800],
        color: colorsTheme.semantic.success,
        border: tokens.spacing.border.none,
      },
      warning: {
        bg: colorsTheme.neutral[800],
        color: colorsTheme.semantic.warning,
        border: tokens.spacing.border.none,
      },
      danger: {
        bg: colorsTheme.neutral[800],
        color: colorsTheme.semantic.danger,
        border: tokens.spacing.border.none,
      },
      info: {
        bg: colorsTheme.neutral[800],
        color: colorsTheme.semantic.info,
        border: tokens.spacing.border.none,
      },
      warm: {
        bg: colorsTheme.semantic.warm,
        color: colorsTheme.neutral[0],
        border: tokens.spacing.border.none,
      },
    },
    button: {
      sky: {
        bg: colorsTheme.semantic.sky,
        color: colorsTheme.neutral[800],
        border: tokens.spacing.border.none,
      },
      skin: {
        bg: colorsTheme.semantic.skin,
        color: colorsTheme.neutral[800],
        border: tokens.spacing.border.none,
      },
      earth: {
        bg: colorsTheme.semantic.earth,
        color: colorsTheme.neutral[800],
        border: tokens.spacing.border.none,
      },
      spring: {
        bg: colorsTheme.semantic.spring,
        color: colorsTheme.neutral[800],
        border: tokens.spacing.border.none,
      },
      primary: {
        bg: colorsTheme.primary.jordyBlue,
        color: colorsTheme.neutral[800],
        border: tokens.spacing.border.none,
      },
      secondary: {
        bg: colorsTheme.neutral[800],
        color: colorsTheme.primary.jordyBlue,
        border: `${tokens.spacing.border.xs} solid ${colorsTheme.primary.jordyBlue}`,
      },
      tertiary: {
        bg: colorsTheme.primary.mediumPurple,
        color: colorsTheme.neutral[800],
        border: tokens.spacing.border.none,
      },
      cuaternary: {
        bg: colorsTheme.neutral[800],
        color: colorsTheme.primary.mediumPurple,
        border: `${tokens.spacing.border.xs} solid ${colorsTheme.primary.mediumPurple}`,
      },
      text: {
        bg: 'transparent',
        color: colorsTheme.neutral[100],
        border: tokens.spacing.border.none,
      },
      link: {
        bg: 'transparent',
        color: colorsTheme.neutral[100],
        border: tokens.spacing.border.none,
      },
      success: {
        bg: colorsTheme.neutral[800],
        color: colorsTheme.semantic.success,
        border: `${tokens.spacing.border.xs} solid ${colorsTheme.semantic.success}`,
      },
      warning: {
        bg: colorsTheme.neutral[800],
        color: colorsTheme.semantic.warning,
        border: `${tokens.spacing.border.xs} solid ${colorsTheme.semantic.warning}`,
      },
      danger: {
        bg: colorsTheme.neutral[800],
        color: colorsTheme.semantic.danger,
        border: `${tokens.spacing.border.xs} solid ${colorsTheme.semantic.danger}`,
      },
      info: {
        bg: colorsTheme.neutral[800],
        color: colorsTheme.semantic.info,
        border: `${tokens.spacing.border.xs} solid ${colorsTheme.semantic.info}`,
      },
      warm: {
        bg: colorsTheme.semantic.warm,
        color: colorsTheme.neutral[0],
        border: tokens.spacing.border.none,
      },
    },
  }
}

export type TComponentsThemeItem = ReturnType<typeof generatorComponentsTheme>;