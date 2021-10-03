import styled from '@emotion/styled'
import { mixinHeight } from 'styles/mixins/height'
import { mixinWidth } from 'styles/mixins/width'
import { zIndex } from 'styles/tokens'

export const Sliding = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;

  ${mixinWidth('full')}
  ${mixinHeight('full')}
  z-index: ${zIndex[5]};
`
