import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import Note from '.'

export default {
  title: 'Molecules/Note',
  component: Note,
  args: {},
  argTypes: {},
} as Meta

export const Basic = () => {
  const [value, setValue] = useState('Nice section of course')
  const [textNote, setTextNote] = useState('My first note')

  return (
    <div style={{ maxWidth: '250px', width: '100%' }}>
      <Note
        titleDefaultValue={textNote}
        onChangeTitle={setTextNote}
        defaultValue={value}
        onChange={setValue}
      />
    </div>
  )
}

Basic.args = {}

export const Add = () => {
  const [notes, setNotes] = useState([1])

  return (
    <div>
      <Note.NotesLayout>
        {notes.map((index: number) => (
          <Basic key={index} />
        ))}
      </Note.NotesLayout>
      <Note.NoteAdd onAddNote={() => setNotes([...notes, 1])} />
    </div>
  )
}
