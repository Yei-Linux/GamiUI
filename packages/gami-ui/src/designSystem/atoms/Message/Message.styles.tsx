import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { DirectionMessageType } from 'core/domain/types'
import { PartialBy } from 'core/domain/types/mixins'
import { TWithGlobalStylesUI, withGlobalStylesUI } from 'core/utils/base'
import { flex } from 'styles/mixins/flex'

const messageDirection = (
  background: string,
  type: 'before' | 'after',
  direction: 'left' | 'right'
) =>
  css({
    [direction === 'left' ? 'borderTop' : 'borderBottom']: `${
      type == 'before' ? '17px' : '15px'
    } solid ${background}`,
    [direction === 'left' ? 'top' : 'bottom']: type == 'before' ? '-1px' : '0',
    [direction]: type == 'before' ? '-17px' : '-15px',
  })

type TMessageStyled = {
  $direction: DirectionMessageType
  $background: string
  $color?: string
  $maxWidth?: string
} & PartialBy<TWithGlobalStylesUI, 'theme'>
export const MessageStyled = styled('div')(
  ({ $background, $color, $maxWidth, theme }: TMessageStyled) => ({
    position: 'relative',
    color: $color,
    backgroundColor: $background,
    border: `1px solid ${$background}`,
    maxWidth: $maxWidth,
    minHeight: '50px',
    padding: theme?.tokens.spacing.padding.md,
    '&.marker': {
      '&::after,&::before': {
        content: '""',
        position: 'absolute',
        width: 0,
        height: 0,
        borderLeft: '16px solid transparent',
        borderRight: '16px solid transparent',
      },
    },

    '&.directionLeft': {
      '&::before': {
        ...messageDirection($background, 'before', 'left'),
      },
      '&::after': {
        ...messageDirection($background, 'after', 'left'),
      },
    },
    '&.directionRight': {
      '&::before': {
        ...messageDirection($background, 'before', 'right'),
      },
      '&::after': {
        ...messageDirection($background, 'after', 'right'),
      },
    },
  }),
  () => flex({ alignItems: 'center' }),
  (prop) => withGlobalStylesUI(prop)()
)
