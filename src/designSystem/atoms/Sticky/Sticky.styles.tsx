import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ShadowType } from 'core/domain/types'
import { theme } from 'styles/tokens'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

const stickyCommon = ({ $shadow }: { $shadow: ShadowType }) => css`
  background-color: ${theme.light.neutral[800]};
  z-index: 2;
  transition: all 0.3s;
  position: fixed;
  padding: 1rem;

  ${setGenericPropStyles({
    shadow: $shadow,
  })};
`

export const StickyHideHeader = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`

export const StickyHideContainer = styled.div<{
  $shadow?: ShadowType
  $right: string
}>`
  ${({ $shadow }) => stickyCommon({ $shadow: $shadow || 'sm' })}

  width: auto;
  height: auto;
  min-height: 200px;

  padding-top: 25px;
  top: 40%;
  right: 0px;

  transform: ${({ $right }) => `translate(${$right}, 0px)`};
`

export const Sticky = styled.div<{ $shadow?: ShadowType; $right: string }>`
  ${({ $shadow }) => stickyCommon({ $shadow: $shadow || 'sm' })}

  width: min-content;
  height: min-content;
  top: 45%;
`

export const StickyContainer = styled.div``

export const StickyItem = styled.div`
  &:hover {
    cursor: pointer;
  }
`
