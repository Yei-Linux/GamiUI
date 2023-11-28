import { OptionTypeBase } from 'react-select'
import { TInputComponent } from '../Input/type'

export interface IOptions {
  value: string
  label: string | React.ReactNode
}

type TSelectValue = OptionTypeBase[] | OptionTypeBase | null | undefined

export type TSelect = {
  /**
   * Children Element
   */
  options?: IOptions[]
  /**
   * Multiple Option
   */
  isMultiple?: boolean
  /**
   * isClearable Option
   */
  isClearable?: boolean
  /**
   * isClearable Option
   */
  value?: TSelectValue
}

export type TSelectComponent = TSelect & Omit<TInputComponent, 'value'>
