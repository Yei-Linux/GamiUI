import React, { useState } from 'react'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'

import * as S from './Note.styles'
import NoteAdd from './NoteAdd'
import NotesLayout from './NotesLayout'

import { theme } from 'styles/tokens'
import Button from 'designSystem/atoms/Button'
import Icon from 'designSystem/atoms/Icon'
import Input from 'designSystem/atoms/Input'
import Title from 'designSystem/atoms/Title'
import TextEditor from 'designSystem/atoms/TextEditor'
import { IOnChange } from '../../atoms/TextEditor/TextEditor'

import Row from 'designSystem/layouts/Row'

type IAction = () => void

export interface INote extends IGeneralProps {
  /**
   * Note Title default
   */
  titleDefaultValue: string
  /**
   * Note Text default
   */
  defaultValue?: string
  /**
   * On Change Title
   */
  onChangeTitle: IOnChange
  /**
   * On change
   */
  onChange: IOnChange
  /**
   * On Save note
   */
  onSave?: IAction
  /**
   * On Edit note
   */
  onEdit?: IAction
  /**
   * On Delete note
   */
  onDelete?: IAction
  /**
   * is Edit default note behavior
   */
  isEditDefault?: boolean
  /**
   * Background color for note
   */
  background?: string
}

const Note = ({
  titleDefaultValue = 'My first note',
  defaultValue = 'Nice section of course',
  isEditDefault = true,
  onSave,
  onEdit,
  onDelete,
  onChange,
  onChangeTitle,
  background = theme.light.neutral[700],
  ...genericsProps
}: INote) => {
  const [isEdit, setIsEdit] = useState(isEditDefault)

  const toggle = () => setIsEdit(!isEdit)

  const handleActionClick = () => {
    isEdit ? onSave?.() : onEdit?.()
    toggle()
  }

  return (
    <S.Note $background={background} {...getGenericPropStyles(genericsProps)}>
      <S.NoteBody>
        <S.NoteTitle
          $background={background}
          $padding={isEdit ? '0px' : '1rem'}
        >
          {!isEdit ? (
            <Title level="h3">{titleDefaultValue}</Title>
          ) : (
            <Input
              width="full"
              heigth="lg"
              border="none"
              shadow="none"
              placeholder="Type your note title"
              value={titleDefaultValue}
              name="text__note"
              onChangeFormItem={onChangeTitle}
            />
          )}
        </S.NoteTitle>

        <S.NoteContainer $padding={isEdit ? '0px' : '1rem'}>
          {!isEdit ? (
            <div
              dangerouslySetInnerHTML={{
                __html: defaultValue || '',
              }}
            />
          ) : (
            <TextEditor defaultValue={defaultValue} onChange={onChange} />
          )}
        </S.NoteContainer>
      </S.NoteBody>

      <S.NoteFooter>
        <Row justifyContent="space-around">
          <Button
            border="lg"
            shadow="md"
            width="fit"
            onClick={handleActionClick}
          >
            <Icon size="20px" name={!isEdit ? 'edit__white' : 'check__white'} />
          </Button>
          <Button
            variant="tertiary"
            border="lg"
            shadow="md"
            width="fit"
            onClick={onDelete}
          >
            <Icon size="20px" name="delete__white" />
          </Button>
        </Row>
      </S.NoteFooter>
    </S.Note>
  )
}

Note.NoteAdd = NoteAdd
Note.NotesLayout = NotesLayout

export default Note
