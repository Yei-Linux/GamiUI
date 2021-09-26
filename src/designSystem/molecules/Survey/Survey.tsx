import React from 'react'
import SurveyProvider from 'context/SurveyProvider'

import SurveyContent from './SurveyContent'
import SurveyItem from './SurveyItem'

export interface ISurvey {
  children: React.ReactNode
  onFinish?: (value: any) => void
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

Survey.Item = SurveyItem

export default Survey
