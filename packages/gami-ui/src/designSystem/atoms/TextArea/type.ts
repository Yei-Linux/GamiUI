import {
  TComponentEvents,
  TDesignTokens,
  TDesignUI,
} from 'core/domain/types/design-system'
import { TOnChangeFormItem } from '../Input/type'
import { IComponentsVariant } from 'core/domain/interfaces/IComponentsVariant'

interface AutoSize {
  minRows: number
  maxRows: number
}

export type TTextArea = {
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

export type TTextAreaComponent = TTextArea &
  TDesignTokens &
  TDesignUI &
  TComponentEvents<any, any> &
  IComponentsVariant
