import { TDesignUI } from 'core/domain/types/design-system'
import { TOnChangeFormItem } from '../Input/Input'

export type TColorPicker = {
  value?: string
  onChangeFormItem?: TOnChangeFormItem
}

export type TTColorPickerComponent = TColorPicker & Pick<TDesignUI, 'className'>
