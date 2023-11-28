import { TDesignUI } from 'core/domain/types/design-system'
import { TOnChangeFormItem } from '../Input/type'
import { IGenericEvents } from 'core/domain/interfaces/IGeneralProps'

export type TRadioItem = {
  /**
   * Radio Item content
   */
  children: string
  /**
   * Radio Value
   */
  value: string
  /**
   * Is checked prop
   */
  isChecked?: boolean
}

export type TRadio = {
  /**
   * Function to detect changes
   */
  onChangeFormItem?: TOnChangeFormItem
  /**
   * Children Element
   */
  children: React.ReactNode[]
  /**
   * Function to detect changes
   */
  name?: string
  /**
   * Function to detect changes
   */
  value?: unknown
}

export type TRadioComponent = TRadio & TDesignUI & IGenericEvents
