import React from 'react'
import { Section, TitleContainer } from 'styles/utilities/commonComponent'
import * as S from './Modal.styles'
import { TDesignUI } from 'core/domain/types/design-system'

const ModalHeader = ({
  title,
  className,
}: { title: React.ReactNode } & TDesignUI) => (
  <S.ModalHeaderStyled className={className}>
    <Section>
      <TitleContainer>{title}</TitleContainer>
    </Section>
  </S.ModalHeaderStyled>
)

export default ModalHeader
