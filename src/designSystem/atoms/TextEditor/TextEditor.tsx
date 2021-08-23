import React from 'react'
import SunEditor from 'suneditor-react'
import * as S from './TextEditor.styles'
import ReactDOMServer from 'react-dom/server'
import Icon from '../Icon'

export type IOnChange = (content: string) => void

export interface ITextEditor {
  placeholder?: string
  height?: string
  defaultValue?: string
  onChange: IOnChange
}

const TextEditor = ({
  placeholder,
  height,
  defaultValue,
  onChange,
}: ITextEditor) => {
  return (
    <S.TextEditorLib>
      <SunEditor
        placeholder={placeholder}
        lang="es"
        height={height}
        defaultValue={defaultValue}
        onChange={onChange}
        hideToolbar={false}
        setOptions={{
          icons: {
            undo: ReactDOMServer.renderToString(
              <Icon size="30px" name="undo" />
            ),
            redo: ReactDOMServer.renderToString(
              <Icon size="30px" name="redo" />
            ),
            blockquote: ReactDOMServer.renderToString(
              <Icon size="30px" name="quote" />
            ),
            bold: ReactDOMServer.renderToString(
              <Icon size="30px" name="bold" />
            ),
            underline: ReactDOMServer.renderToString(
              <Icon size="30px" name="underline" />
            ),
            italic: ReactDOMServer.renderToString(
              <Icon size="30px" name="italic" />
            ),
            list_number: ReactDOMServer.renderToString(
              <Icon size="30px" name="list" />
            ),
            list_dot: ReactDOMServer.renderToString(
              <Icon size="30px" name="list" />
            ),
            table: ReactDOMServer.renderToString(
              <Icon size="30px" name="table" />
            ),
          },
          buttonList: [
            ['undo', 'redo'],
            ['blockquote', 'bold', 'underline', 'italic'],
            ['list', 'table'],
          ],
        }}
      />
    </S.TextEditorLib>
  )
}

TextEditor.defaultProps = {
  placeholder: 'Type your note here',
  height: '300px',
  defaultValue: '',
}

export default TextEditor
