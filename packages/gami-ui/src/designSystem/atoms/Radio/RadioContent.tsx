import React, { useEffect } from 'react'
import useRadioStore from 'hooks/store/useRadioStore'
import * as S from './Radio.styles'
import { TRadio } from './type'

const RadioContent = ({
  children,
  onChangeFormItem,
  ...generalInputProps
}: TRadio) => {
  const { radioSelected } = useRadioStore()
  useEffect(() => {
    onChangeFormItem?.(radioSelected)
  }, [radioSelected])

  return (
    <S.RadioGroupStyled {...generalInputProps}>{children}</S.RadioGroupStyled>
  )
}

export default RadioContent
