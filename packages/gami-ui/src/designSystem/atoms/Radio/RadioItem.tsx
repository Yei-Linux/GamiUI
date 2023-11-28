import { cls } from 'core/utils/cls'
import useRadioStore from 'hooks/store/useRadioStore'
import React, { useEffect } from 'react'
import * as S from './Radio.styles'
import { TRadioItem } from './type'

const RadioItem = ({ children, value, isChecked = false }: TRadioItem) => {
  const { radioSelected, setRadioSelected } = useRadioStore()
  useEffect(() => {
    isChecked && handleRadioChange()
  }, [])

  const handleRadioChange = () => setRadioSelected({ text: children, value })

  return (
    <S.RadioItemStyled>
      <S.RadioCheckStyled>
        <S.RadioInputStyled onClick={handleRadioChange} />
        <S.RadioInnerStyled
          className={cls({ checked: radioSelected?.value == value })}
        />
      </S.RadioCheckStyled>
      <S.RadioTextStyled>{children}</S.RadioTextStyled>
    </S.RadioItemStyled>
  )
}

export default RadioItem
