import React, { useEffect } from 'react'
import useRadioStore from 'hooks/store/useRadioStore'
import { IRadio } from './Radio'
import * as S from "./Radio.styles"

const RadioContent = ({
  children,
  onChangeFormItem,
  ...generalInputProps
}: IRadio) => {
  const { radioSelected } = useRadioStore()

  useEffect(() => {
    onChangeFormItem?.(radioSelected)
  }, [radioSelected])

  return <S.RadioGroup {...generalInputProps}>{children}</S.RadioGroup>
}

export default RadioContent