import styled from '@emotion/styled'
import { mediaQuery } from '../../../styles/utilities/breakpoints'

export const ColWrapper = styled.div<{
  spacing: string
  xs: number
  sm: number
  md: number
  lg: number
}>`
  padding: ${(props) => props.spacing};

  flex-basis: ${(props) => `${(props.xs / 12) * 100}%`};

  ${mediaQuery('sm')} {
    flex-basis: ${(props) => `${(props.sm / 12) * 100}%`};
  }

  ${mediaQuery('md')} {
    flex-basis: ${(props) => `${(props.md / 12) * 100}%`};
  }

  ${mediaQuery('lg')} {
    flex-basis: ${(props) => `${(props.lg / 12) * 100}%`};
  }
`
