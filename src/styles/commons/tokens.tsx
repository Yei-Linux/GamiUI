import {
  borderRadius,
  boxShadow,
  font,
  opacity,
  spacing,
  zIndex,
} from 'styles/tokens'
import { globalClassesBuilder } from 'styles/utilities/classNamesBuilder'

export const fontClasses = () =>
  globalClassesBuilder({ token: font, tokenName: 'font' })

export const borderRadiusClasses = () =>
  globalClassesBuilder({ token: borderRadius, tokenName: 'borderRadius' })

export const boxShadowClasses = () =>
  globalClassesBuilder({ token: boxShadow, tokenName: 'boxShadow' })

export const opacityClasses = () =>
  globalClassesBuilder({ token: opacity, tokenName: 'opacity' })

export const sizesClasses = () =>
  globalClassesBuilder({ token: font, tokenName: 'sizes' })

export const spacingClasses = () =>
  globalClassesBuilder({ token: spacing, tokenName: 'spacing' })

export const zIndexClasses = () =>
  globalClassesBuilder({ token: zIndex, tokenName: 'zIndex' })
