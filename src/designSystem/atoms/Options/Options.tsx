import React from 'react'
import Alternatives, { IAlternative } from './Alternatives'
import CodeAlternative, { ICodeAlternativeProps } from './Code'
import { OptionsWrapper } from './Options.styles'
import TextAreaToWrite, { ITextAreaToWriteProps } from './TextAreaToWrite'

export interface IOptions {
  type?: 'ALTENATIVES' | 'TEXTAREA' | 'CODE'
  alternatives?: IAlternative[]
  code?: ICodeAlternativeProps
  textarea?: ITextAreaToWriteProps
  handleChangeOption: (value: any) => any
  answer: any
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
    <OptionsWrapper>
      {type == 'ALTENATIVES' && (
        <Alternatives
          answer={answer}
          alternatives={alternatives}
          onChangeFormItem={handleChangeOption}
        />
      )}
      {type == 'TEXTAREA' && (
        <TextAreaToWrite
          value={answer}
          placeholder={textarea?.placeholder}
          onChangeFormItem={handleChangeOption}
        />
      )}
      {type == 'CODE' && (
        <CodeAlternative
          answer={answer || code?.initialCode}
          question={code?.question}
          initialCode={code?.initialCode}
          onChangeFormItem={handleChangeOption}
        />
      )}
    </OptionsWrapper>
  )
}

Options.defaultProps = {}

export default Options
