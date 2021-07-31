import React, { useState } from 'react'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import { colorLight } from '../../../styles/theme'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import Input from '../../atoms/Input'
import TextEditor from '../../atoms/TextEditor'
import { IOnChange } from '../../atoms/TextEditor/TextEditor'
import Title from '../../atoms/Title'
import Row from '../../layouts/Row'
import {
  NoteBody,
  NoteContainer,
  NoteFooter,
  NoteTitle,
  NoteWrapper,
} from './Note.styles'
import NoteAdd from './NoteAdd'
import NotesLayout from './NotesLayout'

type IAction = () => void

export interface INote extends IGeneralProps {
  titleDefaultValue: string
  defaultValue?: string
  onChangeTitle: IOnChange
  onChange: IOnChange
  onSave?: IAction
  onEdit?: IAction
  onDelete?: IAction
  isEditDefault?: boolean
  background?: string
}

const Note = ({
  titleDefaultValue,
  defaultValue,
  isEditDefault,
  onSave,
  onEdit,
  onDelete,
  onChange,
  onChangeTitle,
  background,
  border,
  shadow,
}: INote) => {
  const [isEdit, setIsEdit] = useState(isEditDefault)

  const toggle = () => setIsEdit(!isEdit)

  const handleActionClick = () => {
    isEdit ? onSave?.() : onEdit?.()
    toggle()
  }

  return (
    <NoteWrapper background={background} border={border} shadow={shadow}>
      <NoteBody>
        <NoteTitle background={background} padding={isEdit ? '0px' : '1rem'}>
          {!isEdit ? (
            <Title level="h3">{titleDefaultValue}</Title>
          ) : (
            <Input
              border="NONE"
              shadow="NONE"
              placeholder="Type your note title"
              value={titleDefaultValue}
              name="text__note"
              onChangeFormItem={onChangeTitle}
            />
          )}
        </NoteTitle>
        <NoteContainer padding={isEdit ? '0px' : '1rem'}>
          {!isEdit ? (
            <div
              dangerouslySetInnerHTML={{
                __html: defaultValue || '',
              }}
            />
          ) : (
            <TextEditor defaultValue={defaultValue} onChange={onChange} />
          )}
        </NoteContainer>
      </NoteBody>
      <NoteFooter>
        <Row justifyContent="space-around">
          <Button
            border="ROUNDED"
            shadow="MEDIUM"
            width="NORMAL"
            onClick={handleActionClick}
          >
            <Icon size="25px" name={!isEdit ? 'edit' : 'check'} />
          </Button>
          <Button
            type="tertiary"
            border="ROUNDED"
            shadow="MEDIUM"
            width="NORMAL"
            onClick={onDelete}
          >
            <Icon size="25px" name="delete__white" />
          </Button>
        </Row>
      </NoteFooter>
    </NoteWrapper>
  )
}

Note.defaultProps = {
  border: 'LARGE',
  shadow: 'MEDIUM',
  defaultValue: 'Nice section of course',
  titleDefaultValue: 'My first note',
  isEditDefault: true,
  background: colorLight.neutral.eight,
}

Note.NoteAdd = NoteAdd
Note.NotesLayout = NotesLayout

export default Note
