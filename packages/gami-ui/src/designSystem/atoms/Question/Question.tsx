import React from 'react'
import Col from 'designSystem/layouts/Col'
import Row from 'designSystem/layouts/Row'
import * as S from './Question.styles'
import Icon from '../Icon'

export interface IQuestion {
  /**
   * Max Width
   */
  question: string
  /**
   * Max Width
   */
  description?: string
  /**
   * Max Width
   */
  iconId?: string
}

const Question = ({ question, description, iconId }: IQuestion) => {
  return (
    <S.Question>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} spacing="sm">
          {iconId && <Icon size="30px" name={iconId} />}
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} spacing="sm">
          <S.QuestionText level="h2" textAlign="center" fontWeight="bold">
            {question}
          </S.QuestionText>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} spacing="sm">
          {description && (
            <S.QuestionText level="h3" textAlign="center" fontWeight="light">
              {description}
            </S.QuestionText>
          )}
        </Col>
      </Row>
    </S.Question>
  )
}

export default Question
