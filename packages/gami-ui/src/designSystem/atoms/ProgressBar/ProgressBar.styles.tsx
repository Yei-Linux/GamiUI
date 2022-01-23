import styled from '@emotion/styled'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { sizes, spacing, defaultTheme, zIndex } from 'styles/tokens'

export const ProgressBar = styled.div<{
  $backgroundProgressBar?: string
  $maxWidth: string
  $maxHeight: string
}>`
  max-width: ${({ $maxWidth }) => $maxWidth};
  max-height: ${({ $maxHeight }) => $maxHeight};

  position: relative;
  overflow: hidden;

  background-color: ${({ $backgroundProgressBar }) =>
    $backgroundProgressBar || defaultTheme.light.neutral[600]};

  &.bar {
    height: 15px;
    border-radius: ${spacing.border.sm};
    width: ${sizes.width.full};
  }

  &.circle {
    width: ${({ $maxWidth }) => $maxWidth};
    height: ${({ $maxHeight }) => $maxHeight};
  }

  &:hover {
    cursor: pointer;
  }
`

export const ProgressPercentEffect = styled.div`
  width: 80%;
  height: 3px;
  border-radius: 4em;
  background-color: #f2f2f22b;
`

export const ProgressPercent = styled.div<{
  $percent: number
  $backgroundProgress?: string
}>`
  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })}

  width: ${({ $percent }) => `${$percent}%`};
  background-color: ${({ $backgroundProgress }) =>
    $backgroundProgress || defaultTheme.light.primary.jordyBlue};

  position: absolute;
  top: 0px;
  left: 0px;
  z-index: ${zIndex[1]};

  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
  height: 15px;
  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
`

export const ProgressCircle = styled.div`
  position: relative;
  max-height: inherit;
`

export const ProgressText = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;

  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })}

  font-size: 75%;
`
