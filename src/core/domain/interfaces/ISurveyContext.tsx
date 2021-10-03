import { IDynamicObjectWithField } from './common'

export interface ISurveyInitialState {
  totalQuestions: number
  answers: IDynamicObjectWithField | null
  callbacks?: IDynamicObjectWithField | null
  percent: number
}

export interface ISetOptionSelected {
  questionId: string
  response: unknown
}

export interface ISurveyContext extends ISurveyInitialState {
  setPercent: (data: number) => void
  setSurveyOptionSelected: (data: ISetOptionSelected) => void
  setCallbacks: (data: IDynamicObjectWithField) => void
  setTotalQuestions: (data: number) => void
  onClickSubmit: (data: IDynamicObjectWithField) => void
}
