import { TPattern } from 'core/helpers'
import { TDesignUI } from 'core/domain/types/design-system'
import { TOnChangeFormItem } from '../Input/type'

export type TDatePicker = {
  onChangeFormItem?: TOnChangeFormItem
  value?: Date
  formatter?: TPattern
}

export type TDatePickerComponent = TDatePicker & Pick<TDesignUI, 'className'>
