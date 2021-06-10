import React from 'react'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import { TitleWrapper } from './Title.styles'

export interface ITitle extends IGeneralProps {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
}

const Title = ({ level, children, style, onClick, ...props }: ITitle) => {
  const Component = level as any
  return (
    <TitleWrapper {...props}>
      <Component style={style} onClick={onClick}>
        {children}
      </Component>
    </TitleWrapper>
  )
}

Title.defaultProps = {
  level: 'h1',
}

export default Title
