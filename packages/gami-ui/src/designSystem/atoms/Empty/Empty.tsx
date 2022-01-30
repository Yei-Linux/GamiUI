import classNames from 'classnames'
import { EmptyTypes } from 'core/domain/types'
import React from 'react'
import Row from 'designSystem/layouts/Row'
import Icon from '../Icon'
import { iconsEmpty } from './constants'
import * as S from './Empty.styles'

export interface IEmpty {
  /**
   * Size of empty
   */
  size?: string

  /**
   * Empty Text
   */
  text?: string

  /**
   * Empty Icon Type
   */
  type?: EmptyTypes
}

const Empty = ({ size = '150px', text, type = 'balloon' }: IEmpty) => {
  return (
    <S.Empty>
      <Row>
        <Icon name={iconsEmpty[type]} size={size} />
      </Row>
      {text && (
        <Row>
          <S.Text className={classNames('empty__text')} text={text} />
        </Row>
      )}
    </S.Empty>
  )
}

export default Empty
