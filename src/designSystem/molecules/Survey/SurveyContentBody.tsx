import React, { Fragment } from 'react'
import useStepStore from 'hooks/store/useStepStore'
import useSurveyStore from 'hooks/store/useSurveyStore'

import Icon from 'designSystem/atoms/Icon'
import RichText from 'designSystem/atoms/RichText'
import Sticky from 'designSystem/atoms/Sticky'
import Spacer from 'designSystem/layouts/Spacer'

import Controls from '../Controls'
import * as S from './Survey.styles'

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
                    <S.SurveyControlsItem
                      key={index}
                      onClick={() => handleChangeQuestion(index)}
                    >
                      <RichText
                        style={{ color: 'white' }}
                        text={`${index + 1}`}
                        textAlign="center"
                      />
                    </S.SurveyControlsItem>
                  )
                )}
                controlTitle="My questions"
              />
            ),
          },
        ]}
      />

      <S.Survey addIndexOnItemAsProp={false}>{children}</S.Survey>
    </Fragment>
  )
}

export default SurveyContentBody
