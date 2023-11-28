import React from 'react'
import * as S from './Modal.styles'
import { TDesignUI } from 'core/domain/types/design-system'

const Footer = ({
  footer,
  className,
}: { footer: React.ReactNode } & TDesignUI) => (
  <S.ModalFooterStyled className={className}>{footer}</S.ModalFooterStyled>
)

export default Footer
