import React from "react"
import * as S from "./CodeBlock.styles"

import { atomOneDark, CopyBlock } from "react-code-blocks"
import { INITIAL__CODE__BLOCK } from "./constants"

export type TLanguages =
  | "cpp"
  | "python"
  | "typescript"
  | "java"
  | "javascript"
  | "html"
  | "css"
  | "jsx"

export interface ICodeBlock {
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
  language = "jsx",
  showLineNumbers = false,
}: ICodeBlock) => {
  return (
    <S.CodeBlock>
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        wrapLines
        theme={atomOneDark}
        customStyle={{
          fontSize: "1rem",
          padding: ".9rem 1rem",
          height: "100%",
          borderRadius: "0.8em",
          maxHeight: "500px",
          overflow: "auto",
        }}
      />
    </S.CodeBlock>
  )
}

export default CodeBlock
