import React from 'react'
import * as S from './CodeBlock.styles'

import { atomOneDark, CopyBlock } from 'react-code-blocks'
import { INITIAL__CODE__BLOCK } from './constants'
import { font } from 'styles/tokens'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'

export type TLanguages =
  | 'cpp'
  | 'python'
  | 'typescript'
  | 'java'
  | 'javascript'
  | 'html'
  | 'css'
  | 'jsx'

export interface ICodeBlock extends IGeneralProps {
  /**
   * Code to show
   */
  code: string
  /**
   * Code to show
   */
  language: TLanguages
  /**
   * Code to show
   */
  showLineNumbers?: boolean
}

const CodeBlock = ({
  code = INITIAL__CODE__BLOCK,
  language = 'jsx',
  showLineNumbers = false,
  ...genericsProps
}: ICodeBlock) => {
  return (
    <S.CodeBlock  {...getGenericPropStyles(genericsProps)}>
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        wrapLines
        theme={atomOneDark}
        customStyle={{
          fontFamily: font.family.mali,
          fontSize: '0.75rem',
          padding: '.5rem 1rem',
        }}
      />
    </S.CodeBlock>
  )
}

export default CodeBlock
