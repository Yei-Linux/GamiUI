import Editor from '@monaco-editor/react'
import React from 'react'
import { CodeEditorWrapper } from './CodeEditor.styles'
import { CodeCustomTheme, codeOptions } from './constants'

export interface ICodeEditor {
  defaultValueCode?: string
  onChange?: (value: any) => any
  width?: string
  height?: string
}

const CodeEditor = ({
  defaultValueCode,
  onChange,
  width,
  height,
}: ICodeEditor) => {
  const handleEditorWillMount = (monaco: any) => {
    monaco.editor.defineTheme('myTheme', CodeCustomTheme)
    monaco.editor.setTheme('myTheme')
  }
  return (
    <CodeEditorWrapper>
      <Editor
        beforeMount={handleEditorWillMount}
        height={height}
        width={width}
        defaultLanguage="javascript"
        defaultValue={defaultValueCode}
        onChange={onChange}
        options={codeOptions}
        theme="myTheme"
      />
    </CodeEditorWrapper>
  )
}

CodeEditor.defaultProps = {
  defaultValueCode: "// let's write some broken code 😈",
  width: '100%',
  height: '100%',
}

export default CodeEditor
