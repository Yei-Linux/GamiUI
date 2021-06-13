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
}

const Options = ({ type, alternatives, textarea, code }: IOptions) => {
  return (
    <OptionsWrapper>
      {type == 'ALTENATIVES' && <Alternatives alternatives={alternatives} />}
      {type == 'TEXTAREA' && (
        <TextAreaToWrite
          value={textarea?.value}
          placeholder={textarea?.placeholder}
        />
      )}
      {type == 'CODE' && (
        <CodeAlternative
          question={code?.question}
          initialCode={code?.initialCode}
        />
      )}
    </OptionsWrapper>
  )
}

Options.defaultProps = {}

export default Options
