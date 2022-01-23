import styled from '@emotion/styled'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { mixinHeight } from 'styles/mixins/height'
import { mixinWidth } from 'styles/mixins/width'
import { zIndex } from 'styles/tokens'

export const Sliding = styled.div<{ theme?: ICustomTheme }>`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;

  ${({ theme }) => mixinWidth(theme, 'full')}
  ${({ theme }) => mixinHeight(theme, 'full')}
  z-index: ${zIndex[5]};
`
