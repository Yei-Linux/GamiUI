import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { FloatingTypes } from 'core/domain/types'
import { PartialBy } from 'core/domain/types/mixins'
import { TWithGlobalStylesUI, withGlobalStylesUI } from 'core/utils/base'

export const floatingDirectionCSS = (direction: FloatingTypes) =>
  css({
    margin: 'auto',
    [direction]: '10px',
    [['right', 'left'].includes(direction) ? 'top' : 'left']: '40%',
  })

type TFloatingStyled = PartialBy<
  Pick<TWithGlobalStylesUI, '$shadow' | '$rounded' | 'theme'>,
  'theme'
> & {
  $zIndex?: number
  $direction: FloatingTypes
  $width?: string
  $height?: string
}
export const FloatingStyled = styled('div')(
  ({ $height, $width, $zIndex, theme }: TFloatingStyled) => ({
    zIndex: $zIndex,
    backgroundColor: theme?.theme.neutral[800],
    width: $width,
    height: $height,
    overflow: 'hidden',
    padding: '1rem',
    position: 'fixed',
  }),
  ({ $direction }) => floatingDirectionCSS($direction),
  ({ theme, $shadow, $rounded }) =>
    withGlobalStylesUI({ theme, $shadow, $rounded })()
)

export const FloatingHeaderStyled = styled('div')(() => ({
  position: 'absolute',
  top: '5px',
  right: '5px',
}))
