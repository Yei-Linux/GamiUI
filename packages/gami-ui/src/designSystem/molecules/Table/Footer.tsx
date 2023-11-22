import React from 'react'
import { Row } from './Row'
import * as S from './Table.styles'

export interface IFooter {
  children: React.ReactNode
}

export const Footer = ({ children }: IFooter) => {
  return (
    <S.TableFooter>
      <Row background="transparent">{children}</Row>
    </S.TableFooter>
  )
}
