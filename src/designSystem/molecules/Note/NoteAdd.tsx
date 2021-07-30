import React from 'react'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import RichText from '../../atoms/RichText'
import { NoteAddWrapper } from './Note.styles'

type INoteAddAction = () => void

export interface NoteAddProps {
  onAddNote: INoteAddAction
}

const NoteAdd = ({ onAddNote }: NoteAddProps) => {
  return (
    <NoteAddWrapper>
      <Button width="NORMAL" heigth="NORMAL" onClick={onAddNote}>
        <RichText text="Add new" />
        <Icon name="drawkit__shipping__package" size="100px" />
      </Button>
    </NoteAddWrapper>
  )
}

export default NoteAdd
