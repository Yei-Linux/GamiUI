import styled from '@emotion/styled'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { flex } from 'styles/mixins/flex'
import { WithDesignStyledComponent } from 'styles/utilities/commonComponent'

export const Progress = WithDesignStyledComponent(styled.div<{
  $backgroundProgressBar?: string
  $maxWidth: string
  $maxHeight: string
  theme?: ICustomTheme
}>`
  max-width: ${({ $maxWidth }) => $maxWidth};
  max-height: ${({ $maxHeight }) => $maxHeight};

  position: relative;
  overflow: hidden;

  &.bar {
    height: 15px;
    border-radius: ${({ theme }) => theme.tokens.spacing.border.sm};
    width: ${({ theme }) => theme.tokens.sizes.width.full};

    background-color: ${({ $backgroundProgressBar, theme }) =>
      $backgroundProgressBar || theme.theme.neutral[600]};
  }

  &.circle {
    width: ${({ $maxWidth }) => $maxWidth};
    height: ${({ $maxHeight }) => $maxHeight};
  }

  &:hover {
    cursor: pointer;
  }
`)

export const ProgressPercentEffect = styled.div`
  width: 80%;
  height: 3px;
  border-radius: 4em;
  background-color: #f2f2f22b;
`

export const ProgressPercent = styled.div<{
  $percent: number
  $backgroundProgress?: string
  theme?: ICustomTheme
}>`
  ${flex({ justifyContent: 'center', alignItems: 'center' })}

  width: ${({ $percent }) => `${$percent}%`};
  background-color: ${({ $backgroundProgress, theme }) =>
    $backgroundProgress || theme.theme.primary.jordyBlue};

  position: absolute;
  top: 0px;
  left: 0px;
  z-index: ${({ theme }) => theme.tokens.zIndex[1]};

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

  ${flex({ justifyContent: 'center', alignItems: 'center' })}

  font-size: 75%;
`
