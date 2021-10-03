import styled from '@emotion/styled'
import { sizes, spacing, theme, zIndex } from 'styles/tokens'

export const ProgressBar = styled.div<{
  $backgroundProgressBar?: string
}>`
  width: ${sizes.width.full};
  height: 15px;
  border-radius: ${spacing.border.sm};

  position: relative;
  overflow: hidden;

  background-color: ${({ $backgroundProgressBar }) =>
    $backgroundProgressBar || theme.light.neutral[600]};

  &:hover {
    cursor: pointer;
  }
`

export const ProgressPercent = styled.div<{
  $percent: number
  $backgroundProgress?: string
}>`
  width: ${({ $percent }) => `${$percent}%`};
  background-color: ${({ $backgroundProgress }) =>
    $backgroundProgress || theme.light.primary.jordyBlue};

  position: absolute;
  top: 0px;
  left: 0px;
  z-index: ${zIndex[2]};

  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
  height: 15px;
  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
`
