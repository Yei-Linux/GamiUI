import React from 'react'
import * as S from './Container.styles'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import withDefaults from 'hocs/WithDefault'

export interface IContainer extends IGeneralProps {
  /**
   * Container type
   */
  as?: keyof JSX.IntrinsicElements
  /**
   * Content
   */
  children: React.ReactNode
}

const Container = ({ children, as, ...genericsProps }: IContainer) => {
  return (
    <S.Container as={as} {...getGenericPropStyles(genericsProps)}>
      {children}
    </S.Container>
  )
}

const defaultProps = {
  shadow: 'none',
  width: 'auto',
  height: 'auto',
}

export default withDefaults(Container, defaultProps)
