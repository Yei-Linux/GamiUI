import styled from '@emotion/styled'
import { builderSpacersByDevice } from 'styles/utilities/spacersBuilderByDevice'
import { mediaQuery } from '../../../styles/utilities/breakpoints'

export const Col = styled.div<{
  $spacing: string
  $xs: number
  $sm: number
  $md: number
  $lg: number
}>`
  flex-basis: ${({ $xs }) => `${($xs / 12) * 100}%`};

  ${mediaQuery('sm')} {
    flex-basis: ${({ $sm }) => `${($sm / 12) * 100}%`};
  }

  ${mediaQuery('md')} {
    flex-basis: ${({ $md }) => `${($md / 12) * 100}%`};
  }

  ${mediaQuery('lg')} {
    flex-basis: ${({ $lg }) => `${($lg / 12) * 100}%`};
  }

  &.custom {
    ${({ $spacing }) => builderSpacersByDevice($spacing, 'padding')}
  }

  &.nocustom {
    padding: ${({ $spacing }) => $spacing};
  }
`
