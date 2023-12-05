import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { TSpacer } from './type'

const directionSpaceCss = ({
  left = '0px',
  right = '0px',
  top = '0px',
  bottom = '0px',
}) => css`
  margin: ${`${top} ${right} ${bottom} ${left}`};
`

type TSpacerStyled = {
  $customSize: TSpacer['customSize']
  $direction: TSpacer['direction']
  $size: TSpacer['size']
}
export const SpacerStyled = styled('div')(
  ({ $customSize, $direction, $size }: TSpacerStyled) =>
    directionSpaceCss({
      [$direction]: `${$customSize || `${$size}rem`}`,
    })
)
