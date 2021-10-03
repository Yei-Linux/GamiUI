import React from 'react'
import * as S from './Note.styles'

export interface NotesLayoutProps {
  maxHeight?: string
  children: React.ReactNode
}

const NotesLayout = ({ maxHeight = '500px', children }: NotesLayoutProps) => {
  return <S.NotesLayout $maxHeight={maxHeight}>{children}</S.NotesLayout>
}

export default NotesLayout
