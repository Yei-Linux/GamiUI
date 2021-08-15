import React, { Fragment } from 'react'
import useStepStore from '../../../hooks/store/useStepStore'
import useSurveyStore from '../../../hooks/store/useSurveyStore'
import Icon from '../../atoms/Icon'
import RichText from '../../atoms/RichText'
import Sticky from '../../atoms/Sticky'
import Spacer from '../../layouts/Spacer'
import Controls from '../Controls'
import { SurveyControlsItem, SurveyWrapper } from './Survey.styles'

interface ISurveyContentBody {
  children: React.ReactNode
  onClickMenu?: () => void
}

const SurveyContentBody = ({ children, onClickMenu }: ISurveyContentBody) => {
  const { totalQuestions, setPercent } = useSurveyStore()

  const { setCurrentStep } = useStepStore()

  const handleChangeQuestion = (questionPosition: number) => {
    setCurrentStep(questionPosition)
    const percentCalculated = Number((questionPosition / totalQuestions) * 100)
    setPercent(percentCalculated)
  }

  return (
    <Fragment>
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

      <SurveyWrapper addIndexOnItemAsProp={false}>{children}</SurveyWrapper>
    </Fragment>
  )
}

export default SurveyContentBody
