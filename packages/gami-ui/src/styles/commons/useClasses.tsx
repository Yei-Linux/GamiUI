import { css, useTheme } from '@emotion/react'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { globalClassesBuilder } from 'styles/utilities/classNamesBuilder'
import { displays } from './display'
import { flex } from './flex'

const useClasses = () => {
  const {
    tokens: { boxShadow, borderRadius, spacing, font, opacity, zIndex },
  } = useTheme() as ICustomTheme

  const fontClasses = () =>
    globalClassesBuilder({ token: font, tokenName: 'font' })

  const borderRadiusClasses = () =>
    globalClassesBuilder({ token: borderRadius, tokenName: 'borderRadius' })

  const boxShadowClasses = () =>
    globalClassesBuilder({ token: boxShadow, tokenName: 'boxShadow' })

  const opacityClasses = () =>
    globalClassesBuilder({ token: opacity, tokenName: 'opacity' })

  const sizesClasses = () =>
    globalClassesBuilder({ token: font, tokenName: 'sizes' })

  const spacingClasses = () =>
    globalClassesBuilder({ token: spacing, tokenName: 'spacing' })

  const zIndexClasses = () =>
    globalClassesBuilder({ token: zIndex, tokenName: 'zIndex' })

  const generateClasses = () => css`
    ${displays()}
    ${flex()}

  ${fontClasses()}
  ${borderRadiusClasses()}
  ${boxShadowClasses()}
  ${opacityClasses()}
  ${sizesClasses()}
  ${spacingClasses()}
  ${zIndexClasses()}
  `

  return { generateClasses }
}

export default useClasses
