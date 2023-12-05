import styled from '@emotion/styled'
import { builderSpacersByDevice } from 'styles/utilities/spacersBuilderByDevice'
import { mediaQuery } from '../../../styles/utilities/breakpoints'
import { css } from '@emotion/react'

type TColStyled = {
  $spacing: string
  $xs: number
  $sm: number
  $md: number
  $lg: number
}

const customColCSS = ({ $spacing }: TColStyled) => css`
  &.custom {
    ${builderSpacersByDevice($spacing, 'padding')}
  }
`

export const ColStyled = styled('div')(
  ({ $xs, $lg, $md, $sm, $spacing }: TColStyled) => ({
    flexBasis: `${($xs / 12) * 100}%`,
    [mediaQuery('sm')]: {
      flexBasis: `${($sm / 12) * 100}%`,
    },
    [mediaQuery('md')]: {
      flexBasis: `${($md / 12) * 100}%`,
    },
    [mediaQuery('lg')]: {
      flexBasis: `${($lg / 12) * 100}%`,
    },
    '&.nocustom': {
      padding: $spacing,
    },
  }),
  customColCSS
)
