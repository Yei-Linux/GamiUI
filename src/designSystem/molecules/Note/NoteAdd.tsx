import React from 'react'
import Button from 'designSystem/atoms/Button'
import Icon from 'designSystem/atoms/Icon'
import RichText from 'designSystem/atoms/RichText'

import * as S from './Note.styles'

type INoteAddAction = () => void

export interface NoteAddProps {
  onAddNote: INoteAddAction
}

const NoteAdd = ({ onAddNote }: NoteAddProps) => {
  return (
    <S.NoteAdd>
      <Button width="auto" heigth="auto" onClick={onAddNote}>
        <RichText text="Add new" />
        <Icon name="drawkit__shipping__package" size="100px" />
      </Button>
    </S.NoteAdd>
  )
}

export default NoteAdd
