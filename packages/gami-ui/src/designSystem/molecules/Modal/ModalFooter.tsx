import React from 'react'
import * as S from './Modal.styles'

const Footer = ({ footer }: { footer: React.ReactNode }) => (
  <S.ModalFooter>{footer}</S.ModalFooter>
)

export default Footer
