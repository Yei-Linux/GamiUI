import React from 'react'
import * as S from './Component.styles'

export interface IComponent {
  /**
   * Prop Of Component
   */
  prop?: any
}

const Component = ({ prop }: IComponent) => {
  return <S.Component />
}

export default Component
