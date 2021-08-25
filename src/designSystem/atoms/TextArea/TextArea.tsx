import React from 'react'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import { TOnChangeFormItem } from '../Input/Input'
import * as S from './TextArea.styles'

interface AutoSize {
  minRows: number
  maxRows: number
}

export interface ITextArea extends IGeneralProps {
  /**
   * Placeholder TextArea to show
   */
  placeholder?: string
  /**
   * Identifier TextArea
   */
  name?: string
  /**
   * Value TextArea
   */
  value?: any
  /**
   * Cols TextArea
   */
  cols?: number
  /**
   * Rows TextArea
   */
  rows?: number
  /**
   * Autosize TextArea
   */
  autoSize?: AutoSize
  /**
   * Function to detect changes
   */
  onChangeFormItem?: TOnChangeFormItem
}

const TextArea = ({
  onChangeFormItem,
  name = 'gamification',
  placeholder = '',
  cols = 5,
  rows = 5,
  ...genericsProps
}: ITextArea) => {
  const handleChangeOnTextArea = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault()
    onChangeFormItem?.(e.target.value)
  }

  return (
    <S.TextArea
      name={name}
      placeholder={placeholder}
      cols={cols}
      rows={rows}
      onChange={handleChangeOnTextArea}
      {...getGenericPropStyles(genericsProps)}
    />
  )
}

export default TextArea
