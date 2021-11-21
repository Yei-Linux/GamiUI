import React, { useRef } from 'react'
import SunEditor from 'suneditor-react'

import SunEditorCore from 'suneditor/src/lib/core'

import * as S from './TextEditor.styles'
import ReactDOMServer from 'react-dom/server'
import Icon from '../Icon'

export type IOnChange = (content: string) => void

export interface ITextEditor {
  /**
   * Placeholder on editor
   */
  placeholder?: string
  /**
   * Height on editor
   */
  height?: string
  /**
   * Default value
   */
  defaultValue?: string
  /**
   * On change event
   */
  onChange: IOnChange
}

const TextEditor = ({
  placeholder = 'Type your note here',
  height = '300px',
  defaultValue = '',
  onChange,
}: ITextEditor) => {
  const editor: any = useRef()

  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor
  }

  const validateOnPaseContentWithCode = (e: any) => {
    if (!['pre', 'br'].includes(e.target.localName)) return true

    if (e.target.localName == 'br') {
      const [, secondTag] = e.path
      if (secondTag.localName != 'pre') return true
    }

    return false
  }

  const getStringIconOfToolbar = (iconId: string): string =>
    ReactDOMServer.renderToString(<Icon size="30px" name={iconId} />)

  return (
    <S.TextEditorLib>
      <SunEditor
        getSunEditorInstance={getSunEditorInstance}
        onPaste={validateOnPaseContentWithCode}
        placeholder={placeholder}
        lang="es"
        height={height}
        defaultValue={defaultValue}
        onChange={onChange}
        hideToolbar={false}
        setOptions={{
          icons: {
            undo: getStringIconOfToolbar('undo'),
            redo: getStringIconOfToolbar('redo'),
            blockquote: getStringIconOfToolbar('quote'),
            bold: getStringIconOfToolbar('bold'),
            underline: getStringIconOfToolbar('underline'),
            italic: getStringIconOfToolbar('italic'),
            list_number: getStringIconOfToolbar('list'),
            list_dot: getStringIconOfToolbar('list'),
            table: getStringIconOfToolbar('table'),
          },
          buttonList: [
            ['undo', 'redo'],
            ['blockquote', 'bold', 'underline', 'italic'],
            ['list', 'table', 'formatBlock'],
          ],
          formats: ['pre'],
        }}
      />
    </S.TextEditorLib>
  )
}

export default TextEditor
