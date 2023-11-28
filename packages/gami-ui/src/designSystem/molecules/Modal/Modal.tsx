import React, { useMemo } from 'react'

import { gsap } from 'gsap'
import Mask from 'designSystem/atoms/Mask'
import * as S from './Modal.styles'
import ModalHeader from './ModalHeader'
import ModalFooter from './ModalFooter'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import { cls } from 'core/utils/cls'
import Icon from 'designSystem/atoms/Icon'
import { TModalComponent } from './type'
import withDefaults from 'hocs/WithDefault'
import { useModal } from './useModal'
import useCssHandle from 'hooks/useCssHandle'

const Modal = ({
  children,
  title,
  footer,
  visible,
  onClose,
  minHegiht = '200px',
  ...genericsProps
}: TModalComponent) => {
  let refDialog: gsap.TweenTarget = null
  let refContent: HTMLDivElement | null = null
  const { modalTween } = useModal({ visible, refDialog, refContent })
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
      dialog: ['dialog'],
      container: ['container'],
      icon_close: ['icon_close'],
      header: ['header'],
      body: ['body'],
      footer: ['footer'],
    },
    componentPrefixCls: 'modal',
    customPrexiCls: '',
  })
  const globalStyles = useMemo(
    () => getDesignProps(genericsProps),
    [genericsProps]
  )

  const handleCloseGsap = () => {
    modalTween.reverse()
    gsap.delayedCall(modalTween.duration(), onClose)
  }

  return (
    <S.ModalStyled
      className={cls(handles.wrapper, {
        visible,
      })}
    >
      <Mask />
      <S.ModalDialogStyled
        className={cls(handles.dialog)}
        ref={(e) => (refDialog = e)}
      >
        <S.ModalContainerStyled
          {...globalStyles}
          $minHegiht={minHegiht}
          className={cls(handles.container)}
          ref={(e: any) => (refContent = e)}
        >
          <S.ModalIconCloseStyled className={cls(handles.icon_close)}>
            <Icon
              color="#7868e6"
              name="close"
              size="18px"
              onClick={handleCloseGsap}
            />
          </S.ModalIconCloseStyled>

          {title && (
            <ModalHeader className={cls(handles.header)} title={title} />
          )}
          <S.ModalBody className={cls(handles.body)}>{children}</S.ModalBody>
          {footer && (
            <ModalFooter footer={footer} className={cls(handles.footer)} />
          )}
        </S.ModalContainerStyled>
      </S.ModalDialogStyled>
    </S.ModalStyled>
  )
}

const defaultProps = {}

Modal.displayName = 'Modal'

type ModalComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  Modal,
  defaultProps
) as ModalComponent<TModalComponent>
