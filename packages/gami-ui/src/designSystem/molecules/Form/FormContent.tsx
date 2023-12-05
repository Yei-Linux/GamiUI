import React from 'react'

import * as S from './Form.styles'
import { TFormComponent } from './type'
import { useHandleForm } from './useHandleForm'

const FormContent = ({
  children,
  onSubmitForm,
  form,
  ...args
}: TFormComponent) => {
  const { handleValidSubmit } = useHandleForm({ children, onSubmitForm, form })

  return (
    <S.FormStyled onSubmit={handleValidSubmit} {...args}>
      {children}
    </S.FormStyled>
  )
}

export default FormContent
