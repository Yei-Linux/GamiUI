import Editor, { Monaco } from '@monaco-editor/react'
import useDevice from 'hooks/useDevice'
import React from 'react'
import * as S from './CodeEditor.styles'
import { CodeCustomTheme, codeOptions, codeTheme, ShowLineNumbersByDevice } from './constants'

export type TLanguage = 'javascript'

export interface ICodeEditor {
  /**
   * Value of code Editor
   */
  value?: string
  /**
   * Default Value of code Editor
   */
  defaultValueCode?: string
  /**
   * Programming language
   */
  language?: TLanguage
  /**
   * On Change value
   */
  onChange?: (value: string | undefined) => void
  /**
   * Width code editor size
   */
  width?: string
  /**
   * MaxWidth Parent code editor size
   */
  maxWidth?: string
  /**
   * Height code Editor size
   */
  height?: string
}

const CodeEditor = ({
  maxWidth = 'none',
  value,
  defaultValueCode = "// let's write some broken code 😈",
  language = 'javascript',
  onChange,
  width = '100%',
  height = '100%',
}: ICodeEditor) => {
  const { device } = useDevice()

  const handleEditorWillMount = (monaco: Monaco): void => {
    monaco.editor.defineTheme(codeTheme, CodeCustomTheme)
    monaco.editor.setTheme(codeTheme)
  }

  return (
    <S.CodeEditor $maxWidth={maxWidth}>
      <Editor
        beforeMount={handleEditorWillMount}
        onChange={onChange}
        height={height}
        width={width}
        value={value}
        defaultLanguage={language}
        defaultValue={defaultValueCode}
        options={codeOptions(ShowLineNumbersByDevice[device])}
        theme={codeTheme}
      />
    </S.CodeEditor>
  )
}

export default CodeEditor
