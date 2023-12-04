import { TDesignUI } from 'core/domain/types/design-system'
import { TOnChangeFormItem } from '../Input/type'

export type TColorPicker = {
  value?: string
  onChangeFormItem?: TOnChangeFormItem
}

export type TTColorPickerComponent = TColorPicker & Pick<TDesignUI, 'className'>
