import React, { useEffect } from 'react'
import useSurveyStore from '../../../hooks/store/useSurveyStore'

import ProgressBar from '../../atoms/ProgressBar'
import Steps from '../Steps'
import { ISurvey } from './Survey'
import { SurveyContentBox } from './Survey.styles'
import SurveyContentBody from './SurveyContentBody'

const SurveyContent = ({ children, onFinish, onClickMenu }: ISurvey) => {
  const { percent, setCallbacks, setTotalQuestions } = useSurveyStore()

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

      <Steps>
        <SurveyContentBody onClickMenu={onClickMenu}>
          {children}
        </SurveyContentBody>
      </Steps>
    </SurveyContentBox>
  )
}

export default SurveyContent
