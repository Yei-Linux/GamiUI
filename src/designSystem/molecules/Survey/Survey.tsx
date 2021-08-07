import React, { Fragment, useEffect } from 'react'
import SurveyProvider from '../../../context/SurveyProvider'
import context from '../../../context/SurveyProvider/context'
import useStore from '../../../hooks/useStore'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import Options, { IOptions } from '../../atoms/Options/Options'
import ProgressBar from '../../atoms/ProgressBar'
import Question, { IQuestion } from '../../atoms/Question/Question'
import RichText from '../../atoms/RichText'
import Sticky from '../../atoms/Sticky'
import Col from '../../layouts/Col'
import Layout from '../../layouts/Layout'
import Row from '../../layouts/Row'
import Spacer from '../../layouts/Spacer'
import Controls from '../Controls'
import {
  SurveyContainer,
  SurveyContentBox,
  SurveyControlsItem,
  SurveyOption,
  SurveyWrapper,
} from './Survey.styles'

export interface IQuestionSurvey {
  question: IQuestion
  option: IOptions
  questionIndex: number
  isLastQuestion?: boolean
}

export interface ISurvey {
  children: React.ReactNode
  onFinish?: (value: any) => any
  onClickMenu?: () => void
}

const Survey = ({ children, onFinish, onClickMenu }: ISurvey) => {
  return (
    <SurveyProvider>
      <SurveyContent onClickMenu={onClickMenu} onFinish={onFinish}>
        {children}
      </SurveyContent>
    </SurveyProvider>
  )
}

const SurveyContent = ({ children, onFinish, onClickMenu }: ISurvey) => {
  const {
    setCurrentQuesion,
    totalQuestions,
    setPercent,
    percent,
    setCallbacks,
    setTotalQuestions,
  } = useStore({ context })

  const handleChangeQuestion = (questionPosition: number) => {
    setCurrentQuesion(questionPosition)
    const percentCalculated = Number((questionPosition / totalQuestions) * 100)
    setPercent(percentCalculated)
  }

  useEffect(() => {
    setTotalQuestions(React.Children.map(children, (child) => child)?.length)
    setCallbacks({
      onFinish: (values: any) => {
        onFinish && onFinish(values)
      },
    })
  }, [])

  return (
    <SurveyContentBox>
      <ProgressBar percent={percent} backgroundProgressBar="#e0e6f7" />

      <Sticky
        stickyItems={[
          {
            stickyContent: (
              <Fragment>
                <Icon name="menu" size="20px" onClick={onClickMenu} />
                <Spacer direction="bottom" />
              </Fragment>
            ),
            hasHideContent: false,
          },
          {
            stickyContent: (
              <Fragment>
                <Icon name="controls" size="20px" />
                <Spacer direction="bottom" />
              </Fragment>
            ),
            hasHideContent: true,
            stickyHidden: (
              <Controls
                maxWidth="204px"
                controlItems={Array.from(new Array(totalQuestions))?.map(
                  (_questionItem: any, index: number) => (
                    <SurveyControlsItem
                      key={index}
                      onClick={() => handleChangeQuestion(index)}
                    >
                      <RichText
                        style={{ color: 'white' }}
                        text={`${index + 1}`}
                        textAlign="CENTER"
                      />
                    </SurveyControlsItem>
                  )
                )}
                controlTitle="My questions"
              />
            ),
          },
        ]}
      />

      <SurveyWrapper>{children}</SurveyWrapper>
    </SurveyContentBox>
  )
}

const Item = ({
  question,
  option,
  questionIndex,
  isLastQuestion,
}: IQuestionSurvey) => {
  const {
    answers,
    currentQuestion,
    setCurrentQuesion,
    totalQuestions,
    setPercent,
    setSurveyOptionSelected,
    onClickSubmit,
  } = useStore({
    context,
  })
  const handleChangeOption = (value: any) => {
    setSurveyOptionSelected({ [`question-${questionIndex}`]: value })
  }

  const handleChangeQuestion = (questionPosition: number) => {
    setCurrentQuesion(questionPosition)
    const percentCalculated = Number((questionPosition / totalQuestions) * 100)
    setPercent(percentCalculated)
  }

  const calculateMarginWithQuestionPosition = () => `-${currentQuestion * 100}%`

  return (
    <Fragment>
      <SurveyContainer
        isFirstQuestion={questionIndex == 0}
        marginLeft={calculateMarginWithQuestionPosition()}
      >
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
              <SurveyOption width={option.type == 'TEXTAREA' ? '80%' : 'auto'}>
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
            <Row
              style={{ margin: 'auto', padding: '1rem' }}
              width="fit-content"
              justifyContent="center"
            >
              <Col spacing="sm" xs={12} sm={6} md={6} lg={6}>
                <Row>
                  <Button
                    width="MEDIUM"
                    border="MEDIUM"
                    type="secondary"
                    onClick={() => handleChangeQuestion(questionIndex - 1)}
                  >
                    Previous
                  </Button>
                </Row>
              </Col>
              <Col spacing="sm" xs={12} sm={6} md={6} lg={6}>
                <Row>
                  {isLastQuestion ? (
                    <Button
                      width="MEDIUM"
                      border="MEDIUM"
                      onClick={() => onClickSubmit(answers)}
                    >
                      Finish
                    </Button>
                  ) : (
                    <Button
                      width="MEDIUM"
                      border="MEDIUM"
                      onClick={() => handleChangeQuestion(questionIndex + 1)}
                    >
                      Next
                    </Button>
                  )}
                </Row>
              </Col>
            </Row>
          </Layout.Footer>
        </Layout>
      </SurveyContainer>
    </Fragment>
  )
}

Survey.Item = Item
Survey.defaultProps = {}

export default Survey
