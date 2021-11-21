import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ShadowType } from 'core/domain/types'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { opacity, sizes, theme, zIndex } from 'styles/tokens'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

const PulserCommon = css`
  width: fit-content;
  height: fit-content;
  padding: 6px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 999px;
`

export const Pulser = styled.div`
  width: fit-content;
`

export const PulseTransition = styled.div`
  position: absolute;
  box-sizing: border-box;

  opacity: ${opacity[0]};

  ${PulserCommon}

  &.one {
  }

  &.two {
  }
`

export const PulserLock = styled.div`
  position: absolute;
  top: 0px;
  width: ${sizes.width.full};
  height: ${sizes.height.full};
  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })}
`

export const PulserContent = styled.div`
  position: relative;
  width: fit-content;
`

export const PulserProgress = styled.div`
  font-weight: bold;
  text-align: center;
  width: fit-content;

  padding: 5px 1rem;
  margin: 10px auto;
  border-radius: 2em;

  background-color: ${theme.light.primary.jordyBlue};
  color: ${theme.light.neutral[700]};
`

export const PulserBody = styled.div<{
  $shadow?: ShadowType
  $borderColor: string
  $backgroundColor?: string
}>`
  &.bloqued {
    filter: opacity(0.5);
  }
  &.unbloqued {
    filter: none;
  }

  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })}

  flex-direction: column;
  z-index: ${zIndex[3]};
  overflow: hidden;

  ${PulserCommon}
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border: 5px solid ${({ $borderColor }) => $borderColor};

  ${({ $shadow }) =>
    setGenericPropStyles({
      shadow: $shadow || 'lg',
    })};
`
