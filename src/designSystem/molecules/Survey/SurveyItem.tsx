import React from 'react'
import useSurveyStore from 'hooks/store/useSurveyStore'

import Button from 'designSystem/atoms/Button'
import Question, { IQuestion } from 'designSystem/atoms/Question/Question'
import Col from 'designSystem/layouts/Col'
import Layout from 'designSystem/layouts/Layout'
import Row from 'designSystem/layouts/Row'

import Options, { IOptions } from '../Options/Options'
import * as S from './Survey.styles'

export interface IQuestionSurvey {
  question: IQuestion
  option: IOptions
  questionIndex: number
  isLastQuestion?: boolean
}

const SurveyItem = ({
  question,
  option,
  questionIndex,
  isLastQuestion,
}: IQuestionSurvey) => {
  const {
    answers,
    totalQuestions,
    setPercent,
    setSurveyOptionSelected,
    onClickSubmit,
  } = useSurveyStore()

  const handleChangeOption = (value: any) =>
    setSurveyOptionSelected({ [`question-${questionIndex}`]: value })

  const handleChangeQuestion = (
    questionPosition: number,
    setCurrentStep: (current: number) => any
  ) => {
    setCurrentStep(questionPosition)
    const percentCalculated = Number((questionPosition / totalQuestions) * 100)
    setPercent(percentCalculated)
  }

  return (
    <S.SurveyContainer
      itemIndex={questionIndex}
      render={({ setCurrentStep }) => (
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
              <S.SurveyOption $width={option.type == 'TEXTAREA' ? '80%' : 'auto'}>
                <Options
                  answer={answers?.[`question-${questionIndex}`]}
                  handleChangeOption={handleChangeOption}
                  type={option.type}
                  alternatives={option.alternatives}
                  textarea={option.textarea}
                  code={option.code}
                />
              </S.SurveyOption>
            </Row>
          </Layout.Content>
          <Layout.Footer>
            <Row
              style={{ margin: 'auto', padding: '1rem' }}
              width="fit-content"
              justifyContent="center"
            >
              <Col spacing="sm" xs={12} sm={6} md={6} lg={6}>
                <Row>
                  <Button
                    width="md"
                    border="md"
                    variant="secondary"
                    onClick={() =>
                      handleChangeQuestion(questionIndex - 1, setCurrentStep)
                    }
                  >
                    Previous
                  </Button>
                </Row>
              </Col>
              <Col spacing="sm" xs={12} sm={6} md={6} lg={6}>
                <Row>
                  {isLastQuestion ? (
                    <Button
                      width="md"
                      border="md"
                      onClick={() => onClickSubmit(answers)}
                    >
                      Finish
                    </Button>
                  ) : (
                    <Button
                      width="md"
                      border="md"
                      onClick={() =>
                        handleChangeQuestion(questionIndex + 1, setCurrentStep)
                      }
                    >
                      Next
                    </Button>
                  )}
                </Row>
              </Col>
            </Row>
          </Layout.Footer>
        </Layout>
      )}
    />
  )
}

export default SurveyItem
