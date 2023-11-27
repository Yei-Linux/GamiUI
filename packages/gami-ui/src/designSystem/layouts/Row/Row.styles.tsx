import styled from '@emotion/styled'
import { flex } from 'styles/mixins/flex'
import { TRowComponent } from './type'

type TRowStyled = {
  $gap: TRowComponent['gap']
  $width: TRowComponent['width']
  $height: TRowComponent['height']
  $justifyContent: TRowComponent['justifyContent']
  $alignItems: TRowComponent['alignItems']
  $flexDirection: TRowComponent['flexDirection']
}
export const RowStyled = styled('div')(
  ({ $gap, $width, $height, $flexDirection }: TRowStyled) => ({
    '&.wrap': {
      flexWrap: 'wrap',
    },
    '&.nowrap': {
      flexWrap: 'nowrap',
    },
    flexDirection: $flexDirection,
    width: $width,
    height: $height,
    gap: $gap ?? '',
  }),
  ({ $justifyContent, $alignItems }) =>
    flex({
      justifyContent: $justifyContent,
      alignItems: $alignItems,
    })
)
