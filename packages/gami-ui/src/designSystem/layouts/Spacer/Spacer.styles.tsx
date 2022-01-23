import { css } from '@emotion/react'
import styled from '@emotion/styled'

const getDirectionSpace = (
  { left = '0px', right = '0px', top = '0px', bottom = '0px' },
  theme: any
) => {
  console.log('TEST3', theme)

  return css`
    margin: ${`${top} ${right} ${bottom} ${left}`};
  `
}

export const Spacer = styled.div<{
  $customSize?: string
  $direction: 'left' | 'right' | 'top' | 'bottom'
  $size: 1 | 2 | 3 | 4 | 5
}>`
  ${({ $direction, $size, $customSize, theme }) =>
    getDirectionSpace(
      {
        [$direction]: `${$customSize || `${$size}rem`}`,
      },
      theme
    )}
`
