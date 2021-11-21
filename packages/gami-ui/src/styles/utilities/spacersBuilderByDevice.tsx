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

  return deviceObjectWithSpacers
}

const getFormatSpacers = (
  deviceObjectWithSpacers: IDynamicObjectWithField
) => css`
  ${Object.prototype.hasOwnProperty.call(deviceObjectWithSpacers, 'xs') &&
  mediaQuery('xs')} {
    padding: ${deviceObjectWithSpacers['xs'] as string};
  }
  ${Object.prototype.hasOwnProperty.call(deviceObjectWithSpacers, 'sm') &&
  mediaQuery('sm')} {
    padding: ${deviceObjectWithSpacers['sm'] as string};
  }
`

export const builderSpacersByDevice = (spacersByDevice: string) => {
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
    deviceObjectWithSpacers
  )

  return stylesWithFormatSpacersByDevice.styles
}
