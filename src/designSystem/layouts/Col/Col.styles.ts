import styled from '@emotion/styled'
import { mediaQuery } from '../../../styles/utilities/breakpoints'

export const Col = styled.div<{
  $spacing: string
  $xs: number
  $sm: number
  $md: number
  $lg: number
}>`
  padding: ${({ $spacing }) => $spacing};

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
`
