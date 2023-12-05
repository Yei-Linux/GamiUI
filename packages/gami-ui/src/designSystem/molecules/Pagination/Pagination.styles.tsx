import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Button from 'designSystem/atoms/Button'
import { flex } from 'styles/mixins/flex'

export const PaginationStyled = styled('nav')(
  () => ({
    gap: '4px',
  }),
  () => flex({ justifyContent: 'center', alignItems: 'center' })
)

export const PaginationBodyStyled = styled('div')(
  () => ({
    gap: '4px',
    position: 'relative',
  }),
  () => flex({ alignItems: 'center' })
)

export const ArrowStyled = styled(Button)()

export const PageItemStyled = styled(Button)(() => ({
  maxWidth: '39px',
}))

type TPageSpanStyled = { $color?: string }
export const PageSpanStyled = styled('span')(
  ({ $color }: TPageSpanStyled) =>
    $color &&
    css({
      color: $color,
    })
)

type TPageSelectedStyled = { $left: number }
export const PageSelectedStyled = styled(Button)(
  ({ $left }: TPageSelectedStyled) => ({
    width: '39px',
    height: '34px',
    animationDuration: '350ms',
    animationTimingFunction: 'ease',
    transition: 'left 350ms ease 0s, transform 300ms ease 0s',
    position: 'absolute',
    left: `${$left}px`,
  })
)
