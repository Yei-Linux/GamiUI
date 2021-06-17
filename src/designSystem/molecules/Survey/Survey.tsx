import React, { useContext, useEffect } from 'react'
import SurveyProvider from '../../../context/SurveyProvider'
import context from '../../../context/SurveyProvider/context'
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
  isLastQuestion?: boolean
}

export interface ISurvey {
  children: React.ReactNode
  onFinish?: (value: any) => any
}

const Survey = ({ children, onFinish }: ISurvey) => {
  return (
    <SurveyProvider>
      <SurveyContent onFinish={onFinish}>{children}</SurveyContent>
    </SurveyProvider>
  )
}

const SurveyContent = ({ children, onFinish }: ISurvey) => {
  const { setCallbacks } = useContext(context)

  useEffect(() => {
    setCallbacks({
      onFinish: (values: any) => {
        onFinish && onFinish(values)
      },
    })
  }, [])

  return <SurveyWrapper>{children}</SurveyWrapper>
}

const Item = ({
  question,
  option,
  questionIndex,
  isLastQuestion,
}: IQuestionSurvey) => {
  const { answers, setSurveyOptionSelected, onClickSubmit } =
    useContext(context)
  const handleChangeOption = (value: any) => {
    setSurveyOptionSelected({ [`question-${questionIndex}`]: value })
  }

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
                answer={answers?.[`question-${questionIndex}`]}
                handleChangeOption={handleChangeOption}
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
            {isLastQuestion ? (
              <Button
                width="MEDIUM"
                border="MEDIUM"
                onClick={() => onClickSubmit(answers)}
              >
                Finish
              </Button>
            ) : (
              <Button width="MEDIUM" border="MEDIUM">
                <Link
                  type="primary"
                  text="Next"
                  href={`#question-${questionIndex + 1}`}
                />
              </Button>
            )}
          </Row>
        </Layout.Footer>
      </Layout>
    </SurveyContainer>
  )
}

Survey.Item = Item
Survey.defaultProps = {}

export default Survey
