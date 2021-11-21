import Icon from 'designSystem/atoms/Icon'
import React from 'react'
import { Section, TitleContainer } from 'styles/utilities/commonComponent'
import * as S from './Modal.styles'

export interface IModalHeader {
  title: React.ReactNode
  handleClose: () => void
}

const ModalHeader = ({ title, handleClose }: IModalHeader) => (
  <S.ModalHeader>
    <Section>
      <TitleContainer>{title}</TitleContainer>
    </Section>
    <Section>
      <Icon fill="#7868e6" name="close" size="15px" onClick={handleClose} />
    </Section>
  </S.ModalHeader>
)

export default ModalHeader
