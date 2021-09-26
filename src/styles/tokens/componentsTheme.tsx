import { spacing } from './spacing'
import { theme } from './theme'

export const componentsTheme = (currentTheme: 'light' | 'dark') => {
  const themeSelected = theme[currentTheme]

  return {
    card: {
      primary: {
        bg: themeSelected.primary.jordyBlue,
        color: themeSelected.neutral[800],
        border: spacing.border.none,
      },
      secondary: {
        bg: themeSelected.neutral[800],
        color: themeSelected.primary.jordyBlue,
        border: `${spacing.border.xs} solid ${themeSelected.primary.jordyBlue}`,
      },
      tertiary: {
        bg: themeSelected.primary.mediumPurple,
        color: themeSelected.neutral[800],
        border: spacing.border.none,
      },
      cuaternary: {
        bg: themeSelected.neutral[800],
        color: themeSelected.primary.mediumPurple,
        border: `${spacing.border.xs} solid ${themeSelected.primary.mediumPurple}`,
      },
      text: {
        bg: 'transparent',
        color: themeSelected.neutral[100],
        border: spacing.border.none,
      },
      link: {
        bg: 'transparent',
        color: themeSelected.neutral[100],
        border: spacing.border.none,
      },
      success: {
        bg: themeSelected.neutral[800],
        color: themeSelected.semantic.success,
        border: `${spacing.border.xs} solid ${themeSelected.semantic.success}`,
      },
      warning: {
        bg: themeSelected.neutral[800],
        color: themeSelected.semantic.warning,
        border: `${spacing.border.xs} solid ${themeSelected.semantic.warning}`,
      },
      danger: {
        bg: themeSelected.neutral[800],
        color: themeSelected.semantic.danger,
        border: `${spacing.border.xs} solid ${themeSelected.semantic.danger}`,
      },
      info: {
        bg: themeSelected.neutral[800],
        color: themeSelected.semantic.info,
        border: `${spacing.border.xs} solid ${themeSelected.semantic.info}`,
      },
      sky: {
        bg: themeSelected.semantic.sky,
        color: themeSelected.neutral[800],
        border: spacing.border.none,
      },
      skin: {
        bg: themeSelected.semantic.skin,
        color: themeSelected.neutral[800],
        border: spacing.border.none,
      },
      earth: {
        bg: themeSelected.semantic.earth,
        color: themeSelected.neutral[800],
        border: spacing.border.none,
      },
      spring: {
        bg: themeSelected.semantic.spring,
        color: themeSelected.neutral[800],
        border: spacing.border.none,
      },
      warm: {
        bg: themeSelected.semantic.warm,
        color: themeSelected.neutral[0],
        border: spacing.border.none,
      },
    },
    link: {
      sky: {
        bg: themeSelected.semantic.sky,
        color: themeSelected.neutral[800],
        border: spacing.border.none,
      },
      skin: {
        bg: themeSelected.semantic.skin,
        color: themeSelected.neutral[800],
        border: spacing.border.none,
      },
      earth: {
        bg: themeSelected.semantic.earth,
        color: themeSelected.neutral[800],
        border: spacing.border.none,
      },
      spring: {
        bg: themeSelected.semantic.spring,
        color: themeSelected.neutral[800],
        border: spacing.border.none,
      },
      primary: {
        bg: themeSelected.primary.jordyBlue,
        color: themeSelected.neutral[800],
        border: spacing.border.none,
      },
      secondary: {
        bg: 'transparent',
        color: themeSelected.primary.jordyBlue,
        border: spacing.border.none,
      },
      tertiary: {
        bg: themeSelected.secondary.nepal,
        color: themeSelected.neutral[800],
        border: spacing.border.none,
      },
      cuaternary: {
        bg: themeSelected.neutral[800],
        color: themeSelected.secondary.nepal,
        border: spacing.border.none,
      },
      text: {
        bg: 'transparent',
        color: themeSelected.neutral[100],
        border: spacing.border.none,
      },
      link: {
        bg: 'transparent',
        color: themeSelected.neutral[100],
        border: spacing.border.none,
      },
      success: {
        bg: themeSelected.neutral[800],
        color: themeSelected.semantic.success,
        border: spacing.border.none,
      },
      warning: {
        bg: themeSelected.neutral[800],
        color: themeSelected.semantic.warning,
        border: spacing.border.none,
      },
      danger: {
        bg: themeSelected.neutral[800],
        color: themeSelected.semantic.danger,
        border: spacing.border.none,
      },
      info: {
        bg: themeSelected.neutral[800],
        color: themeSelected.semantic.info,
        border: spacing.border.none,
      },
      warm: {
        bg: themeSelected.semantic.warm,
        color: themeSelected.neutral[0],
        border: spacing.border.none,
      },
    },
    button: {
      sky: {
        bg: themeSelected.semantic.sky,
        color: themeSelected.neutral[800],
        border: spacing.border.none,
      },
      skin: {
        bg: themeSelected.semantic.skin,
        color: themeSelected.neutral[800],
        border: spacing.border.none,
      },
      earth: {
        bg: themeSelected.semantic.earth,
        color: themeSelected.neutral[800],
        border: spacing.border.none,
      },
      spring: {
        bg: themeSelected.semantic.spring,
        color: themeSelected.neutral[800],
        border: spacing.border.none,
      },
      primary: {
        bg: themeSelected.primary.jordyBlue,
        color: themeSelected.neutral[800],
        border: spacing.border.none,
      },
      secondary: {
        bg: themeSelected.neutral[800],
        color: themeSelected.primary.jordyBlue,
        border: `${spacing.border.xs} solid ${themeSelected.primary.jordyBlue}`,
      },
      tertiary: {
        bg: themeSelected.primary.mediumPurple,
        color: themeSelected.neutral[800],
        border: spacing.border.none,
      },
      cuaternary: {
        bg: themeSelected.neutral[800],
        color: themeSelected.primary.mediumPurple,
        border: `${spacing.border.xs} solid ${themeSelected.primary.mediumPurple}`,
      },
      text: {
        bg: 'transparent',
        color: themeSelected.neutral[100],
        border: spacing.border.none,
      },
      link: {
        bg: 'transparent',
        color: themeSelected.neutral[100],
        border: spacing.border.none,
      },
      success: {
        bg: themeSelected.neutral[800],
        color: themeSelected.semantic.success,
        border: `${spacing.border.xs} solid ${themeSelected.semantic.success}`,
      },
      warning: {
        bg: themeSelected.neutral[800],
        color: themeSelected.semantic.warning,
        border: `${spacing.border.xs} solid ${themeSelected.semantic.warning}`,
      },
      danger: {
        bg: themeSelected.neutral[800],
        color: themeSelected.semantic.danger,
        border: `${spacing.border.xs} solid ${themeSelected.semantic.danger}`,
      },
      info: {
        bg: themeSelected.neutral[800],
        color: themeSelected.semantic.info,
        border: `${spacing.border.xs} solid ${themeSelected.semantic.info}`,
      },
      warm: {
        bg: themeSelected.semantic.warm,
        color: themeSelected.neutral[0],
        border: spacing.border.none,
      },
    },
  }
}
