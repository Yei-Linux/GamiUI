import { css } from '@emotion/react'
import styled from '@emotion/styled'

const getDirectionSpace = ({
  left = '0px',
  right = '0px',
  top = '0px',
  bottom = '0px',
}) => css`
  margin: ${`${top} ${right} ${bottom} ${left}`};
`

export const SpacerWrapper = styled.div<{
  customSize?: string
  direction: 'left' | 'right' | 'top' | 'bottom'
  size: 1 | 2 | 3 | 4 | 5
}>`
  ${(props) =>
    getDirectionSpace({
      [props.direction]: `${props.customSize || `${props.size}rem`}`,
    })}
`
