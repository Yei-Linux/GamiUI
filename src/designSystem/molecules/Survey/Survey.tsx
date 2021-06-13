import React from 'react'
import Button from '../../atoms/Button'
import Options, { IOptions } from '../../atoms/Options/Options'
import Question, { IQuestion } from '../../atoms/Question/Question'
import Row from '../../layouts/Row'
import Spacer from '../../layouts/Spacer'
import { SurveyContainer, SurveyOption, SurveyWrapper } from './Survey.styles'

export interface IQuestionSurvey {
  question: IQuestion
  option: IOptions
}

export interface ISurvey {
  children: React.ReactNode
}

const Survey = ({ children }: ISurvey) => {
  return <SurveyWrapper>{children}</SurveyWrapper>
}

const Item = ({ question, option }: IQuestionSurvey) => {
  return (
    <SurveyContainer>
      <Question
        question={question.question}
        description={question.description}
        iconId={question.iconId}
      />

      <Row justifyContent="center" height="auto">
        <SurveyOption width={option.type == 'TEXTAREA' ? '50%' : 'auto'}>
          <Options
            type={option.type}
            alternatives={option.alternatives}
            textarea={option.textarea}
            code={option.code}
          />
        </SurveyOption>
      </Row>

      <Row justifyContent="center" height="auto">
        <Button width="MEDIUM" border="MEDIUM" type="secondary">
          Previous
        </Button>
        <Spacer direction="right" />
        <Button width="MEDIUM" border="MEDIUM">
          Next
        </Button>
      </Row>
    </SurveyContainer>
  )
}

Survey.Item = Item
Survey.defaultProps = {}

export default Survey
