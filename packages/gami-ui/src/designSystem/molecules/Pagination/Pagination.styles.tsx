import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Button from 'designSystem/atoms/Button'

export const Pagination = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`

export const PaginationBody = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  position: relative;
`

export const Arrow = styled(Button)``

export const PageItem = styled(Button)`
  max-width: 39px;
`

export const PageSpan = styled.span<{ $color?: string }>`
  ${({ $color }) =>
    $color &&
    css({
      color: $color,
    })}
`

export const PageSelected = styled(Button)<{ $left: number }>`
  width: 39px;
  height: 34px;

  animation-duration: 350ms;
  animation-timing-function: ease;
  transition: left 350ms ease 0s, transform 300ms ease 0s;

  position: absolute;
  left: ${({ $left }) => `${$left}px`};
`
