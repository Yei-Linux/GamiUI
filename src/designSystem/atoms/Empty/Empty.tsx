import React from 'react'
import Row from '../../layouts/Row'
import Icon from '../Icon'
import { EmptyWrapper } from './Empty.styles'

export interface IEmpty {
  size?: any
}

const Empty = ({ size }: IEmpty) => {
  return (
    <EmptyWrapper>
      <Row>
        <Icon name="drawkit__empty" size={size} />
      </Row>
    </EmptyWrapper>
  )
}

Empty.defaultProps = {
  size: '150px',
}

export default Empty
