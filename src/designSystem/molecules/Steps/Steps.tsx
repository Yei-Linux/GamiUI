import React from 'react'
import StepsProvider from '../../../context/StepsProvider'
import useCloneElement from '../../../hooks/useCloneElements'
import StepItem from './StepItem'
import * as S from './Steps.styles'

export interface ISteps {
  children?: any
}

const StepsContent = ({ children }: ISteps) => {
  const { childrenWithProps } = useCloneElement({
    children,
    childrenTypes: [StepItem],
    addIndexPropOnItem: {
      hasConfig: true,
      fieldPropName: 'itemIndex',
    },
  })

  return <S.Steps>{childrenWithProps}</S.Steps>
}

const Steps = ({ children }: ISteps) => {
  return (
    <StepsProvider>
      <StepsContent>{children}</StepsContent>
    </StepsProvider>
  )
}

Steps.Item = StepItem

export default Steps
