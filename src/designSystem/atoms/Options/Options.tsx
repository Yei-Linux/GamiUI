import React from 'react'
import Alternatives, { IAlternative } from './Alternatives'
import CodeAlternative from './Code'
import { OptionsWrapper } from './Options.styles'
import TextAreaToWrite, { ITextAreaToWriteProps } from './TextAreaToWrite'

interface ICode {
  codeExercise: string
  editor: any
}

export interface IOptions {
  type?: 'ALTENATIVES' | 'TEXTAREA' | 'CODE'
  alternatives?: IAlternative[]
  code?: ICode
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
          question={code?.codeExercise}
          initialCode={code?.editor}
        />
      )}
    </OptionsWrapper>
  )
}

Options.defaultProps = {}

export default Options
