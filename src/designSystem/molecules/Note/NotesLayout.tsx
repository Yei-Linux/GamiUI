import React from 'react'
import { NotesLayoutWrapper } from './Note.styles'

export interface NotesLayoutProps {
  maxHeight?: string
  children: React.ReactNode
}

const NotesLayout = ({ maxHeight = '500px', children }: NotesLayoutProps) => {
  return (
    <NotesLayoutWrapper maxHeight={maxHeight}>{children}</NotesLayoutWrapper>
  )
}

export default NotesLayout
