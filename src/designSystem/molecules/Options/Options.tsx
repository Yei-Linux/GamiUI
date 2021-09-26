import React from 'react'
import Alternatives, { IAlternative } from './Alternatives'
import CodeAlternative, { ICodeAlternative } from './Code'
import * as S from './Options.styles'
import TextAreaToWrite, { ITextAreaToWrite } from './TextAreaToWrite'

export type THandleChangeOption = (value: TAnswer | undefined) => void

export type TAnswer = number | string

export type TQuestionType = 'ALTENATIVES' | 'TEXTAREA' | 'CODE'

export interface IOptions {
  /**
   * Alternatives for this type of question
   */
  alternatives?: IAlternative[]
  /**
   * Code for this type of question
   */
  code?: ICodeAlternative
  /**
   * TextArea for this type of question
   */
  textarea?: ITextAreaToWrite
  /**
   * Question Type
   */
  type?: TQuestionType
  /**
   * Action on change answer option
   */
  handleChangeOption: THandleChangeOption
  /**
   * Answer
   */
  answer: TAnswer
}

const Options = ({
  answer,
  type,
  alternatives,
  textarea,
  code,
  handleChangeOption,
}: IOptions) => {
  return (
    <S.Options>
      {type == 'ALTENATIVES' && !!alternatives?.length && (
        <Alternatives
          answer={Number(answer)}
          alternatives={alternatives}
          onChangeOption={handleChangeOption}
        />
      )}

      {type == 'TEXTAREA' && textarea && (
        <TextAreaToWrite
          answer={answer.toString()}
          placeholder={textarea.placeholder}
          onChangeOption={handleChangeOption}
        />
      )}

      {type == 'CODE' && code && (
        <CodeAlternative
          answer={(code.initialCode || answer)?.toString()}
          question={code.question}
          initialCode={code.initialCode}
          onChangeOption={handleChangeOption}
        />
      )}
    </S.Options>
  )
}

export default Options
