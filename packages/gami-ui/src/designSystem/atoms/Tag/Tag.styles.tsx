import styled from '@emotion/styled'
import { OnlyTheme, PartialBy } from 'core/domain/types/mixins'
import { TWithGlobalStylesUI, withGlobalStylesUI } from 'core/utils/base'
import { flex } from 'styles/mixins/flex'

type TTagStyled = {
  $background?: string
  $color?: string
} & PartialBy<TWithGlobalStylesUI, 'theme'>
export const TagStyled = styled('div')(
  ({ $background, $color, theme }: TTagStyled) => ({
    padding: '10px 1rem',
    width: 'fit-content',
    '&:hover': {
      cursor: 'pointer',
    },
    background: $background || theme?.theme.neutral[800],
    color: $color || theme?.theme.primary.jordyBlue,
  }),
  () => flex({ alignItems: 'center' }),
  (prop) => withGlobalStylesUI(prop)()
)

export type TBallMarkerStyled = {
  $background?: string
} & OnlyTheme
export const BallMarkerStyled = styled('span')(
  ({ theme, $background }: TBallMarkerStyled) => ({
    display: 'block',
    width: '10px',
    height: '10px',
    borderRadius: theme?.tokens.rounded.lg,
    marginRight: theme?.tokens.spacing.margin.sm,
    background: $background,
  })
)

export type TTagGroupStyled = {
  $gap: string
} & OnlyTheme
export const TagGroupStyled = styled('div')(
  ({ $gap }: TTagGroupStyled) => ({
    height: 'min-content',
    gap: $gap,
  }),
  () => flex({ justifyContent: 'flex-start', alignItems: 'center' })
)

export type TTagSizeStyled = OnlyTheme
export const TagSizeStyled = styled('span')(({ theme }: TTagSizeStyled) => ({
  color: theme?.theme.neutral[300],
}))
