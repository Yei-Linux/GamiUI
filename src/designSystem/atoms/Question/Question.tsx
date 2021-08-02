import React from 'react'
import { colorLight } from '../../../styles/theme'
import Col from '../../layouts/Col'
import Row from '../../layouts/Row'
import Icon from '../Icon'
import Title from '../Title'
import { QuestionWrapper } from './Question.styles'

export interface IQuestion {
  question: string
  description?: string
  iconId?: string
  hasWave?: boolean
}

const Question = ({ question, description, iconId }: IQuestion) => {
  return (
    <QuestionWrapper>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} spacing="sm">
          {iconId && <Icon size="30px" name={iconId} />}
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} spacing="sm">
          <Title
            level="h2"
            textAlign="CENTER"
            fontWeight="BOLD"
            style={{ color: colorLight.primary.one }}
          >
            {question}
          </Title>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} spacing="sm">
          {description && (
            <Title
              level="h3"
              textAlign="CENTER"
              fontWeight="LIGHT"
              style={{ color: colorLight.primary.one }}
            >
              {description}
            </Title>
          )}
        </Col>
      </Row>
    </QuestionWrapper>
  )
}

Question.defaultProps = {
  hasWave: true,
}

export default Question
