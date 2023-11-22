import React from 'react'
import { Section, TitleContainer } from 'styles/utilities/commonComponent'
import * as S from './Modal.styles'

export interface IModalHeader {
  title: React.ReactNode
}

const ModalHeader = ({ title }: IModalHeader) => (
  <S.ModalHeader>
    <Section>
      <TitleContainer>{title}</TitleContainer>
    </Section>
  </S.ModalHeader>
)

export default ModalHeader
