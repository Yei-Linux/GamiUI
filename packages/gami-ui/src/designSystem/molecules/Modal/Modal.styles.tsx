import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { RoundedType, ShadowType } from 'core/domain/types'
import { flex } from 'styles/mixins/flex'
import { spacing, defaultTheme, zIndex } from 'styles/tokens'
import { WithDesignStyledComponent } from 'styles/utilities/commonComponent'

export const Modal = styled.div`
  display: none;
  &.visible {
    display: flex;
  }
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

  ${flex({ justifyContent: 'center', alignItems: 'center' })}
`

export const ModalIconClose = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;

  z-index: ${zIndex[5]};
`

const ModalLayout = () => css`
  width: 100%;
  min-height: 50px;
  padding: ${spacing.padding.md};

  ${flex({
    justifyContent: 'space-between',
    alignItems: 'center',
  })}
`

export const ModalContainer = WithDesignStyledComponent(
  styled.div<{
    $border?: RoundedType
    $shadow?: ShadowType
    $minHegiht?: string
  }>`
    position: relative;
    min-width: 500px;
    min-height: ${({ $minHegiht }) => $minHegiht};
    height: fit-content;
    background-color: ${defaultTheme.light.neutral[800]};
  `
)

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
