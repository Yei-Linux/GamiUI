import classNames from 'classnames'
import React from 'react'
import useStepStore from '../../../hooks/store/useStepStore'
import * as S from './Steps.styles'

interface IRender {
  currentStep: number
  setCurrentStep: (data: number) => void
}

export interface IStepItem {
  itemIndex?: number
  render: (data: IRender) => React.ReactNode
}

const StepItem = ({ itemIndex, render }: IStepItem) => {
  const { currentStep, setCurrentStep } = useStepStore()

  const calculateMarginWithStepPosition = () => `-${currentStep * 100}%`

  return (
    <S.StepItem
      $marginLeft={calculateMarginWithStepPosition()}
      className={classNames({ firsItem: itemIndex == 0 })}
    >
      {render({ currentStep, setCurrentStep })}
    </S.StepItem>
  )
}

export default StepItem
