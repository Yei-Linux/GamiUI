import classNames from 'classnames'
import useRadioStore from 'hooks/store/useRadioStore'
import React, { useEffect } from 'react'
import * as S from './Radio.styles'

export interface IRadioItem {
  /**
   * Radio Item content
   */
  children: string
  /**
   * Radio Value
   */
  value: string
  /**
   * Is checked prop
   */
  isChecked?: boolean
}

const RadioItem = ({ children, value, isChecked = false }: IRadioItem) => {
  const { radioSelected, setRadioSelected } = useRadioStore()

  useEffect(() => {
    isChecked && handleRadioChange()
  }, [])

  const handleRadioChange = () => setRadioSelected({ text: children, value })

  return (
    <S.RadioItem>
      <S.RadioCheck>
        <S.RadioInput onClick={handleRadioChange} />
        <S.RadioInner
          className={classNames({ checked: radioSelected?.value == value })}
        />
      </S.RadioCheck>
      <S.RadioText>{children}</S.RadioText>
    </S.RadioItem>
  )
}

export default RadioItem
