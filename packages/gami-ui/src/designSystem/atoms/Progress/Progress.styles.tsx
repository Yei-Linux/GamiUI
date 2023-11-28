import styled from '@emotion/styled'
import { OnlyTheme } from 'core/domain/types/mixins'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { flex } from 'styles/mixins/flex'

type TProgressStyled = {
  $backgroundProgressBar?: string
  $maxWidth: string
  $maxHeight: string
} & OnlyTheme
export const ProgressStyled = styled('div')(
  ({
    $backgroundProgressBar,
    $maxHeight,
    $maxWidth,
    theme,
  }: TProgressStyled) => ({
    maxWidth: $maxWidth,
    maxHeight: $maxHeight,
    position: 'relative',
    overflow: 'hidden',
    '&.bar': {
      height: '15px',
      borderRadius: theme?.tokens.spacing.border.sm,
      width: theme?.tokens.sizes.width.full,
      backgroundColor: $backgroundProgressBar || theme?.theme.neutral[600],
    },
    '&.circle': {
      width: $maxWidth,
      height: $maxHeight,
    },
    '&:hover': {
      cursor: 'pointer',
    },
  })
)

export const ProgressPercentEffectStyled = styled('div')(() => ({
  width: '80%',
  height: '3px',
  borderRadius: '4em',
  backgroundColor: '#f2f2f22b',
}))

type TProgressPercentStyled = {
  $percent: number
  $backgroundProgress?: string
} & OnlyTheme
export const ProgressPercentStyled = styled('div')(
  ({ $backgroundProgress, $percent, theme }: TProgressPercentStyled) => ({
    width: `${$percent}%`,
    backgroundColor: $backgroundProgress || theme?.theme.primary.jordyBlue,
    position: 'absolute',
    top: '0px',
    left: '0px',
    zIndex: theme?.tokens.zIndex[1],
    borderTopRightRadius: '2em',
    borderBottomRightRadius: '2em',
    height: '15px',
    transition: 'all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  }),
  () => flex({ justifyContent: 'center', alignItems: 'center' })
)

export const ProgressCircleStyled = styled('div')(() => ({
  position: 'relative',
  maxHeight: 'inherit',
}))

export const ProgressTextStyled = styled('span')(
  () => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    fontSize: '75%',
  }),
  () => flex({ justifyContent: 'center', alignItems: 'center' })
)
