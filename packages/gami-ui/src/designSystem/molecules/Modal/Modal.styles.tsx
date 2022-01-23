import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { BorderType, ShadowType } from 'core/domain/types'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { spacing, defaultTheme, zIndex } from 'styles/tokens'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const Modal = styled.div<{ $visible: boolean }>`
  display: ${($visible) => ($visible ? 'flex' : 'none')};
`

export const ModalDialog = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;

  outline: 0;
  overflow: auto;

  z-index: ${zIndex[5]};

  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })}
`

const ModalLayout = () => css`
  width: 100%;
  min-height: 50px;
  padding: ${spacing.padding.md};

  ${mixinFlexVariants({
    justifyContent: 'space-between',
    alignItems: 'center',
  })}
`

export const ModalContainer = styled.div<{
  $border?: BorderType
  $shadow?: ShadowType
}>`
  min-width: 500px;
  height: fit-content;
  background-color: ${defaultTheme.light.neutral[800]};
  ${({ $border, $shadow }) =>
    setGenericPropStyles({
      border: $border || 'sm',
      shadow: $shadow || 'sm',
    })};
`

export const ModalHeader = styled.div`
  ${ModalLayout()}
  border-bottom: 1px solid ${defaultTheme.light.neutral[500]};
`

export const ModalFooter = styled.div`
  ${ModalLayout()}
  border-top: 1px solid ${defaultTheme.light.neutral[500]};
`

export const ModalBody = styled.div`
  width: 100%;
  min-height: 50px;
  padding: ${spacing.padding.md};
`
