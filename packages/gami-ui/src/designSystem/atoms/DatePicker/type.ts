import { TPattern } from 'core/helpers'
import { TOnChangeFormItem } from '../Input/Input'
import { TDesignUI } from 'core/domain/types/design-system'

export type TDatePicker = {
  onChangeFormItem?: TOnChangeFormItem
  value?: Date
  formatter?: TPattern
}

export type TDatePickerComponent = TDatePicker & Pick<TDesignUI, 'className'>
