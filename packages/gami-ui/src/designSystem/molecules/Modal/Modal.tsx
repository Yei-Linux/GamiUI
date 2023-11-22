import React, { useEffect, useState } from 'react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'

import { gsap } from 'gsap'
import Mask from 'designSystem/atoms/Mask'
import * as S from './Modal.styles'
import ModalHeader from './ModalHeader'
import ModalFooter from './ModalFooter'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import { cls } from 'core/utils/cls'
import Icon from 'designSystem/atoms/Icon'

interface IModal extends IGeneralProps {
  /**
   * Content Modal
   */
  children: React.ReactNode
  /**
   * Header Modal
   */
  title?: React.ReactNode
  /**
   * Optional Footer
   */
  footer?: React.ReactNode
  /**
   * Visible flag
   */
  visible: boolean
  /**
   * Close Event
   */
  onClose: () => void
  /**
   * MinHeight
   */
  minHegiht?: string
}

const Modal = ({
  children,
  title,
  footer,
  visible,
  onClose,
  minHegiht = '200px',
  ...genericsProps
}: IModal) => {
  let refDialog: gsap.TweenTarget = null
  let refContent: HTMLDivElement | null = null
  const [modalTween] = useState(gsap.timeline({ paused: true }))

  useEffect(() => {
    if (refContent) {
      modalTween
        .to(refDialog, 0.35, { y: 0, autoAlpha: 1 })
        .from(
          refContent.children,
          0.35,
          { y: 15, opacity: 0, stagger: 0.1 },
          '-=0.15'
        )
        .reverse()
    }
  }, [])

  useEffect(() => {
    modalTween.reversed(!visible)
  }, [visible])

  const handleCloseGsap = () => {
    modalTween.reverse()
    gsap.delayedCall(modalTween.duration(), onClose)
  }

  return (
    <S.Modal
      className={cls({
        visible,
      })}
    >
      <Mask />
      <S.ModalDialog ref={(e) => (refDialog = e)}>
        <S.ModalContainer
          {...getDesignProps(genericsProps)}
          $minHegiht={minHegiht}
          ref={(e: any) => (refContent = e)}
        >
          <S.ModalIconClose>
            <Icon
              color="#7868e6"
              name="close"
              size="18px"
              onClick={handleCloseGsap}
            />
          </S.ModalIconClose>

          {title && <ModalHeader title={title} />}
          <S.ModalBody>{children}</S.ModalBody>
          {footer && <ModalFooter footer={footer} />}
        </S.ModalContainer>
      </S.ModalDialog>
    </S.Modal>
  )
}

export default Modal
