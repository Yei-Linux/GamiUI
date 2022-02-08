import { css } from '@emotion/react'
import { IDynamicObjectWithField } from 'core/domain/interfaces/common'
import { mediaQuery } from './breakpoints'

const getSpacerValues = (
  spacer: string,
  deviceObjectWithSpacers: IDynamicObjectWithField
) => {
  if (spacer.includes('xs:')) {
    const [, spacerValueXS] = spacer.split('xs:')
    deviceObjectWithSpacers['xs'] = spacerValueXS
  }
  if (spacer.includes('sm:')) {
    const [, spacerValueSM] = spacer.split('sm:')
    deviceObjectWithSpacers['sm'] = spacerValueSM
  }
  if (spacer.includes('md:')) {
    const [, spacerValueMD] = spacer.split('md:')
    deviceObjectWithSpacers['md'] = spacerValueMD
  }
  if (spacer.includes('lg:')) {
    const [, spacerValueLG] = spacer.split('lg:')
    deviceObjectWithSpacers['lg'] = spacerValueLG
  }
  if (
    !spacer.includes('xs:') &&
    !spacer.includes('sm:') &&
    !spacer.includes('md:') &&
    !spacer.includes('lg:')
  ) {
    deviceObjectWithSpacers['custom'] = spacer
  }

  return deviceObjectWithSpacers
}

const getFormatSpacers = (
  deviceObjectWithSpacers: IDynamicObjectWithField,
  spacingType: 'padding' | 'margin'
) => css`
  ${Object.prototype.hasOwnProperty.call(deviceObjectWithSpacers, 'custom') &&
  css`
    ${`${spacingType}: ${deviceObjectWithSpacers['custom'] as string}`}
  `}
  ${Object.prototype.hasOwnProperty.call(deviceObjectWithSpacers, 'xs') &&
  css`
    ${mediaQuery('xs')} {
      ${`${spacingType}: ${deviceObjectWithSpacers['xs'] as string}`}
    }
  `}
  ${Object.prototype.hasOwnProperty.call(deviceObjectWithSpacers, 'sm') &&
  css`
    ${mediaQuery('sm')} {
      ${`${spacingType}: ${deviceObjectWithSpacers['sm'] as string}`}
    }
  `}  
  ${Object.prototype.hasOwnProperty.call(deviceObjectWithSpacers, 'md') &&
  css`
    ${mediaQuery('md')} {
      ${`${spacingType}: ${deviceObjectWithSpacers['md'] as string}`}
    }
  `}  
  ${Object.prototype.hasOwnProperty.call(deviceObjectWithSpacers, 'lg') &&
  css`
    ${mediaQuery('lg')} {
      ${`${spacingType}: ${deviceObjectWithSpacers['lg'] as string}`}
    }
  `}
`

export const builderSpacersByDevice = (
  spacersByDevice: string,
  spacingType: 'padding' | 'margin'
) => {
  const spacersFormatInArray = spacersByDevice.split(',')
  let deviceObjectWithSpacers: IDynamicObjectWithField = {}

  spacersFormatInArray.map(
    (spacer: string) =>
      (deviceObjectWithSpacers = getSpacerValues(
        spacer,
        deviceObjectWithSpacers
      ))
  )

  const stylesWithFormatSpacersByDevice = getFormatSpacers(
    deviceObjectWithSpacers,
    spacingType
  )

  return stylesWithFormatSpacersByDevice.styles
}
