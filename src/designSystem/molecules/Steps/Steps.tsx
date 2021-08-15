import React from 'react'
import StepsProvider from '../../../context/StepsProvider'
import useCloneElement from '../../../hooks/useCloneElements'
import StepItem from './StepItem'
import * as S from './Steps.styles'

export interface ISteps {
  children?: any
  addIndexOnItemAsProp?: boolean
}

const StepsContent = ({ children, addIndexOnItemAsProp = true }: ISteps) => {
  const { childrenWithProps } = useCloneElement({
    children,
    childrenTypes: [],
    addIndexPropOnItem: addIndexOnItemAsProp
      ? {
          hasConfig: true,
          fieldPropName: 'itemIndex',
        }
      : null,
  })

  return <S.Steps>{childrenWithProps}</S.Steps>
}

const Steps = ({ children }: ISteps) => {
  return <StepsProvider>{children}</StepsProvider>
}

Steps.Item = StepItem
Steps.Body = StepsContent

export default Steps
