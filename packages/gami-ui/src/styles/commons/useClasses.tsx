import { css } from '@emotion/react'
import useGamiTheme from 'hooks/useGamiTheme'
import { globalClassesBuilder } from 'styles/utilities/classNamesBuilder'
import { displays } from './display'
import { flex } from './flex'

const useClasses = () => {
  const {
    tokens: { boxShadow, rounded, spacing, font, opacity, zIndex },
  } = useGamiTheme()

  const fontClasses = () =>
    globalClassesBuilder({ token: font, tokenName: 'font' })

  const borderRadiusClasses = () =>
    globalClassesBuilder({ token: rounded, tokenName: 'rounded' })

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
