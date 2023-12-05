import {
  TDesignTokens,
  TDesignUI,
  TComponentEvents,
} from 'core/domain/types/design-system'

export type TPositionPrefix = 'left' | 'right'

export type TOnChangeFormItem = (
  value: any,
  ...props: unknown[]
) => unknown | void

export type TInput = {
  /**
   * Placeholder Input to show
   */
  placeholder?: string
  /**
   * Identifier Input
   */
  name?: string
  /**
   * Value Input
   */
  value?: string
  /**
   * Prefix Content Input
   */
  prefix?: React.ReactNode
  /**
   * Prefix Position
   */
  positionPrefix?: TPositionPrefix
  /**
   * Input Type
   */
  type?: 'password' | 'input' | 'number'
  /**
   * Autocomplete action
   */
  autoComplete?: 'off' | 'on'
  /**
   * Function to detect changes
   */
  onChangeFormItem?: TOnChangeFormItem
  /**
   * Is Readonly input
   */
  readOnly?: boolean
}

export type TInputComponent = TInput &
  TDesignTokens &
  TDesignUI &
  TComponentEvents<any, any>
