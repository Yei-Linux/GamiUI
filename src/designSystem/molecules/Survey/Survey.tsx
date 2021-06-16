import React from 'react'
import Button from '../../atoms/Button'
import Link from '../../atoms/Link'
import Options, { IOptions } from '../../atoms/Options/Options'
import Question, { IQuestion } from '../../atoms/Question/Question'
import Layout from '../../layouts/Layout'
import Row from '../../layouts/Row'
import Spacer from '../../layouts/Spacer'
import { SurveyContainer, SurveyOption, SurveyWrapper } from './Survey.styles'

export interface IQuestionSurvey {
  question: IQuestion
  option: IOptions
  questionIndex: number
}

export interface ISurvey {
  children: React.ReactNode
}

const Survey = ({ children }: ISurvey) => {
  return <SurveyWrapper>{children}</SurveyWrapper>
}

const Item = ({ question, option, questionIndex }: IQuestionSurvey) => {
  return (
    <SurveyContainer id={`question-${questionIndex}`}>
      <Layout>
        <Layout.Header>
          <Question
            question={question.question}
            description={question.description}
            iconId={question.iconId}
          />
        </Layout.Header>
        <Layout.Content>
          <Row justifyContent="center">
            <SurveyOption width={option.type == 'TEXTAREA' ? '50%' : 'auto'}>
              <Options
                type={option.type}
                alternatives={option.alternatives}
                textarea={option.textarea}
                code={option.code}
              />
            </SurveyOption>
          </Row>
        </Layout.Content>
        <Layout.Footer>
          <Row justifyContent="center">
            <Button width="MEDIUM" border="MEDIUM" type="secondary">
              <Link text="Previous" href={`#question-${questionIndex - 1}`} />
            </Button>
            <Spacer direction="right" />
            <Button width="MEDIUM" border="MEDIUM">
              <Link type="primary" text="Next" href={`#question-${questionIndex + 1}`} />
            </Button>
          </Row>
        </Layout.Footer>
      </Layout>
    </SurveyContainer>
  )
}

Survey.Item = Item
Survey.defaultProps = {}

export default Survey
